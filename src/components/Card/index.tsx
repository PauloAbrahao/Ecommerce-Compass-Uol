import React from "react";
import {
  Pressable,
  Image,
  Text,
  ImageSourcePropType,
  View,
} from "react-native";
import { styles } from "./style";
import Price from "../Price";

interface CardProps {
  image: ImageSourcePropType;
  title: string;
  price: string;
  onPress: () => void;
}

function Card({ image, title, price, onPress }: CardProps): JSX.Element {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{title}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <Price>{price}</Price>
    </Pressable>
  );
}

export default Card;
