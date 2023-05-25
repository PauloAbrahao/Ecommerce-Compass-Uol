import { ScrollView, View } from "react-native";
import React from "react";
import Grid from "../../components/HomeGrid/index";

import Header from "../../components/Header/index";

import styles from "./style";

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      {/* GRID COMPONENT */}

      <ScrollView>
        <Grid />
      </ScrollView>
    </View>
  );
};

export default Home;
