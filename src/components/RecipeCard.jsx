import { useFavorites } from "../context/FavoritesContext";

function RecipeCard({ meal, onSelect }) {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const saved = isFavorite(meal.idMeal);

  function handleFavorite() {
    if (saved) {
      removeFavorite(meal.idMeal);
    } else {
      addFavorite(meal);
    }
  }

  return (
    <article className="recipe-card">
      <button
        className="recipe-image-button"
        type="button"
        onClick={() => onSelect(meal.idMeal)}
      >
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="recipe-image"
          loading="lazy"
        />
      </button>

      <div className="recipe-card-content">
        <span className="recipe-category">
          {meal.strCategory || "Recipe"}
        </span>

        <h3>{meal.strMeal}</h3>

        <button
          type="button"
          className="view-recipe-button"
          onClick={() => onSelect(meal.idMeal)}
        >
          View Recipe
        </button>

        <button
          type="button"
          className="favorite-button"
          onClick={handleFavorite}
        >
          {saved ? "♥ Remove Favorite" : "♡ Add to Favorites"}
        </button>
      </div>
    </article>
  );
}

export default RecipeCard;