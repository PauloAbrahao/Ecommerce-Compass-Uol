import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/colors";

const styles = StyleSheet.create({
  validationText: {
    color: GlobalStyles.Colors.warning,
    fontSize: 12,
    marginLeft: 25,
    marginTop: -30,
    marginBottom: 12,
    alignSelf: "flex-start",
    textAlign: "center",
  },
  checkbox_container: {
    alignItems: "center",
    flexDirection: "row",
    textAlign: "center",
    alignSelf: "flex-start",
    borderRadius: 5,
    marginBottom: 25,
  },
  checkbox: {
    alignSelf: "flex-start",
    borderRadius: 5,
  },
  terms: {
    color: "#ffffff",
    marginLeft: 10,
    fontSize: 13,
    fontWeight: "bold",
  },
  underline: {
    textDecorationLine: "underline",
  },
  validationTerms: {
    color: GlobalStyles.Colors.warning,
    fontSize: 12,
    marginLeft: 20,
    marginTop: -21,
    marginBottom: 15,
    alignSelf: "flex-start",
    textAlign: "center",
  },
});

export default styles;
