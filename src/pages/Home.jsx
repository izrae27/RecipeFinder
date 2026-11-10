
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  searchMeals,
  getCategories,
  getMealsByCategory,
} from "../services/mealdb";
import RecipeCard from "../components/RecipeCard";
import "../App.css";

function Home() {
  const [query, setQuery] = useState("");
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const recipesPerPage = 8;
  const navigate = useNavigate();

  // Search recipes using TheMealDB API
  async function handleSearch(searchTerm) {
    if (!searchTerm.trim()) {
      setLoading(false);
      setMeals([]);
      setError("Please enter a recipe name.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setCurrentPage(1);

      const results = await searchMeals(searchTerm);
      setMeals(results);
    } catch {
      setError("Unable to load recipes. Please try again.");
      setMeals([]);
    } finally {
      setLoading(false);
    }
  }

  // Filter recipes by selected category
  async function handleCategoryChange(category) {
    setSelectedCategory(category);
    setQuery("");
    setCurrentPage(1);

    if (!category) {
      handleSearch("chicken");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const results = await getMealsByCategory(category);
      setMeals(results);
    } catch {
      setError("Unable to load this category. Please try again.");
      setMeals([]);
    } finally {
      setLoading(false);
    }
  }

  // Load initial recipes and categories
  useEffect(() => {
    let ignore = false;

    async function loadInitialRecipes() {
      try {
        const results = await searchMeals("chicken");

        if (!ignore) {
          setMeals(results);
        }
      } catch {
        if (!ignore) {
          setError("Unable to load recipes. Please try again.");
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    async function loadInitialCategories() {
      try {
        const results = await getCategories();

        if (!ignore) {
          setCategories(results);
        }
      } catch {
        console.error("Unable to load categories.");
      }
    }

    loadInitialRecipes();
    loadInitialCategories();

    return () => {
      ignore = true;
    };
  }, []);

  // Handle search form submission
  function handleSubmit(event) {
    event.preventDefault();
    setSelectedCategory("");
    handleSearch(query);
  }

  // Open recipe details
  function handleSelectRecipe(id) {
    navigate(`/recipe/${id}`);
  }

  // Retry the current search or category
  function handleRetry() {
    if (selectedCategory) {
      handleCategoryChange(selectedCategory);
    } else {
      handleSearch(query || "chicken");
    }
  }

  // Pagination calculations
  const totalPages = Math.ceil(meals.length / recipesPerPage);

  const startIndex = (currentPage - 1) * recipesPerPage;

  const currentMeals = meals.slice(
    startIndex,
    startIndex + recipesPerPage
  );

  // Change the current page
  function handlePageChange(page) {
    setCurrentPage(page);

    window.scrollTo({
      top: 500,
      behavior: "smooth",
    });
  }

  return (
    <main>
      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-label">
            YOUR DAILY RECIPE COMPANION
          </span>

          <h1>
            Discover recipes.
            <br />
            <span>Cook something amazing.</span>
          </h1>

          <p>
            Find delicious meals, explore new dishes, and
            discover something wonderful to cook today.
          </p>

          <form className="search-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search recipes..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />

            <button type="submit" disabled={loading}>
              Search
            </button>
          </form>

          <div className="category-filter">
            <label htmlFor="category">
              Browse by Category:
            </label>

            <select
              id="category"
              value={selectedCategory}
              onChange={(event) =>
                handleCategoryChange(event.target.value)
              }
              disabled={loading && categories.length === 0}
            >
              <option value="">All Categories</option>

              {categories.map((category) => (
                <option
                  key={category.idCategory}
                  value={category.strCategory}
                >
                  {category.strCategory}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <section className="recipes-section">
        <div className="section-heading">
          <div>
            <span className="section-label">EXPLORE MEALS</span>

            <h2>
              {selectedCategory
                ? `${selectedCategory} Recipes`
                : "Discover Recipes"}
            </h2>

            <p>
              {meals.length > 0
                ? `${meals.length} recipes available`
                : "Find your next favorite meal."}
            </p>
          </div>
        </div>

        {loading && (
          <div className="message">
            <div className="loader"></div>
            <p>Finding delicious recipes...</p>
          </div>
        )}

        {!loading && error && (
          <div className="message error-message">
            <p>{error}</p>

            <button onClick={handleRetry}>
              Try Again
            </button>
          </div>
        )}

        {!loading && !error && meals.length === 0 && (
          <div className="message">
            <h3>No recipes found</h3>
            <p>Try searching for another meal.</p>
          </div>
        )}

        {!loading && !error && meals.length > 0 && (
          <>
            <div className="recipe-grid">
              {currentMeals.map((meal) => (
                <RecipeCard
                  key={meal.idMeal}
                  meal={meal}
                  onSelect={handleSelectRecipe}
                />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="pagination">
                <button
                  type="button"
                  onClick={() =>
                    handlePageChange(currentPage - 1)
                  }
                  disabled={currentPage === 1}
                >
                  Previous
                </button>

                <span>
                  Page {currentPage} of {totalPages}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    handlePageChange(currentPage + 1)
                  }
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </section>
    </main>
  );
}

export default Home;
