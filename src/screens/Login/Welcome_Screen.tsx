import { Text, View } from "react-native";
import React from "react";

import styles from "./style";

const Welcome_Screen = () => {
  return (
    <View style={styles.container}>
      {/* WELCOME TITLE */}
      <View>
        <Text style={styles.title}>Welcome</Text>
      </View>
    </View>
  );
};

export default Welcome_Screen;
