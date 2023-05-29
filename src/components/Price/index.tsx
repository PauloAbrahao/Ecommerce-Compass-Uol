import React from "react";
import { View, Text } from "react-native";
import { styleHome, styleProduct } from "./style";
import { PriceProps } from "../../config/types";

const Price: React.FC<PriceProps> = ({ children, isHome })=>{
  const styles = isHome ? styleHome : styleProduct;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>R$ {children}</Text>
    </View>
  );
}

export default Price;
