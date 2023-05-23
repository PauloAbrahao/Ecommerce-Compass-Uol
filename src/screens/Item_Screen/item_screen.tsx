import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';


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

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/1')
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

  if (!product) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
  <View style={styles.box}>
    <Text style={styles.title}>{product.title}</Text>
    <Image style={styles.image} source={{ uri: product.image }} />
    <Text style={styles.rating}>Rating: {product.rating.rate}</Text>

    <Text style={styles.price}>R${product.price}</Text>

    <View style={styles.quantityContainer}>
      <TouchableOpacity onPress={handleSubtract}>
        <Text style={styles.icon}>-</Text>
      </TouchableOpacity>
      <Text style={styles.quantity}>{quantity}</Text>
      <TouchableOpacity onPress={handleAdd}>
        <Text style={styles.icon}>+</Text>
      </TouchableOpacity>
    </View>

    <Text style={styles.description}>{product.description}</Text>
  
    <TouchableOpacity
      style={[styles.button, { opacity: quantity >= 1 ? 1 : 0.5 }]}
      onPress={handleSaveQuantity}
      disabled={quantity === 0}>
      <Text style={styles.buttonText}>ADD TO CART</Text>
    </TouchableOpacity>
  </View>
</View>
  );
};
export default ProductScreen;