import React from "react";
import { Pressable, Image, Text, View } from "react-native";
import { cardCart, cardHome } from "./style";
import Price from "../Price";
import QuantityButton from "../QuantityButton";
import { useCart } from "../../context";

const heartImage = require("../../../assets/icons/heart.png");
const heartImageWhite = require("../../../assets/icons/heartWhite.png");
const minusImage = require("../../../assets/icons/minusCart.png");

export interface CardProps {
  id: number;
  image?: string;
  title: string;
  price: number;
  onPress?: () => void;
  isCart: boolean;
  heartIconPress?: () => void;
  favorite?: boolean;
  removeButtonPress?: () => void;
}

function Card({
  id,
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

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const product = {
      id: id,
      title: title,
      price: price,
    };

    addToCart(product);
  };

  return (
    <View>
      <Pressable
        style={({ pressed }) => [styles.card, pressed && cardHome.pressed]}
        onPress={handleAddToCart}
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
          <Price>{price.toString()}</Price>
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
