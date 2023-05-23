import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../../constants/colors";

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: "10%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    backgroundColor: GlobalStyles.Colors.background,
  },
  left: {},
  right: {},
});

export default styles;
