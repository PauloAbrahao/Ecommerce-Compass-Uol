import { ScrollView } from "react-native";
import React from "react";
import Grid from "../../components/HomeGrid/index";

import Header from "./Header";

import styles from "./style";

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      {/* GRID COMPONENT */}
      <Header />
      <Grid />
    </ScrollView>
  );
};

export default Home;
