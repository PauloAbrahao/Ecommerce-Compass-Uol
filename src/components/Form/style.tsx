import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
  }
});

export default styles;
