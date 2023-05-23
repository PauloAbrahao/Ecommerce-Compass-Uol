import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import React from "react";

import styles from "./style";

const index = () => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.left}>
          <Image source={{}} />
          <Text>texto 1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.right}>
          <Image source={{}} />
          <Text>texto 2</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default index;
