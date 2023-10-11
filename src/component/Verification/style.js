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
        fontFamily: Font.SofiaProMedium,
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
    codeInputFieldStyle: {
        width: 45,
        height: 45,
        borderWidth: 1,
        borderColor: colors.lightGrey,
        borderRadius: 10,
        color: colors.orange,
        fontFamily: Font.SofiaProMedium,
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
        height: 45,
        width: 45,
        borderRadius: 10,
        borderWidth: 1,
        fontFamily: Font.SofiaProMedium,
        color: colors.orange,
        fontSize: 20,
        borderBottomWidth: 1
    },
});