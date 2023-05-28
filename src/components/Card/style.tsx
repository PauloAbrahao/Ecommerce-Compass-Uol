import { StyleSheet } from "react-native";

export const cardHome = StyleSheet.create({
  card: {
    width: 175,
    height: 220,
    backgroundColor: "white",
    borderRadius: 10,
    flexDirection: "column",
    justifyContent: "space-around",
  },
  title: {
    width: 150,
    color: "#2D2D2D",
    fontSize: 12,
    paddingLeft: 16,
    fontStyle: "normal",
    fontFamily: "Inter-Bold",
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
    backgroundColor: "white",
    borderRadius: 20,
    flexDirection: "column",
  },
  title: {
    width: 170,
    color: "#2D2D2D",
    fontSize: 14,
    fontStyle: "normal",
    fontFamily: "Inter-Bold",
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
    top: 77,
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
});
