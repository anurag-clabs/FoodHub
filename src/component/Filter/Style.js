import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { ms, s, vs } from "react-native-size-matters";
import { Font } from "../../utils/Fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        marginTop: vs(365),
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    closeImg: {
        height: ms(32),
        width: ms(32),
        borderRadius: ms(32) / 2,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        left: 200,
        top: vs(-40),
        backgroundColor: colors.white
    },
    closeIcon: {
    },
    subTotalTxt: {
        fontFamily: Font.SofiaProMedium,
        color: colors.black,
        fontSize: 18,
    },
    itemName: {
        fontFamily: Font.SofiaProSemiBold,
        color: colors.black,
        fontSize: 20,
        marginTop: vs(15),
    },
    blankImg: {
        height: ms(22),
        width: ms(22),
        tintColor: colors.lightGrey,
        resizeMode: 'contain'
    },
    filledImg: {
        height: ms(22),
        width: ms(22),
        tintColor: colors.orange,
        resizeMode: 'contain'
    },
    devider: {
        height: 1,
        backgroundColor: colors.RomanSilver,
        marginVertical: vs(8)
    },
    cleanTxt: {
        color: colors.orange,
        fontFamily: Font.SofiaProMedium,
        fontSize: 20,
        marginLeft: vs(15)
    },
    applyButton: {
        width: s(180), 
        height: vs(43)
    },
    Txtstyle: {
        fontSize: 20
    },
})