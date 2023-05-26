import { ImageSourcePropType, KeyboardTypeOptions } from "react-native";

type ButtonProps = {
  title: string;
  onPress?: () => void;
  isLoading?: boolean;
};

type ButtonBuyProps = {
  children: string;
  onPress: () => void;
  isloading: boolean;
};

type FooterProps = {
  first_footer_text: string;
  second_footer_text: string;
  signUp?: boolean;
};

type FormProps = {
  isSignUpPage?: boolean;
  text_button: string;
};

type InputProps = {
  placeholder: string;
  icon: string;
  value?: string;
  onChangeText: (value: string) => void;
  color?: string;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
};

type PriceProps = {
  children: string;
};

type QuantityButtonProps = {
  children: ImageSourcePropType;
  onPress?: () => void;
  isCart?: boolean;
};
