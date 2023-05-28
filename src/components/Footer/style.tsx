import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/colors";

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    height: 60,
    bottom: 0,
    borderTopColor: "rgba(215, 143, 60, 0.5)",
    borderTopWidth: 1,
    paddingTop: 15,
    paddingBottom: 15,
  },
  text: {
    color: GlobalStyles.Colors.subText_container,
    fontFamily: "Inter-Medium",
    fontSize: 16,
  },
  signUpOrSignIn: {
    color: GlobalStyles.Colors.primary,
    fontSize: 16,
    fontFamily: "Inter-Bold",
    paddingLeft: 4,
  },
});

export default styles;
