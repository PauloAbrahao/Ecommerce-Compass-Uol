import { Image } from "react-native";
import React from "react";

const index = () => {
  return (
    <>
      <Image
        source={require("../../../assets/icons/cart.png")}
        resizeMode="contain"
      />
    </>
  );
};

export default index;
