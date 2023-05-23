import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#282729',
    flexDirection: 'row',
  },
  box: {
    backgroundColor: '#3C3C3E',
    padding: 20,
    borderRadius: 20,
    justifyContent: 'center',
    width: '90%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'white',
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
    fontSize: 16,
    textAlign: 'justify',
    paddingHorizontal: 20,
    marginBottom: 10,
    color: 'white',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    fontSize: 30,
    paddingHorizontal: 10,
    color: '#D78F3C',
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
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  price: {
    fontSize: 30,
    paddingHorizontal: 10,
    color: '#D78F3C',
  },
  
});