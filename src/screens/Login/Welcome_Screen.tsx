import { KeyboardAvoidingView, Text, View, ScrollView } from "react-native";
import React from "react";

import styles from "./style";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/Form/Form";


const Welcome_Screen = () => {
  return (
    <>
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        keyboardVerticalOffset={-200}
      >
        <ScrollView contentOffset={{ x: 0, y: 200 }} style={styles.content}>
          <View style={styles.content}>
            {/* WELCOME TITLE */}
            <Text style={styles.title}>WELCOME</Text>

            <View style={[styles.inputs]}>
              <Form isSignUpPage={false} text_button="LOGIN" />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <Footer
        signUp={false}
        first_footer_text="Don't have an account?"
        second_footer_text="Sign Up"
      />
    </>
  );
};

export default Welcome_Screen;
