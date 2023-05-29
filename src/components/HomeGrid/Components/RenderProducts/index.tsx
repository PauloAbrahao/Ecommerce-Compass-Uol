import { View } from "react-native";
import React from "react";
import Card from "../../../Card";
import { useFavorites } from "../../../../context/favContext";
import { store } from "../../../../config/interface";
import styles from "./style";

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
