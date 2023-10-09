import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { Font } from "../../utils/Fonts";
import { s, vs, ms } from "react-native-size-matters";

export const styles = StyleSheet.create({
    constainer: {
        flex: 1,
    },
    headerTxt: {
        fontFamily: Font.SofiaProMedium,
        fontSize: 36,
        color: colors.black,
        marginVertical: vs(40)
    },
    textInputTxt: {
        fontFamily: Font.SofiaProMedium,
    },
    textInputStyle: {
        marginVertical: vs(10),
        borderColor: colors.lightGrey,
        borderWidth: 1,
        borderRadius: 10,
        fontFamily: Font.SofiaProMedium,
        padding: 12,
        height: vs(55),
        marginBottom: vs(20),
    },
    focusedTextInput: {
        marginVertical: vs(10),
        borderWidth: 1,
        borderRadius: 10,
        fontFamily: Font.SofiaProMedium,
        padding: 12,
        height: vs(55),
        marginBottom: vs(20),
        borderColor: colors.orange
    },
    hidePassword: {
        height: ms(18),
        width: ms(18),
        tintColor: colors.lightGrey,
        resizeMode: 'contain'
    },
    passwordView: {
        height: vs(55),
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.lightGrey,
        marginVertical: vs(10),
    },
    FocuspasswordView: {
        height: vs(55),
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.orange,
        marginVertical: vs(10),
    },
    input: {
        width: ms(300),
        color: colors.lightGrey,
    },
    bottomSignUpTxtView: {
        flexDirection: 'row'
    },
    bottomSignUpTxt: {
        fontFamily: Font.SofiaProMedium,
        fontSize: 15,
        color: colors.grey,
    },
    bottomSignUpTxt2: {
        fontFamily: Font.SofiaProMedium,
        fontSize: 15,
        color: colors.orange,
    },
    lineView: {
        marginHorizontal: s(30),
        marginVertical: vs(15),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    devider: {
        width: '30%',
        height: 0.6,
        backgroundColor: colors.grey,
    },
    deviderTxt: {
        fontFamily: Font.SofiaProMedium,
        fontSize: 15,
        color: colors.grey
    },
    iconView: {
        marginVertical: vs(10),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    iconBtn: {
        backgroundColor: colors.white,
        borderRadius: 25,
        width: '45%',
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 2 },
        elevation: 5
    },
    iconImg: {
        height: ms(25),
        width: ms(25),
        margin: 14,
        resizeMode: 'contain',
    },
    iconTxt: {
        fontFamily: Font.SofiaProMedium,
        color: colors.black,
        fontSize: 15,
    },
})