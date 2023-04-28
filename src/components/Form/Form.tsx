import React from "react";

import { View, Text } from "react-native";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { ParamListBase, useNavigation } from "@react-navigation/native";

import Checkbox from "expo-checkbox";

import styles from "./style";
import { show_error } from "./ValidateInputs";
import { StackNavigationProp } from "@react-navigation/stack";

// DEFINE PROPS INTERFACE FOR FORM COMPONENT
interface FormProps {
  isSignUpPage?: boolean;
  text_button: string;
}

const Form: React.FC<FormProps> = ({ isSignUpPage, text_button }) => {
  // DEFINE STATES FOR INPUT FIELDS
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isChecked, setChecked] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  // VERIFY IF THE INPUT FIELDS ARE VALID (EMPTY OR NOT)
  const [isEmailValid, setIsEmailValid] = React.useState<boolean>(true);
  const [isUsernameValid, setIsUsernameValid] = React.useState<boolean>(true);
  const [isPasswordValid, setIsPasswordValid] = React.useState<boolean>(true);
  const [isTermsValid, setIsTermsValid] = React.useState<boolean>(true);

  // DEFINE BORDER COLORS FOR INPUT FIELDS IF VALIDATION FAILS
  const [emailBorderColor, setEmailBorderColor] = React.useState("#656262");
  const [usernameBorderColor, setUsernameBorderColor] =
    React.useState("#656262");
  const [passwordBorderColor, setPasswordBorderColor] =
    React.useState("#656262");
  const [termsBorderColor, setTermsBorderColor] = React.useState("#656262");

  // DEFINE NAVIGATION TYPE
  type HomeScreenNavigationProp = StackNavigationProp<ParamListBase, "Home">;

  const navigation: HomeScreenNavigationProp = useNavigation();

  // HANDLE ERRORS IF THE USERS DOES NOT FILL IN ANY FIELDS
  const handleError = () => {
    if (email === "") {
      setEmailBorderColor("#FF4B4B");
      setIsEmailValid(false);
    } else {
      setEmailBorderColor("#656262");
      setIsEmailValid(true);
    }

    if (password === "") {
      setPasswordBorderColor("#FF4B4B");
      setIsPasswordValid(false);
    } else {
      setPasswordBorderColor("#656262");
      setIsPasswordValid(true);
    }

    //  IF THE USER IS ON THE SIGN UP PAGE, CHECK IF THE USERNAME AND TERMS ARE FILLED IN
    if (isSignUpPage) {
      if (username === "") {
        setUsernameBorderColor("#FF4B4B");
        setIsUsernameValid(false);
      } else {
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
      (isSignUpPage ? username.trim().length > 0 : true) &&
      (isSignUpPage ? isChecked : true)
    ) {
      setIsEmailValid(true);
      setEmailBorderColor("#656262");
      setIsPasswordValid(true);
      setPasswordBorderColor("#656262");
      setIsUsernameValid(true);
      setUsernameBorderColor("#656262");
      setIsTermsValid(true);
      setTermsBorderColor("#656262");

      setIsLoading(true);

      // SET A TIMEOUT TO SIMULATE A LOADING SCREEN
      setTimeout(() => {
        setIsLoading(false);

        // NAVIGATE TO THE NEXT SCREEN BASED ON THE PROPS
        if (isSignUpPage) {
          navigation.navigate("Home");
        } else {
          navigation.navigate("Home");
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
        icon="email"
        value={email}
        onChangeText={setEmail}
        color={emailBorderColor}
        keyboardType="email-address"
      />
      {show_error(isEmailValid, "Please enter a valid email address.", false)}

      {/* USERNAME INPUT */}
      {/* IF THE USER IS ON THE SIGN UP PAGE, SHOW THE USERNAME INPUT */}
      {isSignUpPage ? (
        <Input
          placeholder="username"
          icon="username"
          value={username}
          onChangeText={setUsername}
          color={usernameBorderColor}
        />
      ) : null}
      {show_error(isUsernameValid, "Please enter a valid username.", false)}

      {/* PASSWORD INPUT */}
      <Input
        placeholder="Your password"
        icon="password"
        value={password}
        onChangeText={setPassword}
        color={passwordBorderColor}
        secureTextEntry={true}
      />
      {show_error(isPasswordValid, "Please enter a valid password.", false)}

      {/* CHECKBOX INPUT */}
      {/* IF THE USER IS ON THE SIGN UP PAGE, SHOW THE CHECKBOX INPUT */}
      {isSignUpPage ? (
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
      {show_error(isTermsValid, "Please accept the terms.", true)}

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
