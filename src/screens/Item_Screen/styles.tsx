import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#282729",
  },
  scrollViewContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
    paddingTop: 25,
  },
  scrollViewContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    justifyContent: 'center',
    width: '95%',
    marginTop: 25,
    marginBottom: 30,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 0,
    color: 'black',
    maxWidth: '85%',
    textAlign: 'justify',
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginVertical: 10,
  },
  rating: {
    fontSize: 16,
    marginBottom: 10,
    color: '#D78F3C',
  },
  description: {
    fontSize: 14,
    textAlign: 'justify',
    paddingHorizontal: 10,
    marginBottom: 10,
    color: 'black',
    marginTop: 15,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    fontSize: 35,
    color: '#D78F3C',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  quantity: {
    fontSize: 35,
    paddingHorizontal: 10,
    color: '#D78F3C',
    fontWeight: 'bold',
  },
  bottoncentralization: {
    alignSelf: 'center',
  },
  itemNum: {
    width: 50,
    height: 50,
    backgroundColor: GlobalStyles.Colors.background,
    borderRadius: 50,
    marginRight: 10,
  },
  itemNum2: {
    width: 50,
    height: 50,
    backgroundColor: GlobalStyles.Colors.background,
    borderRadius: 50,
    marginLeft: 15,
    
  },
  containerPrice: {
    flexDirection: 'row',
    marginLeft: -5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  starsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    marginVertical: 20,
    marginLeft: 10,
  },
  starsContainer2: {
    borderRadius: 50,
  },
  titleBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});