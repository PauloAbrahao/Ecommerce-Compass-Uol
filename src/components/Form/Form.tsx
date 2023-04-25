import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";

import { useNavigation } from "@react-navigation/native";

const Form = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [emailBorderColor, setEmailBorderColor] = React.useState("#656262");
  const [passwordBorderColor, setPasswordBorderColor] = React.useState("#656262");

  const navigation = useNavigation();

  const handleLogin = () => {
    if (email === "") {
      setEmailBorderColor("#FF4B4B");
    } else {
      setEmailBorderColor("#656262");
    }

    if (password === "") {
      setPasswordBorderColor("#FF4B4B");
    } else {
      setPasswordBorderColor("#656262");
    }
  };

  const handleNavigation = () => {
    if (email.trim().length > 0 && password.trim().length > 0) {
      navigation.navigate("SignUp_Screen");
    } else {
      handleLogin();
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

      {/* PASSWORD INPUT */}
      <Input
        placeholder="Your password"
        imagePath="../../../assets/icons/password.png"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
        color={passwordBorderColor}
      />

      {/* LOGIN BUTTON */}
      <Button title="LOGIN" onPress={handleNavigation} />
    </>
  );
};

export default Form;
