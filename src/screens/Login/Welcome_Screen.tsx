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
        keyboardVerticalOffset={-300}
      >
        <ScrollView
          contentOffset={{ x: 0, y: 200 }}
          contentContainerStyle={{ paddingBottom: 20 }}
          scrollEnabled={false}
          style={styles.content}
        >
          <View style={styles.main_content}>
            {/* WELCOME TITLE */}
            <Text style={styles.title}>WELCOME</Text>

            <View style={styles.inputs}>
              {/* LOGIN FORM */}
              <Form isSignUpPage={false} text_button="LOGIN" />
            </View>
          </View>
          <Footer
            signUp={false}
            first_footer_text="Don't have an account?"
            second_footer_text="Sign Up"
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Welcome_Screen;
