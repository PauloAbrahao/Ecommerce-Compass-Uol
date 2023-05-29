import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/colors";

const styles = StyleSheet.create({
    viewPort: {
        flex: 1,
        backgroundColor: GlobalStyles.Colors.background
    },
    header:{
        marginTop: 40,
        marginLeft: 40,
        marginBottom: 30,
    },
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardContainer:{
        marginRight: 15,
        marginLeft: 15,
        borderBottomWidth: 1,
        borderBottomColor: GlobalStyles.Colors.input_placeholder,
        paddingBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    headerList:{
        maxHeight: '60%',
    },
    text: {
        color: GlobalStyles.Colors.input_placeholder,
        fontSize: 24,
        textTransform: 'uppercase',
    },
    textCount: {
        color: GlobalStyles.Colors.primary,
        fontSize: 40,
        textTransform: 'uppercase',  
    },
    textContainer:{
        color: GlobalStyles.Colors.text_container,
        fontSize: 32,
        marginBottom: 60,
    },
    subTextContainer:{
        color: GlobalStyles.Colors.subText_container,
        fontSize: 20,
    },
    footerButton:{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
    }
});

export default styles;