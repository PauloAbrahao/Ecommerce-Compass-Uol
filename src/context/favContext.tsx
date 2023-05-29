import React, { createContext, useState, useContext } from "react";
import { FavoritesContextType } from "../config/types";
import { ProviderProps } from "../config/types";

const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
  isFavorite: () => false,
});

export const FavoritesProvider = ({ children }: ProviderProps) => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const addFavorite = (product: number) => {
    setFavorites((prevFavorites) => [...prevFavorites, product]);
  };

  const removeFavorite = (productId: number) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((id) => id !== productId)
    );
  };

  const isFavorite = (productId: number) => {
    return favorites.some((id) => id === productId);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
