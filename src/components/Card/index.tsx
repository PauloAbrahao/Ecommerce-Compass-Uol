import React from "react";
import {
  Pressable,
  Image,
  Text,
  ImageSourcePropType,
  View,
} from "react-native";
import { cardCart, cardHome } from "./style";
import Price from "../Price";
import QuantityButton from "../QuantityButton";

const heartImage = require("../../../assets/icons/heart.png");
const heartImageWhite = require("../../../assets/icons/heartWhite.png");
const minusImage = require("../../../assets/icons/minusCart.png");

interface CardProps {
  image: ImageSourcePropType;
  title: string;
  price: string;
  onPress?: () => void;
  isCart: boolean;
  heartIconPress?: () => void;
  favorite?: boolean;
  removeButtonPress?: () => void;
}

function Card({
  image,
  title,
  price,
  onPress,
  isCart,
  favorite,
  heartIconPress,
  removeButtonPress,
}: CardProps): JSX.Element {
  const styles = isCart ? cardCart : cardHome;

  return (
    <View>
      <Pressable
        style={({ pressed }) => [styles.card, pressed && cardHome.pressed]}
        onPress={onPress}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image} />
        </View>
        <View style={styles.priceContainer}>
          <Price>{price}</Price>
          {!isCart && (
            <Pressable onPress={heartIconPress}>
              <Image
                source={favorite ? heartImageWhite : heartImage}
                style={cardHome.iconHeart}
              />
            </Pressable>
          )}
        </View>
      </Pressable>
      {isCart && (
        <View style={cardCart.remove}>
          <QuantityButton
            isCart={isCart}
            children={minusImage}
            onPress={removeButtonPress}
          />
        </View>
      )}
    </View>
  );
}

export default Card;
