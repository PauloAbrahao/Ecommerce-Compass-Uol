import React from "react";
import {
  Image,
  TextInput,
  View,
} from "react-native";
import { InputProps } from "../../config/types";
import styles from "./style";

// INTERFACE FOR INPUT PROPS
const Input: React.FC<InputProps> = ({
  placeholder,
  icon,
  value,
  color,
  ...props
}) => {
  // CALL THE FUNCTION TO SET THE PATH TO THE CORRECT IMAGE

  return (
    <View>
      <View style={[styles.container, { borderColor: color }]}>
        <Image source={icon} resizeMode="contain" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#A8A8A8"
          {...props}
        />
      </View>
    </View>
  );
};

export default Input;
