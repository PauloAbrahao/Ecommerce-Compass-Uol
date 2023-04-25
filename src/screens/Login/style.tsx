import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/colors";

const styles = StyleSheet.create({
  keyboard: {
    backgroundColor: GlobalStyles.Colors.background,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: GlobalStyles.Colors.background,
  },
  title: {
    color: GlobalStyles.Colors.primary,
    fontSize: 36,
    fontWeight: "700",
    marginTop: 171,
  },
  inputs: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 150,
  },
  warning: {
    color: GlobalStyles.Colors.warning,
  }
});

export default styles;
