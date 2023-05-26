import React from "react";
import { View, Pressable, Text, ActivityIndicator } from "react-native";
import { styles } from "./style";

type ButtonBuyProps = {
  children: string;
  onPress: () => void;
  isloading: boolean;
  quantity: number;
};

function ButtonBuy({
  children,
  onPress,
  isloading,
  quantity,
}: ButtonBuyProps): JSX.Element {
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
          <Text>{children}</Text>
        )}
      </View>
    </Pressable>
  );
}

export default ButtonBuy;
