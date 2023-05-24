import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../../constants/colors";

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#282729",
  },
  content: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "red"
  },
  tab_container: {
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 45,
    marginHorizontal: 10,
    paddingTop: 10,    
  },
  tab_content: {
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
  },
  text: {
    color: "#fff",
    fontFamily: "Inter-SemiBold",
    fontSize: 12,
    textAlign: "center",
    marginTop: 6,
  },
  focused: {
    color: GlobalStyles.Colors.primary,
    fontFamily: "Inter-SemiBold",
    fontSize: 12,
    textAlign: "center",
    marginTop: 6,
  },
});

export default styles;
