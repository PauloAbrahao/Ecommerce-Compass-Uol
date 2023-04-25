import React from "react";

import { View, Text } from "react-native";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { useNavigation } from "@react-navigation/native";

import Checkbox from "expo-checkbox";

import styles from "./style";

// DEFINE PROPS INTERFACE FOR FORM COMPONENT
interface FormProps {
  toSignUpPage?: boolean;
  text_button: string;
}

const Form: React.FC<FormProps> = ({ toSignUpPage, text_button }) => {
  // DEFINE STATES FOR INPUT FIELDS
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isChecked, setChecked] = React.useState(false);

  // DEFINE BORDER COLORS FOR INPUT FIELDS IF VALIDATION FAILS
  const [emailBorderColor, setEmailBorderColor] = React.useState("#656262");
  const [usernameBorderColor, setUsernameBorderColor] =
    React.useState("#656262");
  const [passwordBorderColor, setPasswordBorderColor] =
    React.useState("#656262");
  const [termsBorderColor, setTermsBorderColor] = React.useState("#656262");

  // DEFINE WARNING MESSAGE IF VALIDATION FAILS
  const [isEmailValid, setIsEmailValid] = React.useState<boolean>(true);
  const [isUsernameValid, setIsUsernameValid] = React.useState<boolean>(true);
  const [isPasswordValid, setIsPasswordValid] = React.useState<boolean>(true);
  const [isTermsValid, setIsTermsValid] = React.useState<boolean>(true);
  const [isLoading, setIsLoading] = React.useState(false);

  const navigation = useNavigation<any>();

  // HANDLE ERRORS IF THE USERS DOES NOT FILL IN ANY FIELDS
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

    //  IF THE USER IS ON THE SIGN UP PAGE, CHECK IF THE USERNAME AND TERMS ARE FILLED IN
    if (toSignUpPage) {
      if (username === "") {
        setUsernameBorderColor("#FF4B4B");
        setIsUsernameValid(false);
      } else if (username.trim().length > 0) {
        setUsernameBorderColor("#656262");
        setIsUsernameValid(true);
      }

      if (!isChecked) {
        setTermsBorderColor("#FF4B4B");
        setIsTermsValid(false);
      } else {
        setTermsBorderColor("#656262");
        setIsTermsValid(true);
      }
    }
  };

  // HANDLE NAVIGATION TO THE NEXT SCREEN
  const handleNavigation = () => {
    // CHECK IF THE USER FILLED IN ALL THE FIELDS
    if (
      email.trim().length > 0 &&
      password.trim().length > 0 &&
      (toSignUpPage ? username.trim().length > 0 : true) &&
      (toSignUpPage ? isChecked : true)
    ) {
      setIsLoading(true);

      // SET A TIMEOUT TO SIMULATE A LOADING SCREEN
      setTimeout(() => {
        setIsLoading(false);

        // NAVIGATE TO THE NEXT SCREEN BASED ON THE PROPS
        if (toSignUpPage) {
          navigation.navigate("Welcome_Screen");
        } else {
          navigation.navigate("SignUp_Screen");
        }
      }, 500);
    } else {
      handleError();
    }
  };

  return (
    <>
      {/* EMAIL INPUT */}
      <Input
        placeholder="Your email"
        imagePath="email"
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

      {/* USERNAME INPUT */}
      {/* IF THE USER IS ON THE SIGN UP PAGE, SHOW THE USERNAME INPUT */}
      {toSignUpPage ? (
        <Input
          placeholder="username"
          imagePath="username"
          value={username}
          onChangeText={setUsername}
          color={usernameBorderColor}
        />
      ) : null}
      {!isUsernameValid && (
        <Text style={styles.validationText}>
          Please enter a valid username.
        </Text>
      )}

      {/* PASSWORD INPUT */}
      <Input
        placeholder="Your password"
        imagePath="password"
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

      {/* CHECKBOX INPUT */}
      {/* IF THE USER IS ON THE SIGN UP PAGE, SHOW THE CHECKBOX INPUT */}
      {toSignUpPage ? (
        <View style={styles.checkbox_container}>
          <Checkbox
            style={styles.checkbox}
            color={isChecked ? "#D78F3C" : passwordBorderColor}
            value={isChecked}
            onValueChange={setChecked}
          />
          <Text style={styles.terms}>
            Agree To <Text style={styles.underline}>Terms And Conditions</Text>
          </Text>
        </View>
      ) : null}
      {!isTermsValid && (
        <Text style={styles.validationTerms}>Please accept the terms.</Text>
      )}

      {/* BUTTON */}
      <Button
        title={text_button}
        onPress={handleNavigation}
        isLoading={isLoading}
      />
    </>
  );
};

export default Form;
