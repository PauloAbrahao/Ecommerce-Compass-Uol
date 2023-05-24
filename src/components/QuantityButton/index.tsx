import React from "react";
import { Image, Pressable, ImageSourcePropType } from "react-native";
import { styles } from "./style";

type QuantityButtonProps = {
  children: ImageSourcePropType;
  onPress?: () => void;
  isCart?: boolean;
};

function QuantityButton({
  children,
  onPress,
  isCart,
}: QuantityButtonProps): JSX.Element {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Image source={children} />
    </Pressable>
  );
}

export default QuantityButton;
