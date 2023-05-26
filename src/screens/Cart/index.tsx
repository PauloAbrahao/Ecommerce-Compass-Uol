<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import ButtonBuy from "../../components/ButtonBuy";
import styles from "./style";
import Card from "../../components/Card";
import CustomModal from "../../components/Modal";


const Cart = () => {
    const [cartItems, setCartItems] = useState([1, 2, 3, 4, 5, 6, 7]);
    const [isCartEmpty, setIsCartEmpty] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const removeItem = (index: number) => {
        const newItems = [...cartItems];
        newItems.splice(index, 1);
        setCartItems(newItems);
    }

    const rederEmptyCart = () => {
        return (
            <View style={styles.container}>
                <Text style={styles.textContainer}>Ops, Empty Cart :(</Text>
                <Text style={styles.subTextContainer}>Add a product</Text>
            </View>
        )
    }

    const renderItem = ({ item, index }: any) => (
        <View style={styles.cardContainer}>
            <Card
                isCart
                image="carro"
                price="300"
                title="Teste"
                removeButtonPress={() => removeItem(index)} />
        </View>
    );
    const renderFlatList = () => {
        return (
            <View style={styles.headerList}>
                <FlatList
                    data={cartItems}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }

    useEffect(() => {
        setIsCartEmpty(cartItems.length === 0);
    }, [cartItems]);

    return (
        <View style={styles.viewPort}>
            <View style={styles.header}>
                <Text style={styles.text}>Total</Text>
                <Text style={styles.textCount}>R$0</Text>
            </View>
             {isCartEmpty ? rederEmptyCart() : renderFlatList()} 
            <CustomModal header="Good!" message="Product successfully purchased." onClose={() => closeModal()} visible={modalVisible} /> 
           <View style={styles.footerButton}>
                <ButtonBuy children="BUY" onPress={() => openModal()} isloading={false} />
            </View>
=======
import { View, Text, Pressable } from "react-native";
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
          <Text>Quantidade: {item.productQuantity}</Text>
          <Text>Quantidade Total: {getTotalItemCount()}</Text>

          <Text>Total: R$ {item.total.toFixed(2)}</Text>
>>>>>>> f0b09d569daef540f42bddf256e0ff43cfcd797b
        </View>
      ))}

      <View style={styles.footerButton}>
        <ButtonBuy children="BUY" onPress={() => {}} isloading={false} />
      </View>
    </View>
  );
};

export default Cart;
