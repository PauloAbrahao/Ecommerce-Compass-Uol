import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: GlobalStyles.Colors.background,
  },
  box: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
    flexDirection: "column",
    justifyContent: "space-between",
    width: "90%",
    height: "84%",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    maxWidth: "90%",
    textAlign: "justify",
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginVertical: 10,
    marginTop: 20,
  },
  rating: {
    fontSize: 16,
    marginBottom: 10,
    color: GlobalStyles.Colors.primary,
  },
  description: {
    fontSize: 13,
    textAlign: "justify",
    paddingHorizontal: 10,
    marginBottom: 20,
    color: "black",
    marginTop: 15,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  icon: {
    fontSize: 30,
    color: GlobalStyles.Colors.primary,
    fontWeight: "bold",
    alignItems: "center",
    textAlign: "center",
    marginTop: -5,
  },
  quantity: {
    fontSize: 30,
    paddingHorizontal: 10,
    color: GlobalStyles.Colors.primary,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: GlobalStyles.Colors.button,
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    width: "70%",
    alignSelf: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    textAlign: "center",
  },
  price: {
    fontSize: 28,
    color: GlobalStyles.Colors.primary,
  },
  pricebox: {
    backgroundColor: GlobalStyles.Colors.card_product,
    borderRadius: 20,
    justifyContent: "center",
  },
  bottoncentralization: {
    alignSelf: "center",
    marginBottom: 10,
  },
  numContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemNum: {
    width: 40,
    height: 40,
    backgroundColor: GlobalStyles.Colors.background,
    borderRadius: 50,
    alignItems: "center",
  },
  containerPrice: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  starsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    marginVertical: 20,
    marginLeft: 10,
  },
  starsContainer2: {
    borderRadius: 50,
  },
  titleBox: {
    flexDirection: "row",
    alignItems: "center",
  },
});
