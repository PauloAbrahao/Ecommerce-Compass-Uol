import React from "react";

import { View, Text } from "react-native";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { show_error } from "./ValidateInputs";
import { StackNavigationProp } from "@react-navigation/stack";
import { FormProps } from "../../config/types";
import {icons} from "../../../assets/icons"

import Checkbox from "expo-checkbox";
import Input from "../Input";
import Button from "../Button";
import styles from "./style";

const Form: React.FC<FormProps> = ({ isSignUpPage, text_button }) => {
  // DEFINE STATES FOR INPUT FIELDS
  const [email, setEmail] = React.useState<string>("");
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [isChecked, setChecked] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  // VERIFY IF THE INPUT FIELDS ARE VALID (EMPTY OR NOT)
  const [isEmailValid, setIsEmailValid] = React.useState<boolean>(true);
  const [isUsernameValid, setIsUsernameValid] = React.useState<boolean>(true);
  const [isPasswordValid, setIsPasswordValid] = React.useState<boolean>(true);
  const [isTermsValid, setIsTermsValid] = React.useState<boolean>(true);

  // DEFINE NAVIGATION TYPE
  type HomeScreenNavigationProp = StackNavigationProp<ParamListBase, "Home">;

  const navigation: HomeScreenNavigationProp = useNavigation();

  // HANDLE ERRORS IF THE USERS DOES NOT FILL IN ANY FIELDS
  const handleError = () => {
    if (email === "") {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
    }

    if (password === "") {
      setIsPasswordValid(false);
    } else {
      setIsPasswordValid(true);
    }

    //  IF THE USER IS ON THE SIGN UP PAGE, CHECK IF THE USERNAME AND TERMS ARE FILLED IN
    if (isSignUpPage) {
      if (username === "") {
        setIsUsernameValid(false);
      } else {
        setIsUsernameValid(true);
      }
      if (!isChecked) {
        setIsTermsValid(false);
      } else {
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
      setIsPasswordValid(true);
      setIsUsernameValid(true);
      setIsTermsValid(true);

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
        icon={icons.email}
        value={email}
        onChangeText={setEmail}
        color={isEmailValid ? "#656262" : "#FF4B4B"}
        keyboardType="email-address"
      />
      {show_error(isEmailValid, "Please enter a valid email address.", false)}

      {/* USERNAME INPUT */}
      {/* IF THE USER IS ON THE SIGN UP PAGE, SHOW THE USERNAME INPUT */}
      {isSignUpPage ? (
        <Input
          placeholder="username"
          icon={icons.username}
          value={username}
          onChangeText={setUsername}
          color={isUsernameValid ? "#656262" : "#FF4B4B"}
        />
      ) : null}
      {show_error(isUsernameValid, "Please enter a valid username.", false)}

      {/* PASSWORD INPUT */}
      <Input
        placeholder="Your password"
        icon={icons.password}
        value={password}
        onChangeText={setPassword}
        color={isPasswordValid ? "#656262" : "#FF4B4B"}
        secureTextEntry={true}
      />
      {show_error(isPasswordValid, "Please enter a valid password.", false)}

      {/* CHECKBOX INPUT */}
      {/* IF THE USER IS ON THE SIGN UP PAGE, SHOW THE CHECKBOX INPUT */}
      {isSignUpPage ? (
        <View style={styles.checkbox_container}>
          <Checkbox
            style={styles.checkbox}
            color={isChecked ? "#D78F3C" : "#ffffff"}
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
