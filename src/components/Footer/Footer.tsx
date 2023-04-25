import { Text, View } from "react-native";
import React from "react";

import styles from "./style";

interface FooterProps {
  first_footer_text: string;
  second_footer_text: string;
}

const Footer: React.FC<FooterProps> = ({
  first_footer_text,
  second_footer_text,
}) => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>{first_footer_text}</Text>
      <Text style={styles.signUp}> {second_footer_text}</Text>
    </View>
  );
};

export default Footer;
