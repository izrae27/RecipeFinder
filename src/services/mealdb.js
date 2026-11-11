
const API_KEY = import.meta.env.VITE_MEALDB_API_KEY;

const BASE_URL = `https://www.themealdb.com/api/json/v1/${API_KEY}`;

// Reusable function for sending API requests
async function fetchData(endpoint) {
  if (!API_KEY) {
    throw new Error("TheMealDB API key is missing. Check your .env file.");
  }

  const response = await fetch(`${BASE_URL}/${endpoint}`);

  if (!response.ok) {
    throw new Error("Failed to connect to TheMealDB API.");
  }

  return response.json();
}

// Search recipes by name
export async function searchMeals(query) {
  const data = await fetchData(
    `search.php?s=${encodeURIComponent(query)}`
  );

  return data.meals || [];
}

// Get a recipe using its ID
export async function getMealById(id) {
  const data = await fetchData(
    `lookup.php?i=${encodeURIComponent(id)}`
  );

  return data.meals ? data.meals[0] : null;
}

// Get all recipe categories
export async function getCategories() {
  const data = await fetchData("categories.php");

  return data.categories || [];
}

// Get recipes by category
export async function getMealsByCategory(category) {
  const data = await fetchData(
    `filter.php?c=${encodeURIComponent(category)}`
  );

  return data.meals || [];
}

// Get a random recipe
export async function getRandomMeal() {
  const data = await fetchData("random.php");

  return data.meals ? data.meals[0] : null;
}
