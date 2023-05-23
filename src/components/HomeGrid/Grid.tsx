import { ScrollView, View } from "react-native";
import React from "react";

import styles from "./style";
import Card from "../Card";

const myImage = require("../../../assets/icons/username.png");

const Grid = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Card
          image={myImage}
          title="JBL TEste TESDDSD SDSDk dskhdsdh"
          price="300,00"
          isCart={true}
          favorite={false}
        />
        <Card
          image={myImage}
          title="JBL TEste TESDDSD SDSDk dskhdsdh"
          price="300,00"
          isCart={false}
          favorite={false}
        />
      </View>
    </ScrollView>
  );
};

export default Grid;
