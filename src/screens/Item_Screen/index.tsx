import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import ButtonBuy from "../../components/ButtonBuy";
import Price from "../../components/Price";
import { useCart } from "../../context";
import QuantityButton from "../../components/QuantityButton";

import { RouteProp } from "@react-navigation/native";
import CustomModal from "../../components/Modal";
import Favorite from "../../components/Favorite";
import Stars from "./components/stars";

import { icons } from "../../../assets/icons";

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
    favorite: boolean;
    heartIconPress: () => void;
  };
};

type ProductScreenRouteProp = RouteProp<RootStackParamList, "Product">;

type ProductScreenProps = {
  route: ProductScreenRouteProp;
};

const ProductScreen: React.FC<ProductScreenProps> = ({ route }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    id,
    title,
    price,
    image,
    description,
    rating,
    favorite,
    heartIconPress,
  } = route.params;

  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setQuantity(0);
  };

  const handleAddToCart = () => {
    const product = {
      id: id,
      title: title,
      price: price,
      image: image,
      description: description,
      rating: rating,
      favorite: favorite,
    };

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      openModal();
      addToCart(product, quantity);
    }, 3000);
  };

  const handleAdd = () => {
    setQuantity(quantity + 1);
  };

  const handleSubtract = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  if (!id) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loading}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Favorite heartIconPress={heartIconPress} favorite={favorite} />

      <CustomModal
        header="Good!"
        message="Product added to cart."
        onClose={() => closeModal()}
        visible={modalVisible}
      />

      <View style={styles.box}>
        <Text style={styles.title}>{title}</Text>

        <Image
          style={styles.image}
          source={{ uri: image }}
          resizeMode="contain"
        />

        <View style={styles.starsContainer}>
          <Stars rate={rating.rate} />
        </View>

        <View style={styles.containerPrice}>
          <Price>{price.toFixed(2)}</Price>

          <View style={styles.numContainer}>
            <QuantityButton
              children={icons.minusImage}
              onPress={handleSubtract}
            />

            <Text style={styles.quantity}>{quantity}</Text>

            <QuantityButton children={icons.plusImage} onPress={handleAdd} />
          </View>
        </View>

        <Text style={styles.description} numberOfLines={4}>
          {description}
        </Text>

        <View style={styles.bottoncentralization}>
          <ButtonBuy
            onPress={handleAddToCart}
            children="ADD TO CART"
            isloading={isLoading}
            quantity={quantity}
          />
        </View>
      </View>
    </View>
  );
};

export default ProductScreen;
