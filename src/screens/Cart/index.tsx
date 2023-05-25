import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import ButtonBuy from "../../components/ButtonBuy";
import styles from "./style";
import Card from "../../components/Card";


const Cart = () => {
    const [cartItems, setCartItems] = useState([1, 2, 3, 4, 5, 6, 7]);
    const [isCartEmpty, setIsCartEmpty] = useState(false);

    const removeItem = (index: number) => {
        const newItems = [...cartItems];
        newItems.splice(index, 1);
        setCartItems(newItems);
    }

    const rederEmptyCart = () => {
        return(
        <View style={styles.container}>
            <Text style={styles.textContainer}>Ops, Empty Cart :(</Text>
            <Text style={styles.subTextContainer}>Add a product</Text>
        </View>
        )
    }

    const renderItem = ({ item, index }: any) => (
        <View style={styles.cardContainer}>
            <Card isCart image={require('../../../assets/icons/username.png')} price="300" title="Teste" removeButtonPress={() => removeItem(index)} />
        </View>
    );
    const renderFlatList = () => {
        return(
        <View style={styles.headerList}>
            <FlatList
                data={cartItems}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
        )
    }

    useEffect(()=>{
        setIsCartEmpty(cartItems.length === 0);
    }, [cartItems]);

return (
    <View style={styles.viewPort}>
        <View style={styles.header}>
            <Text style={styles.text}>Total</Text>
            <Text style={styles.textCount}>R$0</Text>
        </View>
        {isCartEmpty ? rederEmptyCart() : renderFlatList()}
        
        <View style={styles.footerButton}>
            <ButtonBuy children="BUY" onPress={() => { }} isloading={false} />
        </View>
    </View>
);
};

export default Cart;