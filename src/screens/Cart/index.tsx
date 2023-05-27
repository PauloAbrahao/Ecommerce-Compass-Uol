import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ListRenderItem } from "react-native";
import { CartItem, useCart } from "../../context";
import ButtonBuy from "../../components/ButtonBuy";
import styles from "./style";
import Card from "../../components/Card";
import CustomModal from "../../components/Modal";

const Cart = () => {
  const { cartItems, getTotalPrice, removeFromCart, resetCart } = useCart();
  const [isCartEmpty, setIsCartEmpty] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const openModal = () => {
    setIsLoading(true);
    setTimeout(() => {
      setModalVisible(true);
      setIsLoading(false);
    }, 3000);
  };

  const closeModal = () => {
    setModalVisible(false);
    resetCart();
  };

  const removeItem = (index: number) => {
    removeFromCart(index);
  };

  const renderEmptyCart = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.textContainer}>Ops, Empty Cart :(</Text>
        <Text style={styles.subTextContainer}>Add a product</Text>
      </View>
    );
  };

  const renderItem: ListRenderItem<CartItem> = ({ item }) => (
    <>
      {Array.from({ length: item.productQuantity }).map((_, index) => (
        <View style={styles.cardContainer} key={`${item.id}-${index}`}>
          <Card
            id={item.id}
            isCart
            image={item.image}
            price={item.price}
            title={item.title}
            removeButtonPress={() => removeItem(item.id)}
            key={`${item.id}-${index}`}
          />
        </View>
      ))}
    </>
  );

  const renderFlatList = () => {
    return (
      <View style={styles.headerList}>
        <FlatList
          data={cartItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  };

  useEffect(() => {
    setIsCartEmpty(cartItems.length === 0);
  }, [cartItems]);

  return (
    <View style={styles.viewPort}>
      <View style={styles.header}>
        <Text style={styles.text}>Total</Text>
        <Text style={styles.textCount}>R$ {getTotalPrice().toFixed(2)}</Text>
      </View>
      {isCartEmpty ? renderEmptyCart() : renderFlatList()}
      <CustomModal
        header="Good!"
        message="Product successfully purchased."
        onClose={() => closeModal()}
        visible={modalVisible}
      />
      <View style={styles.footerButton}>
        <ButtonBuy
          children="BUY"
          onPress={() => openModal()}
          isloading={isLoading}
          quantity={cartItems.length}
        />
      </View>
    </View>
  );
};

export default Cart;
