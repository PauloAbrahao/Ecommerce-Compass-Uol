import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/colors";

const styles = StyleSheet.create({
  button: {
    backgroundColor: GlobalStyles.Colors.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    width: 375,
    height: 55,
  },  
  text: {
    color: "#DBDBDB",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default styles;