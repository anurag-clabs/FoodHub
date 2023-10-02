import { StyleSheet } from "react-native";
import { ms, s, vs } from "react-native-size-matters";
import { colors } from "../../utils/colors";
import { Font } from "../../utils/Fonts";

export const styles = StyleSheet.create({
    ReaviewTxtView: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.lightGrey,
        marginVertical: vs(20),
        marginHorizontal: s(20),
    },
    imageStyle: {
        height: ms(35),
        width: ms(35),
        resizeMode: 'contain',
        borderRadius: ms(35) / 2,
        marginLeft: s(10),
    },
    userImg: {
        height: ms(45),
        width: ms(55),
        resizeMode: 'contain',
        borderRadius: ms(45) / 2,
    },
    userView: {
        marginHorizontal: s(20),
        marginVertical: vs(10),
    },
    reviewDescription: {
        width: '95%',
        fontSize: 17,
        fontFamily: Font.SofiaProMedium,
    },
    reviewCount: {
        height: ms(18),
        width: ms(19),
        resizeMode: 'contain',
        borderRadius: ms(12) / 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.yellow,
        shadowOpacity: 1,
        shadowRadius: 4,
        shadowColor: colors.yellow,
        shadowOffset: { width: 0, height: 2 },
        elevation: 10,
        position: 'absolute',
        right: 0,
        bottom: 15
    },
    reviewCountTxt: {
        fontFamily: Font.SofiaProMedium,
        color: colors.white,
        fontSize: 10,
    },
    userImgView: {
        height: ms(55),
        width: ms(55),
    },
    userHeaderView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userName: {
        fontFamily: Font.SofiaProMedium,
        color: colors.black,
        fontSize: 15
    },
    date: {
        fontFamily: Font.SofiaProMedium
    },
    usernameView: {
        height: vs(55),
        width: s(190),
        marginHorizontal: s(10), 
        marginRight: 50,
    },
})