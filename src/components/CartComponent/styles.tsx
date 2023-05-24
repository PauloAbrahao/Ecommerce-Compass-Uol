import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/colors";

const styles = StyleSheet.create({
  cartCounter: {
    position: "absolute",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",

    top: -4,
    right: -5,
    zIndex: 1,

    height: 18,
    width: 18,
    borderRadius: 9,
    backgroundColor: GlobalStyles.Colors.button,
  },
  counter: {
    position: "absolute",
    paddingTop: -3,
    marginBottom: 5,

    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    fontFamily: "Inter-SemiBold",
  },
});

export default styles;
