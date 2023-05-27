import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/colors";

export const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    width: 260,
    height: 56,
    backgroundColor: GlobalStyles.Colors.button,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
  },
  pressed: {
    opacity: 0.7,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 15,
    fontFamily: "Inter-SemiBold",
    textAlign: "center",
    letterSpacing: 0.1,
  },
});
