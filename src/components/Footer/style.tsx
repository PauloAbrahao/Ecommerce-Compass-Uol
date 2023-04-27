import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/colors";

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    bottom: 0,
    borderTopColor: "rgba(215, 143, 60, 0.5)",
    borderTopWidth: 1,
    paddingTop: 15,
    paddingBottom: 15,
  },
  text: {
    color: "#F5F5F5",
    fontSize: 16,
  },
  signUp: {
    color: GlobalStyles.Colors.primary,
    fontSize: 16,
    paddingLeft: 4,
    fontWeight: "bold",
  },
});

export default styles;
