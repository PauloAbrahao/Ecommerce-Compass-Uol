import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: GlobalStyles.Colors.background,
  },
  content: {
    height: "100%",
    width: "100%",
  },
  main_content: {
    // minHeight: 780,
    // marginBottom: -20,
  },
  title: {
    color: GlobalStyles.Colors.primary,
    fontSize: 36,
    fontWeight: "700",
    marginTop: 120,
    textAlign: "center",
  },
  forms: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 90,
  },

});

export default styles;