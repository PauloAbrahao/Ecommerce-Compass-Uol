import React from "react";
import { Image, Pressable, ImageSourcePropType } from "react-native";
import { cartButton, detailButton } from "./style";
import { QuantityButtonProps } from "../../config/types";

const QuantityButton: React.FC<QuantityButtonProps> =({
  children,
  onPress,
  isCart,
})=>{
  const styles = isCart ? cartButton : detailButton;

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
