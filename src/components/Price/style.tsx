import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    width: 109,
    height: 30,
    backgroundColor: GlobalStyles.Colors.background,
    borderRadius: 8,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: GlobalStyles.Colors.primary,
  },
});
