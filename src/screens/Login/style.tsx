import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: GlobalStyles.Colors.background,
  },
  content: {
    width: "100%",
  },
  main_content: {
    // width: "100%",
  },
  title: {
    color: GlobalStyles.Colors.primary,
    fontSize: 36,
    fontWeight: "700",
    marginTop: 171,
    textAlign: "center",
  },
  inputs: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 150,
  },
});

export default styles;
