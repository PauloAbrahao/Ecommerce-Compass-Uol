import React from "react";
import { Pressable, Image, Text, View } from "react-native";
import { cardCart, cardHome } from "./style";
import Price from "../Price";
import QuantityButton from "../QuantityButton";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import Favorite from "../Favorite";

import { icons } from "../../../assets/icons";

export interface CardProps {
  id: number;
  image?: string;
  title: string;
  price: number;
  description?: string;
  rating?: {
    rate: number;
  };
  onPress?: () => void;
  isCart: boolean;
  heartIconPress?: () => void;
  favorite?: boolean;
  removeButtonPress?: () => void;
}

// DEFINE NAVIGATION TYPE
type DetailsScreenNavigationProp = StackNavigationProp<
  ParamListBase,
  "Details_Screen"
>;

function Card({
  id,
  image,
  title,
  price,
  description,
  rating,
  isCart,
  favorite,
  heartIconPress,
  removeButtonPress,
}: CardProps): JSX.Element {
  const styles = isCart ? cardCart : cardHome;

  const navigation: DetailsScreenNavigationProp = useNavigation();

  const handleNavigate = () => {
    navigation.navigate("Details_Screen", {
      id,
      title,
      price,
      image,
      description,
      rating,
    });
  };

  return (
    <View>
      <Pressable
        style={({ pressed }) => [styles.card, pressed && cardHome.pressed]}
        onPress={handleNavigate}
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
          <Price isHome={!isCart}>{price.toString()}</Price>
          {!isCart && (
            <Favorite favorite={favorite} heartIconPress={heartIconPress} />
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
