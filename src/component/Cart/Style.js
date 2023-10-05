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
        marginRight: s(40)
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
        marginTop: vs(5),
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
        paddingHorizontal: 5,
        borderWidth: 1,
        borderRadius: 35,
        borderColor: colors.whiteGrey,
    },
    textInputBar: {
        fontFamily: Font.SofiaProRegular,
        width: '73%',
        color: colors.whiteGrey,
    },
    subTotalTxt: {
        fontFamily: Font.SofiaProSemiBold,
        color: colors.black,
        fontSize: 18,
    },
    devider: {
        borderWidth: 1,
        borderColor: colors.whiteGrey,
        marginVertical: vs(8)
    },
    bottomButton: {
        marginTop: vs(40)
    },
    itemNo: {
        fontFamily: Font.SofiaProMedium,
        fontSize: 15,
    },
})