import { ParamListBase } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
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
type ValidateProps = {
  isValueValid: boolean;
  text: string;
  isTerms: boolean;
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
  icon: ImageSourcePropType;
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

type ModalProps = {
  visible: boolean;
  onClose: () => void;
  header: string;
  message: string;
};
type DetailsScreenNavigationProp = StackNavigationProp<
  ParamListBase,
  "Details_Screen"
>;
type WelcomeScreenNavigationProp = StackNavigationProp<
  ParamListBase,
  "Welcome_Screen"
>;

type SignUpScreenNavigationProp = StackNavigationProp<
  ParamListBase,
  "SignUp_Screen"
>;

type FavoritesContextType = {
  favorites: number[];
  addFavorite: (product: number) => void;
  removeFavorite: (productId: number) => void;
  isFavorite: (productId: number) => boolean;
};
type ProviderProps = {
  children: React.ReactNode;
};

type HomeScreenNavigationProp = StackNavigationProp<ParamListBase, "Home">;

type NavigationProp = WelcomeScreenNavigationProp | SignUpScreenNavigationProp;

type CartScreenNavigator = StackNavigationProp<ParamListBase, "Cart_Screen">;

export type {
  ButtonProps,
  ButtonBuyProps,
  FooterProps,
  FormProps,
  InputProps,
  PriceProps,
  QuantityButtonProps,
  ValidateProps,
  ModalProps,
  DetailsScreenNavigationProp,
  CartScreenNavigator,
  NavigationProp,
  HomeScreenNavigationProp,
  FavoritesContextType,
  ProviderProps
};
