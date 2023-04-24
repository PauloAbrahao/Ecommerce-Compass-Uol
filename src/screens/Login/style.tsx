import { StyleSheet} from "react-native";
import { GlobalStyles } from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: GlobalStyles.Colors.background,
  },
  title: {
    color: GlobalStyles.Colors.primary,
    fontSize: 36,
    fontWeight: "700",
  },
});

export default styles;