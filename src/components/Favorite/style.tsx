import { StyleSheet } from "react-native";

export const cardHome = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    alignContent: "center",
  },
  iconHeart: {
    resizeMode: "contain",
    width: 30,
    height: 30,
  },
  iconHeartPressed: {
    resizeMode: "contain",
    width: 35,
    height: 35,
  },
});

export const cardDetail = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    alignContent: "center",
    paddingTop: 20,
  },
  iconHeart: {
    resizeMode: "contain",
    width: 45,
    height: 45,
  },
  iconHeartPressed: {
    resizeMode: "contain",
    width: 53,
    height: 53,
  },
});
