import { StyleSheet } from "react-native";
import { ms, s, vs } from "react-native-size-matters";
import { colors } from "../../utils/colors";
import { Font } from "../../utils/Fonts";

export const styles = StyleSheet.create({
    HeaderView: {
        marginTop: vs(20),
        marginBottom: vs(10),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    Text: {
        fontFamily: Font.SofiaProSemiBold,
        fontSize: 20,
        color: colors.black,
    },
    TextHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
    },
    Deliver: {
        marginHorizontal: 3,
        fontFamily: Font.SofiaProMedium,
        fontSize: 14,
        color: colors.darkgray,
    },
    HeaderAero: {
        resizeMode: 'contain',
        height: vs(8),
        width: s(10),
    },
    HeaderAddress: {
        fontFamily: Font.SofiaProMedium,
        color: colors.orange,
        fontSize: 15,
    },
})