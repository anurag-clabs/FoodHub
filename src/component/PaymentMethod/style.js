import { Platform, StyleSheet } from "react-native";
import { Font } from "../../utils/Fonts";
import { colors } from "../../utils/colors";
import { ms, s, vs } from "react-native-size-matters";

export const styles = StyleSheet.create({
    cashTxt: {
        fontFamily: Font.SofiaProMedium,
        fontSize: 20,
        color: colors.black,
    },
    devider: {
        borderWidth: 1,
        borderColor: colors.whiteGrey,
        marginVertical: vs(8)
    },
    subTotalTxt: {
        fontFamily: Font.SofiaProSemiBold,
        color: colors.black,
        fontSize: 18,
    },
    header: {
        justifyContent: 'center',
        marginHorizontal: s(20),
        marginTop: vs(15)
    },
    headerText: {
        color: colors.black,
        fontFamily: Font.SofiaProSemiBold,
        fontSize: 34,
    },
    description: {
        color: colors.black,
        fontFamily: Font.SofiaProRegular,
        fontSize: 13,
        marginBottom: vs(5),
    },
    paymentMethod: {
        marginVertical: vs(8),
        marginHorizontal: s(20),
        borderWidth: 1,
        borderColor: colors.lightGrey,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white,
        elevation: 7,
        height: vs(70),
    },
    selectedMethod: {
        backgroundColor: colors.orange,
    },
    methodName: {
        fontSize: 16,
        color: colors.black,
        fontFamily: Font.SofiaProRegular,
    },
    methodImage: {
        width: ms(65),
        height: ms(45),
        resizeMode: 'contain',
        marginHorizontal: s(30)
    },
    methodDate: {
        fontSize: 12
    },
    midTitle: {
        fontSize: 16,
        color: colors.black,
        fontFamily: Font.SofiaProSemiBold,
        marginVertical: vs(20),
        marginHorizontal: s(20),
    },
    dataTxt: {
        marginVertical: vs(8),
        marginHorizontal: s(20),
        borderWidth: 1,
        borderColor: colors.lightGrey,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white,
        height: vs(70),
        justifyContent: 'space-around',
    },
    bottomImgView: {
        height: ms(15),
        width: ms(15),
        borderRadius: 7,
        borderWidth: 12,
        borderColor: colors.Blue,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: s(15),
    },
    bottomImg: {
        height: ms(10),
        width: ms(10),
        resizeMode: 'contain',
        tintColor: colors.white
    },
    bottomButton: {
        position: 'absolute',
    bottom: vs(20),
    shadowColor: colors.orange,
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5, 
    },
})