import React from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  View,
  Dimensions,
} from "react-native";

import styles from "./style";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/Form/Form";

const SignUp_Screen = () => {
  const windowHeight = Dimensions.get("window").height;

  return (
    <>
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        keyboardVerticalOffset={-300}
      >
        <ScrollView
          contentOffset={{ x: 0, y: 200 }}
          scrollEnabled={false}
          style={styles.content}
        >
          <View style={{ height: windowHeight }}>
            {/* SIGN UP TITLE */}
            <Text style={styles.title}>SIGN UP</Text>

            <View style={styles.forms}>
              {/* LOGIN FORM */}
              <Form isSignUpPage={true} text_button="CREATE ACCOUNT" />
            </View>
          </View>

          <Footer
            signUp={true}
            first_footer_text="Already have an account?"
            second_footer_text="Sign In"
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignUp_Screen;
