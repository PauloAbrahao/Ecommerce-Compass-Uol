import { View } from "react-native";
import React, { useState } from "react";
import Card from "../../../Card";

import styles from "./style";
import { useCart } from "../../../../context";

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
  favorite?: boolean;
}

const index: React.FC<store> = (item) => {
  const [favorite, setFavorite] = useState<boolean>(false);

  // const { cartItems } = useCart();

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <View style={styles.content}>
      <Card
        {...item}
        isCart={false}
        heartIconPress={toggleFavorite}
        favorite={favorite}
      />
    </View>
  );
};

export default index;
