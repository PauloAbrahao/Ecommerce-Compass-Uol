import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/colors";

export const styleHome = StyleSheet.create({
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
    fontSize: 13,
  },
});

export const styleProduct = StyleSheet.create({
  container: {
    width: 170,
    height: 50,
    backgroundColor: GlobalStyles.Colors.background,
    borderRadius: 15,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: GlobalStyles.Colors.primary,
    fontSize: 19,
  },
});
