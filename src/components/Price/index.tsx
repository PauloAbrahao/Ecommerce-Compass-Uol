import React from "react";
import { View, Text } from "react-native";
import { styleHome, styleProduct } from "./style";

interface PriceProps {
  children: string;
  isHome?: boolean;
}

function Price({ children, isHome }: PriceProps): JSX.Element {
  const styles = isHome ? styleHome : styleProduct;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>R$ {children}</Text>
    </View>
  );
}

export default Price;
