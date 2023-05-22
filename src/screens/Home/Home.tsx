import { ScrollView } from "react-native";
import React from "react";
import Grid from "../../components/HomeGrid/Grid";

import Index from "./Header";

import styles from "./style";

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      {/* GRID COMPONENT */}
      <Index />
      <Grid />
    </ScrollView>
  );
};

export default Home;
