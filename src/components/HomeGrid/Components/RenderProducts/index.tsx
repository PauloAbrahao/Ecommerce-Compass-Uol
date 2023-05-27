import { View } from "react-native";
import React from "react";
import Card from "../../../Card";

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
  favorite?: boolean;
}

const index: React.FC<store> = (item) => {
  return (
    <View style={styles.content}>
      <Card {...item} isCart={false} />
    </View>
  );
};

export default index;
