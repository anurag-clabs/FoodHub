import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { Font } from "../../utils/Fonts";
import { s, vs, ms } from "react-native-size-matters";

export const styles = StyleSheet.create({
    constainer: {
        flex: 1,
    },
    BackImgView: {
        marginTop: vs(30),
        marginHorizontal: s(20),
        backgroundColor: colors.white,
        height: ms(40),
        width: ms(40),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        elevation: 5,
    },
    BackImg: {
        resizeMode: 'contain'
    },
    headerTxt: {
        fontFamily: Font.SofiaProBold,
        fontSize: 36,
        color: colors.black,
        marginVertical: vs(30)
    },
    input: {
        width: ms(300),
        color: colors.lightGrey,
    },
    bottomSignUpTxtView: {
        flexDirection: 'row'
    },
    bottomSignUpTxt: {
        fontFamily: Font.sofiaProMedium,
        fontSize: 15,
        color: colors.grey,
    },
    bottomSignUpTxt2: {
        fontFamily: Font.sofiaProMedium,
        fontSize: 15,
        color: colors.orange,
        textDecorationLine: 'underline'
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
        fontFamily: Font.sofiaProMedium,
        fontSize: 15,
        color: colors.grey
    },
    bottomView: {
        marginTop: vs(10),
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
        shadowOffset: { width: -2, height: 4 },
        elevation: 5
    },
    iconImg: {
        margin: 14,
    },
    iconTxt: {
        fontFamily: Font.sofiaProMedium,
        color: colors.black,
        fontSize: 15,
    },
    forgitTxt: {
        color: colors.orange,
        fontFamily: Font.sofiaProMedium,
        textAlign: 'center',
        fontSize: 16,
        marginTop: vs(15)
    },
    codeInputFieldStyle: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: colors.lightGrey,
        borderRadius: 10,
        color: colors.orange,
        fontFamily: Font.sofiaProMedium,
        fontSize: 18,
    },
    codelineStyleHighLighted: {
        borderColor: colors.orange,
    },
    otpView: {
        alignItems: "center",
    },
});