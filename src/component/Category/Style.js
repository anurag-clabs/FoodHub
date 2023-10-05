import { StyleSheet } from "react-native";
import { ms, s, vs } from "react-native-size-matters";
import { Font } from "../../utils/Fonts";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    BackgroundImg: {
        marginLeft: s(120),
        width: '82%',
        height: vs(240),
        resizeMode: 'contain',
    },
    BackImgView: {
        position: 'absolute',
        left: s(20),
        top: vs(20),
    },
    header1: {
        fontFamily: Font.SofiaProBold,
        fontSize: 40,
        color: colors.black,
        marginTop: vs(15), 

    },
    header2: {
        fontFamily: Font.SofiaProBold,
        fontSize: 45,
        color: colors.orange
    },
    types: {
        fontFamily: Font.SofiaProRegular,
        fontSize: 15
    },
    shortbyTxt: {
        fontFamily: Font.SofiaProMedium,
        fontSize: 15,
        color: colors.black
    },
    popularDropdown: {
        fontFamily: Font.SofiaProRegular,
        fontSize: 17,
         color: colors.orange
    },
    filetBtn: {
        // marginLeft: s(12),
        height: ms(45),
        width: ms(45),
        backgroundColor: colors.LightGrayishBlue,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: colors.DarkShadeGray,
        shadowOffset: {width: 0, height: 2},
        elevation: 1,
      },
})