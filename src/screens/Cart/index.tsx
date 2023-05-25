import { View, Text } from "react-native";
import ButtonBuy from "../../components/ButtonBuy";
import styles from "./style";
import { useCart } from "../../context";

const Cart = () => {
  const { cartItems, getTotalItemCount } = useCart();

  console.log("cartItems Carrinho", cartItems);

  return (
    <View style={styles.viewPort}>
      <View style={styles.header}>
        <Text style={styles.text}>Total</Text>
        <Text style={styles.textCount}>R$0</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.textContainer}>Ops, Empty Cart :(</Text>
        <Text style={styles.subTextContainer}>Add a product</Text>
      </View>

      {cartItems.map((item) => (
        <View key={item.id} style={{ backgroundColor: "#fff" }}>
          <Text>{item.id}</Text>
          <Text>{item.title}</Text>
          <Text>Quantidade de produto: {item.quantity}</Text>
          <Text>Quantidade Total: {getTotalItemCount()}</Text>

          <Text>Total: R$ {item.total.toFixed(2)}</Text>
        </View>
      ))}

      <View style={styles.footerButton}>
        <ButtonBuy children="BUY" onPress={() => {}} isloading={false} />
      </View>
    </View>
  );
};

export default Cart;
