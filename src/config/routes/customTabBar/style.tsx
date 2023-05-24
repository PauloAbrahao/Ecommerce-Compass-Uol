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
  },
  tab_container: {
    gap: 10,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 40,

    paddingTop: 12,
  },
  tab_content: {
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
    marginBottom: 5,
  },
  text: {
    color: "#fff",
    fontFamily: "Inter-SemiBold",
    fontSize: 12,
    textAlign: "center",
    marginTop: 3,
  },
  focused: {
    color: GlobalStyles.Colors.primary,
    fontFamily: "Inter-SemiBold",
    fontSize: 12,
    textAlign: "center",
    marginTop: 3,
  },
});

export default styles;
