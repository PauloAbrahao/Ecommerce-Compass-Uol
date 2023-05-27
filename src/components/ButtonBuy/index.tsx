import React from "react";
import { View, Pressable, Text, ActivityIndicator } from "react-native";
import { styles } from "./style";
import { ButtonBuyProps } from "../../config/types";

const ButtonBuy: React.FC<ButtonBuyProps> = ({
  children,
  onPress,
  isloading,
  quantity,
}) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
      disabled={quantity === 0 ? true : false}
    >
      <View>
        {isloading ? (
          <ActivityIndicator size={"large"} color="white" />
        ) : (
          <Text style={styles.text}>{children}</Text>
        )}
      </View>
    </Pressable>
  );
}

export default ButtonBuy;
