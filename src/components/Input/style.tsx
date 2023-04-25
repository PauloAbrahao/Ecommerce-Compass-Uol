import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    width: 375,
    height: 55,
    backgroundColor: GlobalStyles.Colors.input,
    borderColor: GlobalStyles.Colors.input,
    marginBottom: 32,
    borderWidth: 1,
  },
  icon: {
    width: 25,
    height: 25,
    marginLeft: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: GlobalStyles.Colors.input_placeholder,
    fontSize: 20,
    fontWeight: "500",
  }
});

export default styles;
