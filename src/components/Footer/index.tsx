import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "../../config/types";
import { FooterProps } from "../../config/types";
import styles from "./style";


const Footer: React.FC<FooterProps> = ({
  first_footer_text,
  second_footer_text,
  signUp,
}) => {
  

  const navigation: NavigationProp = useNavigation();

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
        <Text style={styles.signUpOrSignIn}>{second_footer_text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
