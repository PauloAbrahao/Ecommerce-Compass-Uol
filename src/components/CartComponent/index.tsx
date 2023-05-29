import React from "react";
import { Image, TouchableOpacity, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CartScreenNavigator } from "../../config/types";
import { useCart } from "../../context";
import styles from "./styles";
import { icons } from "../../../assets/icons";




const CartComponent: React.FC = () => {
  const { getTotalItemCount } = useCart();
  const navigation: CartScreenNavigator = useNavigation();

  const onPress = () => {
    navigation.navigate("CART");
  };

  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.cartCounter}>
          <Text style={styles.counter}>{getTotalItemCount()}</Text>
        </View>
        <Image
          source={icons.cartHeader}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </>
  );
};

export default CartComponent;
