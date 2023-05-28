import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/colors";

const styles = StyleSheet.create({
  checkbox_container: {
    alignItems: "center",
    flexDirection: "row",
    textAlign: "center",
    alignSelf: "flex-start",
    borderRadius: 5,
    marginBottom: 25,
    marginLeft: 20,
  },
  checkbox: {
    alignSelf: "flex-start",
    borderRadius: 5,
  },
  terms: {
    color: "#ffffff",
    marginLeft: 10,
    fontSize: 13,
    fontFamily: "Inter-Bold",
  },
  underline: {
    textDecorationLine: "underline",
  },
  validationText: {
    color: GlobalStyles.Colors.warning,
    fontSize: 12,
    fontFamily: "Inter-Medium",
    marginLeft: 40,
    marginTop: -27,
    marginBottom: 12,
    alignSelf: "flex-start",
    textAlign: "center",
  },
  validationTerms: {
    color: GlobalStyles.Colors.warning,
    fontSize: 12,
    fontFamily: "Inter-Medium",
    marginLeft: 40,
    marginTop: -25,
    marginBottom: 15,
    alignSelf: "flex-start",
    textAlign: "center",
  },
});

export default styles;
