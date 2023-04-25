import React from "react";
import { KeyboardAvoidingView, ScrollView, Text, View } from "react-native";
import styles from "./style";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/Form/Form";

interface SignIn_ScreenProps {
  navigation: any;
}

const SignUp_Screen: React.FC<SignIn_ScreenProps> = ({ navigation }) => {
  return (
    <>
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        keyboardVerticalOffset={-200}
      >
        <ScrollView contentOffset={{ x: 0, y: 200 }} style={styles.content}>
          <View style={styles.content}>
            {/* SIGN UP TITLE */}
            <Text style={styles.title}>SIGN UP</Text>

            <View style={[styles.forms]}>
              <Form toSignUpPage={true} text_button="CREATE ACCOUNT" />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <Footer
        signUp={true}
        first_footer_text="Already have an account?"
        second_footer_text="Sign In"
      />
    </>
  );
};

export default SignUp_Screen;
