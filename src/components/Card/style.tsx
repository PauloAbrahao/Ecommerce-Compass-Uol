import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/colors";

export const cardHome = StyleSheet.create({
  card: {
    width: 175,
    height: 220,
    backgroundColor: GlobalStyles.Colors.card_product,
    borderRadius: 10,
    flexDirection: "column",
    justifyContent: "space-around",
  },
  title: {
    color: "white",
    fontSize: 12,
    paddingLeft: 16,
  },
  titleContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: 6,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 5,
  },
  image: {
    width: 122,
    height: 122,
    resizeMode: "contain",
  },
  priceContainer: {
    flexDirection: "row",
    marginHorizontal: 10,
    paddingBottom: 7,
    justifyContent: "space-between",
    alignItems: "center",
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
  title: {
    color: "white",
    fontSize: 14,
  },
  titleContainer: {
    position: "absolute",
    left: 135,
    right: 0,
    top: 8,
    bottom: 0,
  },
  imageContainer: {
    position: "absolute",
    left: 5,
    right: 0,
    top: 8,
    bottom: 0,
  },
  image: {
    width: 122,
    height: 122,
    resizeMode: "contain",
  },
  priceContainer: {
    position: "absolute",
    left: 135,
    right: 0,
    top: 97,
    bottom: 0,
  },
  pressed: {
    opacity: 0.7,
  },
  remove: {
    position: "absolute",
    left: 325,
    right: 0,
    top: -13,
    bottom: 0,
  },
  line: {
    borderBottomWidth: 10,
    borderColor: GlobalStyles.Colors.warning,
  },
});
