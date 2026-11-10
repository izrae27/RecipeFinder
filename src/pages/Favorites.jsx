import { Link, useNavigate } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import RecipeCard from "../components/RecipeCard";
import "../App.css";

function Favorites() {
  const { favorites } = useFavorites();
  const navigate = useNavigate();

  function handleSelectRecipe(id) {
    navigate(`/recipe/${id}`);
  }

  return (
    <main className="recipes-section favorites-page">
      <Link to="/" className="back-link">
        ← Back to Home
      </Link>

      <div className="section-heading">
        <span className="section-label">YOUR SAVED COLLECTION</span>
        <h2>My Favorite Recipes</h2>
        <p>All the recipes you have saved in one place.</p>
      </div>

      {favorites.length === 0 ? (
        <div className="message">
          <h3>No favorite recipes yet.</h3>
          <p>Explore recipes and save the ones you love!</p>
          <Link to="/" className="back-link">
            Discover Recipes
          </Link>
        </div>
      ) : (
        <div className="recipe-grid">
          {favorites.map((meal) => (
            <RecipeCard
              key={meal.idMeal}
              meal={meal}
              onSelect={handleSelectRecipe}
            />
          ))}
        </div>
      )}
    </main>
  );
}

export default Favorites;