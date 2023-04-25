import { KeyboardAvoidingView, Text, View, ScrollView } from "react-native";
import React from "react";

import styles from "./style";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/Form/Form";

interface Welcome_ScreenProps {
  navigation: any;
}

const Welcome_Screen: React.FC<Welcome_ScreenProps> = () => {
  return (
    <>
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        keyboardVerticalOffset={-200}
      >
        <ScrollView
          contentOffset={{x: 0, y: 200}}
          style={styles.content}
        >
          <View style={styles.content}>
            {/* WELCOME TITLE */}
            <Text style={styles.title}>WELCOME</Text>

            <View style={[styles.inputs]}>
              <Form />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <Footer
        first_footer_text="Don't have an account?"
        second_footer_text="Sign Up"
      />
    </>
  );
};

export default Welcome_Screen;
