import React from "react";
import { View, Text } from "react-native";
import Image from "../CartComponent/index";
import styles from "./style";


const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.welcome}>Welcome</Text>
          <Text style={styles.name}>Welliton</Text>
          <View style={styles.line}></View>
        </View>
        <View style={styles.headerRight}>
          <Image />
        </View>
      </View>
    </View>
  );
};

export default Header;
