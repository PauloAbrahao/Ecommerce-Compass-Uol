import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: GlobalStyles.Colors.background,
  },
  content: {
    width: "100%",
  },
  title: {
    color: GlobalStyles.Colors.primary,
    fontSize: 36,
    fontFamily: "Khula-Bold", 
    marginTop: 140,
    textAlign: "center",
  },
  forms: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 110,
  },

});

export default styles;