import { StyleSheet } from "react-native";
import { ms, s, vs } from "react-native-size-matters";
import { colors } from "../../utils/colors";
import { Font } from "../../utils/Fonts";

export const styles = StyleSheet.create({
    image: {
        width: ms(50),
        height: ms(50),
        borderRadius: 30,
        resizeMode: 'cover',
    },
    boxElevation: {
        marginHorizontal: s(10),
        height: vs(110),
        width: s(65),
        backgroundColor: colors.white,
        borderRadius: 80 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: colors.DarkShadeGray,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
    },
    selectedBoxElevation: {
        backgroundColor: colors.orange,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: colors.orange,
        shadowOffset: { width: 0, height: 2 },
        elevation: 5,
    },
    name: {
        textAlign: 'center',
        paddingHorizontal: s(10),
        marginVertical: vs(10),
        color: colors.DimGray,
        fontSize: 13,
        fontFamily: Font.SofiaProMedium,
    },
})