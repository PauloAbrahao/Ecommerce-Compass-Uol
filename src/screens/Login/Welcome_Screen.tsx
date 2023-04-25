import { KeyboardAvoidingView, Text, View } from "react-native";
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
        style={[styles.keyboard, styles.container]}
        behavior="padding"
      >
        {/* WELCOME TITLE */}
        <View>
          <Text style={styles.title}>WELCOME</Text>
        </View>

        <View style={[styles.inputs]}>
          <Form />
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
