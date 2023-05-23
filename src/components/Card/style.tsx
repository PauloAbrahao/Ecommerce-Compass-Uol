import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/colors";

export const cardHome = StyleSheet.create({
  card: {
    width: 175,
    height: 220,
    backgroundColor: GlobalStyles.Colors.card_product,
    borderRadius: 10,
  },
  title: {
    color: "white",
    fontSize: 12,
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 6,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 16,
  },
  image: {
    width: 122,
    height: 122,
    resizeMode: "contain",
  },
  priceContainer: {
    flexDirection: "row",
    marginHorizontal: 10,
    justifyContent: "space-between",
  },
  iconHeart: {
    resizeMode: "cover",
  },
  pressed: {
    opacity: 0.7,
  },
});

export const cardCart = StyleSheet.create({
  card: {
    width: 368,
    height: 139,
    backgroundColor: GlobalStyles.Colors.card_product,
    borderRadius: 20,
    flexDirection: "column",
  },
  container: {
    flexDirection: "row-reverse",
    justifyContent: "flex-end",
  },
  title: {
    color: "white",
    fontSize: 12,
  },
  titleContainer: {
    marginTop: 6,
  },
  imageContainer: {
    marginTop: 10,
    marginBottom: 16,
  },
  image: {
    width: 122,
    height: 122,
    resizeMode: "contain",
  },
  priceContainer: {},
});
