import { View } from "react-native";
import React, { useState } from "react";
import Card from "../../../Card";
import { useFavorites } from "../../../../context/favContext";

import styles from "./style";

interface store {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const index: React.FC<store> = (item) => {
  const Favorites = useFavorites();
  return (
    <View style={styles.content}>
      <Card
        {...item}
        isCart={false}
        heartIconPress={() => {
          if (Favorites.isFavorite(item.id)) {
            Favorites.removeFavorite(item.id);
          } else {
            Favorites.addFavorite(item.id);
          }
        }}
        favorite={Favorites.isFavorite(item.id)}
      />
    </View>
  );
};

export default index;
