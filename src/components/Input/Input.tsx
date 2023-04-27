import { Image, TextInput, View } from "react-native";
import React from "react";

import styles from "./style";

interface InputProps {
  placeholder: string;
  imagePath: string;
  keyboardType?: string;
  secureTextEntry?: boolean;
  value?: string;
  onChangeText: (value: string) => void;
  color?: string;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  imagePath,
  value,
  color,
  ...props
}) => {
  const images = {
    email: require("../../../assets/icons/email.png"),
    password: require("../../../assets/icons/password.png"),
    username: require("../../../assets/icons/username.png"),
  };

  let path: string = "";

  if (imagePath === "email") {
    path = images.email;
  } else if (imagePath === "password") {
    path = images.password;
  } else if (imagePath === "username") {
    path = images.username;
  }

  return (
    <View style={[styles.container, { borderColor: color }]}>
      <Image source={path} resizeMode="contain" style={styles.icon} />

      <TextInput
        style={[styles.input]}
        placeholder={placeholder}
        placeholderTextColor="#A8A8A8"
        {...props}
      />
    </View>
  );
};

export default Input;
