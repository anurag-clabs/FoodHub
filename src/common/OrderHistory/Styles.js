import { StyleSheet } from "react-native";
import { s, vs } from "react-native-size-matters";
import { Font } from "../../utils/Fonts";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    MainView: {
        marginHorizontal: s(20),
        borderRadius: 20,
        marginVertical: vs(10),
        backgroundColor: colors.white,
        shadowColor: colors.darkPrimaryColor,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 2,
    },
    topView: {
        marginVertical: vs(10),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    ResturentItemView: {
        marginRight: s(10),
        justifyContent: 'center',
    },
    ResturentNameView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ResturentNameTxt: {
        fontFamily: Font.SofiaProBold,
        color: colors.black,
        fontSize: 17
    },
    ItemTxt: {
        fontFamily: Font.SofiaProMedium,
    },
    deliveryStatus: {
        fontSize: 13,
        fontFamily: Font.SofiaProMedium,
        color: colors.green
    },
    imageView: {
        marginLeft: s(15),
        backgroundColor: colors.white,
        height: vs(55),
        width: s(55),
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    orderNumberTxt: {
        marginRight: s(15),
        color: colors.orange,
        fontFamily: Font.SofiaProRegular
    },
    deliveryStatusView: {
        justifyContent: 'space-between',
        marginHorizontal: s(15),
        marginTop: vs(8)
    },
    timeTxt: {
        fontSize: 40,
        fontFamily: Font.SofiaProMedium,
        color: colors.black
    },
    minTxt: {
        fontSize: 15,
        fontFamily: Font.SofiaProRegular,
        color: colors.black,
        marginHorizontal: s(3),
        bottom: -30,
    },
    statusTimeTxt: {
        textAlign: 'right',
        fontFamily: Font.SofiaProRegular,
        marginBottom: vs(10),
    },
    statusTxt: {
        color: colors.black,
        fontFamily: Font.SofiaProSemiBold,
    },
})