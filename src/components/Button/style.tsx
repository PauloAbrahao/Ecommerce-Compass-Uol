import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/colors";

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    width: 375,
    height: 55,
    backgroundColor: GlobalStyles.Colors.primary,
    borderColor: GlobalStyles.Colors.primary,
    borderWidth: 1,
  },  
  text: {
    color: "#DBDBDB",
    fontSize: 16,
    fontFamily: "Inter-SemiBold",
    textAlign: "center",
  },
});

export default styles;