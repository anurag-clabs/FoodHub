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
        height: ms(15),
        width: ms(15),
        resizeMode: 'contain',
    },
    headerTxt: {
        fontFamily: Font.SofiaProBold,
        fontSize: 36,
        color: colors.black,
        marginVertical: vs(30)
    },
    bottomSignUpTxtView: {
        flexDirection: 'row'
    },
    textInputTxt: {
        fontFamily: Font.sofiaProMedium,
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
    },
    lineView: {
        marginHorizontal: s(30),
        marginVertical: vs(15),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
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
    otpView: {},
    textInputContainer: {
        marginVertical: vs(30),
    },
    roundedTextInput: {
        height: 60,
        width: 60,
        borderRadius: 10,
        borderWidth: 1,
        fontFamily: Font.sofiaProMedium,
        color: colors.orange,
        fontSize: 25,
        borderBottomWidth: 1
    },
});