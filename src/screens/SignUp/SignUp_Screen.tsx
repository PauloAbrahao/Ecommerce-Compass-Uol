import { KeyboardAvoidingView, Text, View } from "react-native";
import React from "react";

import styles from "./style";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";

interface SignIn_ScreenProps {
  navigation: any;
}

const SignUp_Screen: React.FC<SignIn_ScreenProps> = ({ navigation }) => {
  const handleNavigation = () => {
    // if (email && email.length > 0 && password && password.length > 0) {
    // navigation.navigate("Welcome_Screen");
    // } else {
    //   alert("Please fill all the fields");
    // }
  };

  return (
    <>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {/* WELCOME TITLE */}
        <View>
          <Text style={styles.title}>SIGN UP</Text>
        </View>

        <View style={styles.inputs}>
          {/* EMAIL INPUT */}
          <Input
            placeholder="Your email"
            imagePath="../../../assets/icons/email.png"
            keyboardType="email-address"
          />

          <Input
            placeholder="username"
            imagePath="../../../assets/icons/username.png"
          />

          <Input
            placeholder="Your password"
            imagePath="../../../assets/icons/password.png"
            secureTextEntry={true}
          />

          <Button title="CREATE ACCOUNT" onPress={handleNavigation} />
        </View>

        <Footer
          first_footer_text="Already have an account?"
          second_footer_text="Sign In"
        />
      </KeyboardAvoidingView>
    </>
  );
};

export default SignUp_Screen;
