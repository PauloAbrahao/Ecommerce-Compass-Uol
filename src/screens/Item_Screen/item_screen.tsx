import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { styles } from './styles';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
}

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type ProductDetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ProductDetails'
>;

type ProductDetailsScreenRouteProp = RouteProp<RootStackParamList, 'ProductDetails'>;

type RootStackParamList = {
  Home: undefined;
  ProductDetails: { product: Product };
};

const HomeScreen: React.FC<{ navigation: HomeScreenNavigationProp }> = ({ navigation }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleProductPress = (product: Product) => {
    navigation.navigate('ProductDetails', { product });
  };

  return (
    <View style={styles.container}>
      {products.map((product) => (
        <TouchableOpacity
          key={product.id}
          style={styles.productCard}
          onPress={() => handleProductPress(product)}
        >
          <Text style={styles.productTitle}>{product.title}</Text>
          <Text style={styles.productPrice}>Price: ${product.price}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const ProductDetailsScreen: React.FC<{
  route: ProductDetailsScreenRouteProp;
  navigation: ProductDetailsScreenNavigationProp;
}> = ({ route, navigation }) => {
  const { product } = route.params;

  const handleBuyButtonPress = () => {
    console.log('Buy product:', product);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.productTitle}>{product.title}</Text>
      <Text style={styles.productDescription}>{product.description}</Text>
      <Text style={styles.productPrice}>Price: ${product.price}</Text>
      <TouchableOpacity
        onPress={handleBuyButtonPress}
        style={styles.buyButton}
      >
        <Text style={styles.buyButtonText}>Buy</Text>
      </TouchableOpacity>
    </View>
  );
};

const Stack = createStackNavigator<RootStackParamList>();

export default function appitem() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
