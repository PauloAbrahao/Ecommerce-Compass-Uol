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
  quantity: number;
};
type ValidateProps ={
  isValueValid: boolean;
  text: string;
  isTerms: boolean;
}
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
  isHome?: boolean;
};

type QuantityButtonProps = {
  children: ImageSourcePropType;
  onPress?: () => void;
  isCart?: boolean;
};

type ModalProps =  {
  visible: boolean;
  onClose: () => void;
  header: string;
  message: string;
}

export type {
  ButtonProps,
  ButtonBuyProps,
  FooterProps,
  FormProps,
  InputProps,
  PriceProps,
  QuantityButtonProps,
  ValidateProps,
  ModalProps
};