import { StyleSheet } from "react-native";
import { ms, s, vs } from "react-native-size-matters";
import { colors } from "../../utils/colors";
import { Font } from "../../utils/Fonts";


export const styles = StyleSheet.create({
    headerView: {
        marginTop: vs(20),
    },
    BackImgView: {
        marginTop: vs(10),
        marginHorizontal: s(10),
    },
    BackgroundImg: {
        width: 'auto',
        height: vs(140)
    },
    PizzaHutImage: {
        height: ms(60),
        width: ms(60),
        resizeMode: 'contain',
    },
    PizzaHutImageView: {
        alignItems: 'center',
        justifyContent: 'center',
        height: ms(80),
        width: ms(80),
        borderRadius: 40,
        backgroundColor: colors.yellow,
    },
    logoMainView: {
        alignItems: 'center',
        marginTop: vs(50)
    },
    logoImgView: {
        backgroundColor: colors.white,
        height: ms(100),
        width: ms(100),
        borderRadius: ms(100) / 2,
        alignItems: 'center',
        justifyContent: 'center',
        shadowOpacity: 1,
        shadowRadius: 4,
        shadowColor: colors.yellow,
        shadowOffset: { width: 0, height: 2 },
        elevation: 10,
    },
    VerifiedImgView: {
        backgroundColor: colors.white,
        height: '22%',
        width: '22%',
        borderRadius: 80,
        alignItems: 'center',
        justifyContent: 'center',
        shadowOpacity: 1,
        shadowRadius: 4,
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 2 },
        elevation: 5,
        position: 'absolute',
        bottom: 8,
        right: 17,
    },
    imageStyle: {
        height: ms(17),
        width: ms(17),
        resizeMode: 'contain',
    },
    textView: {
        alignItems: 'center',
        marginTop: vs(50),
        marginHorizontal: s(20),
    },
    headerTxt: {
        marginVertical: vs(5),
        fontFamily: Font.SofiaProBold,
        color: colors.black,
        fontSize: 22
    },
    headerDescription: {
        fontSize: 14,
        fontFamily: Font.SofiaProMedium,
    },
    statusTxt: {
        fontSize: 15,
        marginVertical: vs(10),
        fontFamily: Font.SofiaProMedium,
        color: colors.green
    },
    ratingTxt: {
        marginVertical: vs(5),
        fontFamily: Font.SofiaProBold,
        color: colors.black,
        fontSize: 18
    },
    rateTxt: {
        marginVertical: vs(5),
        fontFamily: Font.SofiaProMedium,
        color: colors.orange,
        fontSize: 25
    },
    ratingContainer: {
        marginVertical: vs(5),
    },
    textInputStyle: {
        width: '100%',
        height: vs(150),
        marginVertical: vs(10),
        borderColor: colors.lightGrey,
        borderWidth: 1,
        borderRadius: 10,
        fontFamily: Font.SofiaProMedium,
        padding: ms(12),
        textAlignVertical: 'top',
    },
})