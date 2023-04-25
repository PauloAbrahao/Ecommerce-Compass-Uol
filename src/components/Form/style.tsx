import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/colors";

const styles = StyleSheet.create({
  validationText: {
    color: GlobalStyles.Colors.warning,
    fontSize: 12,
    marginLeft: 40,
    marginTop: -25,
    marginBottom: 10,
    alignSelf: "flex-start",
    textAlign: "center",
  },
});

export default styles;
