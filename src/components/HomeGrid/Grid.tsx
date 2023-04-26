import { ScrollView, View } from "react-native";
import React from "react";

import styles from "./style";

const Grid = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.square}></View>
        <View style={styles.square}></View>
        <View style={styles.square}></View>
        <View style={styles.square}></View>
        <View style={styles.square}></View>
        <View style={styles.square}></View>
        <View style={styles.square}></View>
        <View style={styles.square}></View>
      </View>
    </ScrollView>
  );
};

export default Grid;
