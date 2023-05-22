import { View, Text, Image } from "react-native";
import React from "react";

import styles from "./style";

const index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.welcome}>Welcome</Text>
          <Text style={styles.name}>Welliton</Text>
          <View style={styles.line}></View>
        </View>
        <View style={styles.headerRight} >
          <Image source={require("../../../../assets/icons/cart.png")} />
        </View>
      </View>
    </View>
  );
};

export default index;