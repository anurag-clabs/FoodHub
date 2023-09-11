import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { Font } from "../../utils/Fonts";
import { s, vs, ms } from "react-native-size-matters";
import { transform } from "@babel/core";


export const styles = StyleSheet.create({
    constainer: {
        flex: 1,
    },
    backgroundImg: {
        height: '100%',
        width: '100%',
    },
    skipBtnView: {
        alignItems: 'flex-end',
    },
    skipBtn: {
        marginVertical: vs(20),
        marginHorizontal: s(20),
        backgroundColor: colors.white,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    skipBtnTxt: {
        color: colors.orange,
        fontFamily: Font.sofiaProMedium,
        marginHorizontal: s(10),
        marginVertical: vs(3)
    },
    headerView: {
        marginVertical: vs(50),
    },
    headerTxt: {
        fontSize: 50,
        fontFamily: Font.SofiaProBold,
        color: colors.black
    },
    headerTxt2: {
        fontSize: 50,
        fontFamily: Font.SofiaProBold,
        color: colors.orange
    },
    headerTxtContent: {
        fontFamily: Font.SofiaPro,
        color: colors.grey,
        fontSize: 20,
        width: 300
    },
    signInComponent: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: vs(20),
    },
    lineView: {
        justifyContent: 'center',
        marginHorizontal: s(30),
        marginVertical: vs(15)
    },
    devider: {
        width: '30%',
        height: 0.5,
        backgroundColor: colors.white,
    },
    deviderTxt: {
        fontFamily: Font.sofiaProMedium,
        fontSize: 15,
        color: colors.white
    },
    iconBtn: {
        backgroundColor: colors.white,
        borderRadius: 25,
        width: '45%',
    },
    iconImg: {
        margin: 14,
    },
    iconTxt: {
        fontFamily: Font.sofiaProMedium,
        color: colors.black,
        fontSize: 15,
    },
    iconView: {
        marginVertical: vs(10),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    startBtn: {
        marginVertical: vs(20),
        backgroundColor: colors.lightWhite,
        alignItems: 'center',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: colors.white
    },
    startBtnTxt: {
        margin: 15,
        fontFamily: Font.sofiaProMedium,
        fontSize: 18,
        color: colors.white,
    },
    bottomSignUpTxtView: {
        flexDirection: 'row'
    },
    bottomSignUpTxt: {
        fontFamily: Font.sofiaProMedium,
        fontSize: 18,
        color: colors.white,
    },
    bottomSignUpTxt2: {
        fontFamily: Font.sofiaProMedium,
        fontSize: 18,
        color: colors.white,
        textDecorationLine: 'underline'
    },
})