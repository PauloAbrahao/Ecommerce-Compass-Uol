import { ScrollView } from "react-native";
import React from "react";
import Grid from "../../components/HomeGrid/Grid";

import styles from "./style";

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <Grid />
    </ScrollView>
  );
};

export default Home;
