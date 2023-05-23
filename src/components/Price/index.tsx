import React from "react";
import { View, Text } from "react-native";
import { styles } from "./style";

interface PriceProps {
  children: string;
}

function Price({ children }: PriceProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>R$ {children}</Text>
    </View>
  );
}

export default Price;
