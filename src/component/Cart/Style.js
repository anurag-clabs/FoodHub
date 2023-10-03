import { StyleSheet } from "react-native";
import { ms, s, vs } from "react-native-size-matters";
import { colors } from "../../utils/colors";
import { Font } from "../../utils/Fonts";

export const styles = StyleSheet.create({
    ItemImg: {
        height: vs(70),
        width: s(70),
        borderRadius: 15
    },
    closeImg: {
        tintColor: colors.orange,
        alignContent: 'flex-end'
    },
    ItemTxt: {
        marginRight: vs(40)
    },
    itemName: {
        fontFamily: Font.SofiaProSemiBold,
        color: colors.black,
        fontSize: 17
    },
    itemDescription: {
        fontFamily: Font.SofiaProSemiBold,
    },
    itemPrice: {
        marginTop: s(5),
        fontFamily: Font.SofiaProSemiBold,
        color: colors.orange
    },
    lessBtnView: {
        height: ms(30),
        width: ms(30),
        borderRadius: ms(15),
        backgroundColor: colors.orange,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textBarView: {
        padding: 5,
        borderWidth: 1,
        borderRadius: 35,
        borderColor: colors.lightGrey,
    },
    subTotalTxt: {
        fontFamily: Font.SofiaProSemiBold,
        color: colors.black,
        fontSize: 20,
        // marginBottom: s(10)
    },
    devider: {
        borderWidth: 0.2,
        borderColor: colors.RomanSilver,
        marginVertical: vs(8)
    },
})