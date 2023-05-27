import React, { createContext, useState, useContext } from "react";

type FavoritesContextType = {
  favorites: number[];
  addFavorite: (product: number) => void;
  removeFavorite: (productId: number) => void;
  isFavorite: (productId: number) => boolean;
};

const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
  isFavorite: () => false,
});

type FavProviderProps = {
  children: React.ReactNode;
};

export const FavoritesProvider = ({ children }: FavProviderProps) => {
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
