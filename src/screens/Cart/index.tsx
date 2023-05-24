import {View, Text} from "react-native";
import ButtonBuy from "../../components/ButtonBuy";
import styles from "./style";

const Cart = () => {
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
            <View style={styles.footerButton}>
            <ButtonBuy children="BUY" onPress={()=>{}} isloading={false}/>
            </View>
        </View>
    );
};

export default Cart;