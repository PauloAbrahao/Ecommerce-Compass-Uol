import React, { useEffect, useState } from "react";
import {  View, Text, FlatList } from "react-native";
import { useCart } from "../../context";
import ButtonBuy from "../../components/ButtonBuy";
import styles from "./style";
import Card from "../../components/Card";
import CustomModal from "../../components/Modal";

const Cart = () => {
    const { cartItems, getTotalItemCount } = useCart();
    const [cardList, setcardList] = useState([1, 2, 3, 4, 5, 6, 7]);
    const [isCartEmpty, setIsCartEmpty] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const removeItem = (index: number) => {
        const newItems = [...cardList];
        newItems.splice(index, 1);
        setcardList(newItems);
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
                id={1}
                isCart
                image="carro"
                price={100}
                title="Teste"
                removeButtonPress={() => removeItem(index)} />
        </View>
    );
    const renderFlatList = () => {
        return (
            <View style={styles.headerList}>
                <FlatList
                    data={cardList}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }

    useEffect(() => {
        setIsCartEmpty(cardList.length === 0);
    }, [cardList]);

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
        </View>
    );
};

export default Cart;