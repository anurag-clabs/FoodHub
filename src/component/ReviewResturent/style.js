import { StyleSheet } from "react-native";
import { ms, s, vs } from "react-native-size-matters";
import { colors } from "../../utils/colors";
import { Font } from "../../utils/Fonts";

export const styles = StyleSheet.create({
    BackImgView: {
        marginTop: vs(30),
        marginHorizontal: s(20),
    },
    mainView: {
        marginHorizontal: s(20),
        alignItems: "center",
    },
    ResturentLogoView: {
        marginVertical: vs(50),
        backgroundColor: colors.white,
        height: ms(100),
        width: ms(100),
        borderRadius: ms(100) / 5,
        alignItems: 'center',
        justifyContent: 'center',
        shadowOpacity: 1,
        shadowRadius: 4,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        elevation: 10,
    },
    PizzaHutImage: {
        height: ms(60),
        width: ms(60),
        resizeMode: 'contain',
    },
    QuestionTxt: {
        fontFamily: Font.SofiaProRegular,
        fontSize: 32,
        color: colors.black
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
        // marginHorizontal: s(20),
        marginVertical: vs(10),
        borderColor: colors.lightGrey,
        borderWidth: 1,
        borderRadius: 10,
        fontFamily: Font.SofiaProMedium,
        padding: 12,
        textAlignVertical: 'top',
    },
})