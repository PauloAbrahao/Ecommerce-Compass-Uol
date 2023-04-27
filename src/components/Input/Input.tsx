import {
  Image,
  KeyboardTypeOptions,
  TextInput,
  View,
} from "react-native";
import React from "react";

import styles from "./style";
import { link_images } from "./LinkImages";

// INTERFACE FOR INPUT PROPS
interface InputProps {
  placeholder: string;
  icon: string;
  value?: string;
  onChangeText: (value: string) => void;
  color?: string;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  icon,
  value,
  color,
  ...props
}) => {
  // CALL THE FUNCTION TO SET THE PATH TO THE CORRECT IMAGE
  const path = link_images(icon);

  return (
    <View>
      <View style={[styles.container, { borderColor: color }]}>
        <Image source={path} resizeMode="contain" style={styles.icon} />
        <TextInput
          style={[styles.input]}
          placeholder={placeholder}
          placeholderTextColor="#A8A8A8"
          {...props}
        />
      </View>
    </View>
  );
};

export default Input;
