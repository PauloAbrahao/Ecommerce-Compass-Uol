import { View, Text } from "react-native";
import ButtonBuy from "../../components/ButtonBuy";
import styles from "./style";
import { useCart } from "../../context";

const Cart = () => {
  const { cartItems, getTotalItemCount, getTotalPrice, removeFromCart,  } =
    useCart();

  console.log("cartItems Carrinho", cartItems);

  return (
    <View style={styles.viewPort}>
      <View style={styles.header}>
        <Text style={styles.text}>Total</Text>
        <Text style={styles.textCount}>R$ {getTotalPrice().toFixed(2)}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.textContainer}>Ops, Empty Cart :(</Text>
        <Text style={styles.subTextContainer}>Add a product</Text>
      </View>

      {cartItems.map((item) => (
        <View key={item.id} style={{ backgroundColor: "#fff" }}>
          <Text>{item.id}</Text>
          <Text>{item.title}</Text>
          <Text>{item.price}</Text>

          <Text>Quantidade de carrinho: {item.cartQuantity}</Text>

          <Text>Quantidade de produto: {item.productQuantity}</Text>
          <Text>Quantidade Total: {getTotalItemCount()}</Text>

          <Text>Total: R$ {item.total.toFixed(2)}</Text>
          <ButtonBuy
            children="Remover"
            onPress={() => removeFromCart(item.id)}
            isloading={false}
          />

        </View>
      ))}

      <View style={styles.footerButton}>
        <ButtonBuy children="BUY" onPress={() => {}} isloading={false} />
      </View>
    </View>
  );
};

export default Cart;
