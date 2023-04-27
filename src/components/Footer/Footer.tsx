import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";

interface FooterProps {
  first_footer_text: string;
  second_footer_text: string;
  signUp?: boolean;
}

const Footer: React.FC<FooterProps> = ({
  first_footer_text,
  second_footer_text,
  signUp,
}) => {
  const navigation = useNavigation<any>();

  // Navigate to the SignUp_Screen or Welcome_Screen
  const handleNavigation = () => {
    if (signUp) {
      navigation.navigate("Welcome_Screen");
    } else {
      navigation.navigate("SignUp_Screen");
    }
  };

  return (
    <View style={styles.footer}>
      <Text style={styles.text}>{first_footer_text}</Text>
      <TouchableOpacity onPress={handleNavigation}>
        <Text style={styles.signUp}>{second_footer_text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
