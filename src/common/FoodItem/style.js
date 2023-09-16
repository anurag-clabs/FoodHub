import { StyleSheet } from "react-native";
import { s, vs } from "react-native-size-matters";
import { colors } from "../../utils/colors";
import { Font } from "../../utils/Fonts";
import { ms } from "react-native-size-matters";

export const styles = StyleSheet.create({
    BackgroundImg: {
        width: 'auto',
        height: vs(150)
    },
    mainView: {
        borderRadius: 20,
        marginBottom: vs(20) ,
        backgroundColor: colors.white,
        shadowOpacity: 1,
        shadowRadius: 4,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        elevation: 5,
    },
    priceTagView: {
        borderRadius: 20,
        backgroundColor: colors.white,
        height: vs(28),
        width: s(65),
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    HeartIconView: {
        borderRadius: ms(30) / 2,
        backgroundColor: colors.orange,
        height: ms(32),
        width: ms(32),
        alignItems: 'center',
        justifyContent: 'center',
        // flexDirection: 'row',
    },
    priceTagTxt: {
        fontFamily: Font.SofiaProBold,
        color: colors.black,
        fontSize: 22
    },
    priceHeaderView: {
        marginTop: vs(10),
        marginHorizontal: s(10),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    reviewTxtView: {
        borderRadius: ms(30) / 2,
        backgroundColor: colors.white,
        height: ms(32),
        width: ms(80),
        alignItems: 'center',
        justifyContent: 'center',
        shadowOpacity: 1,
        shadowRadius: 4,
        shadowColor: colors.orange,
        shadowOffset: { width: -2, height: 4 },
        elevation: 5,
        position: 'absolute',
        bottom: -12,
        left: 15
    },
    reviewTxt: {
        fontFamily: Font.sofiaProMedium,
        fontSize: 12,
        color: colors.black
    },
    itemNameView: {
        marginHorizontal: s(10),
        marginVertical: vs(20)
    },
    itemName: {
        fontFamily: Font.SofiaProBold,
        color: colors.black,
        fontSize: 20,
    },
    itemDescription: {
        fontFamily: Font.sofiaProMedium,
        fontSize: 15,
    },
})