import React from "react";
import { Pressable, Image, Text, View } from "react-native";
import { cardCart, cardHome } from "./style";
import Price from "../Price";
import QuantityButton from "../QuantityButton";
import { icons } from "../../../assets/icons";

const heartImage = require("../../../assets/icons/heart.png");
const heartFavImage = require("../../../assets/icons/heartFav.png");
const minusImage = require("../../../assets/icons/minusCart.png");

interface CardProps {
  image: string;
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
          <Text numberOfLines={2} style={styles.title}>
            {title}
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
        <View style={styles.priceContainer}>
          <Price isHome={!isCart}>{price}</Price>
          {!isCart && (
            <Pressable onPress={heartIconPress}>
              <Image
                source={favorite ? heartFavImage : heartImage}
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
            children={icons.minusCart}
            onPress={removeButtonPress}
          />
        </View>
      )}
    </View>
  );
}

export default Card;
