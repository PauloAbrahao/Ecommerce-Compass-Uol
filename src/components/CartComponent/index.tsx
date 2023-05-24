import { Image, TouchableOpacity, View, Text } from "react-native";
import React from "react";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import styles from "./styles";

type CartScreenNavigator = StackNavigationProp<ParamListBase, "Cart_Screen">;

const index = () => {
  const navigation: CartScreenNavigator = useNavigation();

  const onPress = () => {
    navigation.navigate("CART");
  };

  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.cartCounter}>
          <Text style={styles.counter}>2</Text>
        </View>
        <Image
          source={require("../../../assets/icons/cart_header.png")}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </>
  );
};

export default index;
