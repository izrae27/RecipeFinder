import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("recipeFavorites");

    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("recipeFavorites", JSON.stringify(favorites));
  }, [favorites]);

  function addFavorite(meal) {
    setFavorites((previous) => {
      const alreadySaved = previous.some(
        (item) => item.idMeal === meal.idMeal
      );

      if (alreadySaved) return previous;

      return [...previous, meal];
    });
  }

  function removeFavorite(id) {
    setFavorites((previous) =>
      previous.filter((meal) => meal.idMeal !== id)
    );
  }

  function isFavorite(id) {
    return favorites.some((meal) => meal.idMeal === id);
  }

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useFavorites() {
  return useContext(FavoritesContext);
}