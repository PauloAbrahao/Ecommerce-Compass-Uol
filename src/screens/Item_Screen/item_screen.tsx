import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import ButtonBuy from '../../components/ButtonBuy';
import Price from '../../components/Price';

interface Product {
  title: string;
  price: number;
  description: string;
  image: string;
  rating: {
    rate: number;
  };
}

const ProductScreen = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState<number>(0);
  const [savedQuantity, setSavedQuantity] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false); // Adicionado

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/19')
      .then(response => response.json())
      .then((data: Product) => setProduct(data));
  }, []);

  const handleAdd = () => {
    setQuantity(quantity + 1);
  };

  const handleSaveQuantity = () => {
    if (quantity >= 1) {
      setSavedQuantity(quantity);
    }
  };

  const handleSubtract = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleBuy = () => {
    setIsLoading(true);

    // Simulação de uma requisição à API
    setTimeout(() => {
      setIsLoading(false);
      // Lógica adicional após a compra, se necessário
    }, 2000);
  };

  if (!product) {
    return <Text>Loading...</Text>;
  }

  // Função para renderizar as estrelas com base no rating
  const renderStars = () => {
    const { rate } = product.rating;
    const stars = [];

    for (let i = 0; i < rate; i++) {
      stars.push(<Text key={i} style={styles.star}>⭐</Text>);
    }

    return stars;
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>{product.title}</Text>
        <Image style={styles.image} source={{ uri: product.image }} resizeMode="contain" />
        <View style={styles.ratingContainer}>{renderStars()}</View>

        <View style={styles.containerPrice}>
          <Price>{product.price.toFixed(2)}</Price>

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

        <Text style={styles.description}>{product.description}</Text>

        <View style={styles.bottoncentralization}>
          <ButtonBuy onPress={handleBuy} isloading={isLoading}>
            BUY
          </ButtonBuy>
        </View>
      </View>
    </View>
  );
};

export default ProductScreen;
