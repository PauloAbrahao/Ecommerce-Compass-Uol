import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/colors";

export const styles = StyleSheet.create({
  card: {
    width: 186,
    height: 226,
    backgroundColor: GlobalStyles.Colors.card_product,
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 12,
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 35,
  },
  image: {
    width: 122,
    height: 122,
    resizeMode: "contain",
  },
});
