import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import ButtonBuy from "../../components/ButtonBuy";
import Price from "../../components/Price";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useCart } from "../../context";

import { RouteProp } from "@react-navigation/native";

type RootStackParamList = {
  Product: {
    id: number;
    title: string;
    price: number;
    image: string;
    description: string;
    rating: {
      rate: number;
    };
  };
};

type ProductScreenRouteProp = RouteProp<RootStackParamList, "Product">;

type ProductScreenProps = {
  route: ProductScreenRouteProp;
};

const ProductScreen: React.FC<ProductScreenProps> = ({ route }) => {
  const [quantity, setQuantity] = useState<number>(0);
  const [savedQuantity, setSavedQuantity] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { id, title, price, image, description, rating } = route.params;

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const product = {
      id: id,
      title: title,
      price: price,
      quantity: quantity,
    };

    addToCart(product, quantity);

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const handleSaveQuantity = () => {
    if (quantity >= 1) {
      setSavedQuantity(quantity);
    }
  };

  const handleAdd = () => {
    setQuantity(quantity + 1);
  };

  const handleSubtract = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const renderStars = (rate: number) => {
    const stars = [];
    const fullStarCount = Math.floor(rate);
    const halfStar = rate % 1 !== 0;

    for (let i = 0; i < fullStarCount; i++) {
      stars.push(
        <FontAwesome
          key={`full-star-${i}`}
          name="star"
          size={28}
          color="#D78F3C"
          style={{ marginRight: 7 }}
        />
      );
    }

    if (halfStar) {
      stars.push(
        <FontAwesome
          key="half-star"
          name="star-half-empty"
          size={28}
          color="#D78F3C"
          style={{ marginRight: 7 }}
        />
      );
    }

    const remainingStars = 5 - Math.ceil(rate);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Feather
          key={`empty-star-${i}`}
          name="star"
          size={28}
          color="#D78F3C"
          style={{ marginRight: 7 }}
        />
      );
    }

    return stars;
  };

  if (!id) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>{title}</Text>
        <Image
          style={styles.image}
          source={{ uri: image }}
          resizeMode="contain"
        />

        <View style={styles.starsContainer}>{renderStars(rating.rate)}</View>

        <View style={styles.containerPrice}>
          <Price>{price.toFixed(2)}</Price>

          <View style={styles.itemNum2}>
            <TouchableOpacity onPress={handleSubtract}>
              <Text style={styles.icon}>-</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.quantity}>{quantity}</Text>

          <View style={styles.itemNum}>
            <TouchableOpacity onPress={handleAdd}>
              <Text style={styles.icon}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.description}>{description}</Text>

        <View style={styles.bottoncentralization}>
          <ButtonBuy onPress={handleAddToCart} isloading={isLoading}>
            ADD TO CART
          </ButtonBuy>
        </View>
      </View>
    </View>
  );
};

export default ProductScreen;