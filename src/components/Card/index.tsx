import React from "react";
import {
  Pressable,
  Image,
  Text,
  ImageSourcePropType,
  View,
  StyleProp,
} from "react-native";
import { cardCart, cardHome } from "./style";
import Price from "../Price";

const heartImage = require("../../../assets/icons/heart.png");

interface CardProps {
  image: ImageSourcePropType;
  title: string;
  price: string;
  onPress?: () => void;
  isCart: boolean;
  heartIconFunction?: () => void;
  favorite?: boolean;
}

function Card({
  image,
  title,
  price,
  onPress,
  isCart,
  favorite,
  heartIconFunction,
}: CardProps): JSX.Element {
  const styles = isCart ? cardCart : cardHome;

  return (
    <Pressable
      style={({ pressed }) => [styles.card, pressed && cardHome.pressed]}
      onPress={onPress}
    >
      <View style={isCart ? cardCart.container : null}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image} />
        </View>
      </View>
      <View style={styles.priceContainer}>
        <Price>{price}</Price>
        {!isCart ? (
          <Pressable onPress={heartIconFunction}>
            <Image
              source={heartImage}
              style={[
                cardHome.iconHeart,
                favorite && { backgroundColor: "white" },
              ]}
            />
          </Pressable>
        ) : null}
      </View>
    </Pressable>
  );
}

export default Card;
