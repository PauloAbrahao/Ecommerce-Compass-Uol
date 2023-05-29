import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/colors";

export const cartButton = StyleSheet.create({
  button: {
    borderRadius: 50,
    width: 50,
    height: 50,
    backgroundColor: GlobalStyles.Colors.warning,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
  },
  pressed: {
    opacity: 0.7,
  },
});

export const detailButton = StyleSheet.create({
  button: {
    borderRadius: 50,
    width: 50,
    height: 50,
    backgroundColor: GlobalStyles.Colors.background,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
  },
  pressed: {
    opacity: 0.7,
  },
});
