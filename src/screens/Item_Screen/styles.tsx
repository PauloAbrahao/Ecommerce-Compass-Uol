import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    productCard: {
      backgroundColor: '#FFFFFF',
      borderRadius: 8,
      padding: 16,
      marginVertical: 8,
      width: '80%',
    },
    productTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    productPrice: {
      fontSize: 16,
    },
    productDescription: {
      fontSize: 16,
      marginBottom: 8,
    },
    buyButton: {
      backgroundColor: '#007AFF',
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 8,
    },
    buyButtonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  