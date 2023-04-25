import { KeyboardAvoidingView, Text, View } from "react-native";
import React from "react";

import styles from "./style";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";

interface Welcome_ScreenProps {
  navigation: any;
}

const Welcome_Screen: React.FC<Welcome_ScreenProps> = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [emailBorderColor, setEmailBorderColor] = React.useState("#656262");
  const [passwordBorderColor, setPasswordBorderColor] =
    React.useState("#656262");

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
      <KeyboardAvoidingView
        style={[styles.keyboard, styles.container]}
        behavior="padding"
      >
        {/* WELCOME TITLE */}
        <View>
          <Text style={styles.title}>WELCOME</Text>
        </View>

        <View style={[styles.inputs]}>
          {/* EMAIL INPUT */}
          <Input
            placeholder="Your email"
            imagePath="../../../assets/icons/email.png"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            color={emailBorderColor}
          />

          <Input
            placeholder="Your password"
            imagePath="../../../assets/icons/password.png"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
            color={passwordBorderColor}
          />

          <Button title="LOGIN" onPress={handleNavigation} />
        </View>

        <Footer
          first_footer_text="Don't have an account?"
          second_footer_text="Sign Up"
        />
      </KeyboardAvoidingView>
    </>
  );
};

export default Welcome_Screen;
