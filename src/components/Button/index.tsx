import React from "react";
import { Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { ButtonProps } from "../../config/types";
import styles from "./style";

const Button: React.FC<ButtonProps> = ({ title, onPress, isLoading }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      disabled={isLoading}
    >
      {isLoading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
