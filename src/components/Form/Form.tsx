import React from "react";

import { Text } from "react-native";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { useNavigation } from "@react-navigation/native";

import styles from "./style";

const Form = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  // DEFINE BORDER COLORS FOR INPUT FIELDS IF VALIDATION FAILS
  const [emailBorderColor, setEmailBorderColor] = React.useState("#656262");
  const [passwordBorderColor, setPasswordBorderColor] =
    React.useState("#656262");
  
  // DEFINE WARNING MESSAGE IF VALIDATION FAILS
  const [isEmailValid, setIsEmailValid] = React.useState<boolean>(true);
  const [isPasswordValid, setIsPasswordValid] = React.useState<boolean>(true);

  const navigation = useNavigation<any>();

  const handleError = () => {
    if (email === "") {
      setEmailBorderColor("#FF4B4B");
      setIsEmailValid(false);
    } else if (email.trim().length > 0) {
      setEmailBorderColor("#656262");
      setIsEmailValid(true);
    }

    if (password === "") {
      setPasswordBorderColor("#FF4B4B");
      setIsPasswordValid(false);
    } else if (password.trim().length > 0) {
      setPasswordBorderColor("#656262");
      setIsPasswordValid(true);
    }
  };

  const handleNavigation = () => {
    if (email.trim().length > 0 && password.trim().length > 0) {
      navigation.navigate("SignUp_Screen");
    } else {
      handleError();
    }
  };

  return (
    <>
      {/* EMAIL INPUT */}
      <Input
        placeholder="Your email"
        imagePath="../../../assets/icons/email.png"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        color={emailBorderColor}
      />
      {!isEmailValid && (
        <Text style={styles.validationText}>
          Please enter a valid email address.
        </Text>
      )}

      {/* PASSWORD INPUT */}
      <Input
        placeholder="Your password"
        imagePath="../../../assets/icons/password.png"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
        color={passwordBorderColor}
      />
      {!isPasswordValid && (
        <Text style={styles.validationText}>
          Please enter a valid password.
        </Text>
      )}

      {/* LOGIN BUTTON */}
      <Button title="LOGIN" onPress={handleNavigation} />
    </>
  );
};

export default Form;
