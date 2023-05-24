import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
  },
  header: {
    flexDirection: "row",
    alignContent: "center",
    padding: 20,
  },
  headerLeft: {
    flex: 1,
  },
  headerRight: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  welcome: {
    fontSize: 14,
    color: GlobalStyles.Colors.input_placeholder,
    fontFamily: "Inter-Medium",
  },
  name: {
    fontSize: 20,
    color: GlobalStyles.Colors.primary,
    fontFamily: "Inter-Medium",
  },
  line: {
    width: 90,
    height: 4,
    backgroundColor: "#F5F5F5",
    border: "4px",
    marginLeft: -5,
    borderRadius: 4,
    marginTop: 2,
  },
});

export default styles;
