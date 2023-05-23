import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  rating: {
    fontSize: 16,
    marginBottom: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 24,
    marginHorizontal: 10,
  },
  quantity: {
    fontSize: 18,
  },

  description: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  
});