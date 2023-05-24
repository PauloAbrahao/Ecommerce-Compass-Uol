import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#282729',
    flexDirection: 'row',
  },
  box: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    justifyContent: 'center',
    width: '90%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 0,
    color: 'black',
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
    fontSize: 13.5,
    textAlign: 'justify',
    paddingHorizontal: 20,
    marginBottom: 10,
    color: 'black',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    fontSize: 30,
    color: '#D78F3C',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  quantity: {
    fontSize: 30,
    paddingHorizontal: 10,
    color: '#D78F3C',
  },
  button: {
    backgroundColor: '#20BE4C',
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    width: '70%',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },
  price: {
    fontSize: 28,
    color: '#D78F3C',
  },
  pricebox: {
    backgroundColor: '#3C3C3E',
    borderRadius: 20,
    justifyContent: 'center',
  },
  bottoncentralization: {
    alignSelf: 'center',
  },
  itemNum: {
    width: 40,
    height: 40,
    backgroundColor: GlobalStyles.Colors.background,
    borderRadius: 50,
  },
  itemNum2: {
    width: 40,
    height: 40,
    backgroundColor: GlobalStyles.Colors.background,
    borderRadius: 50,
    
  },
  containerPrice: {
    flexDirection: 'row',
  },
});