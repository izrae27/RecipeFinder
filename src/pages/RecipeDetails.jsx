
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getMealById } from "../services/mealdb";
import "../App.css";

function RecipeDetails() {
  const { id } = useParams();

  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadRecipe() {
      try {
        setLoading(true);
        setError("");

        const result = await getMealById(id);

        if (!result) {
          setError("Recipe not found.");
          return;
        }

        setMeal(result);
     } catch {
      setError("Unable to load recipe details. Please try again.");
    }finally {
        setLoading(false);
      }
    }

    loadRecipe();
  }, [id]);

  if (loading) {
    return (
      <div className="message">
        <div className="loader"></div>
        <p>Loading recipe details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="message error-message">
        <h2>{error}</h2>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  const ingredients = Array.from({ length: 20 }, (_, index) => {
    const ingredient = meal[`strIngredient${index + 1}`]?.trim();
    const measure = meal[`strMeasure${index + 1}`]?.trim();

    if (!ingredient) return null;

    return {
      ingredient,
      measure,
    };
  }).filter(Boolean);

  return (
    <main className="details-page">
      <Link to="/" className="back-link">
        ← Back to Recipes
      </Link>

      <section className="details-hero">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="details-image"
        />

        <div className="details-information">
          <span className="recipe-category">
            {meal.strCategory}
          </span>

          <h1>{meal.strMeal}</h1>

          <p>
            {meal.strArea
              ? `Cuisine: ${meal.strArea}`
              : "Discover this delicious recipe."}
          </p>

          {meal.strTags && (
            <p className="recipe-tags">
              Tags: {meal.strTags}
            </p>
          )}
        </div>
      </section>

      <section className="ingredients-section">
        <h2>Ingredients</h2>

        <ul className="ingredient-list">
          {ingredients.map((item, index) => (
            <li key={index}>
              <span>{item.ingredient}</span>
              <strong>{item.measure || "As needed"}</strong>
            </li>
          ))}
        </ul>
      </section>

      <section className="instructions-section">
        <h2>Cooking Instructions</h2>

        <p>{meal.strInstructions}</p>
      </section>

      {meal.strYoutube && (
        <section className="tutorial-section">
          <a
            href={meal.strYoutube}
            target="_blank"
            rel="noreferrer"
          >
            Watch Cooking Tutorial on YouTube ↗
          </a>
        </section>
      )}
    </main>
  );
}

export default RecipeDetails;
