import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import ButtonBuy from "../../components/ButtonBuy";
import Price from "../../components/Price";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { CartItem, useCart } from "../../context";
import { useFavorites } from "../../context/favContext";
import QuantityButton from "../../components/QuantityButton";

import { RouteProp } from "@react-navigation/native";
import CustomModal from "../../components/Modal";
import Favorite from "../../components/Favorite";

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

  const { id, title, price, image, description, rating } = route.params;

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

  const Favorites = useFavorites();
  const toggleFavorite = (id: any) => {
    if (Favorites.isFavorite(id)) {
      Favorites.removeFavorite(id);
    } else {
      Favorites.addFavorite(id);
    }
  };

  return (
    <View style={styles.container}>
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

        <View style={styles.starsContainer}>{renderStars(rating.rate)}</View>

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
      <View style={styles.heartContainer}>
        <Favorite
          heartIconPress={() => toggleFavorite(id)}
          favorite={Favorites.isFavorite(id)}
          isDetail={true}
        />
      </View>
    </View>
  );
};

export default ProductScreen;
