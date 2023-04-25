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
  return (
    <View style={[styles.container, { borderColor: color }]}>
      <Image source={{ uri: imagePath }} style={styles.icon} />

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
