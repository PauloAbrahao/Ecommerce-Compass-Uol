import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/colors";

export const styles = StyleSheet.create({
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
