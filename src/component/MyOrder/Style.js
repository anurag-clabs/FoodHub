import { StyleSheet } from "react-native";
import { s, vs } from "react-native-size-matters";
import { colors } from "../../utils/colors";
import { Font } from "../../utils/Fonts";

export const styles = StyleSheet.create({
    MainView: {
        marginHorizontal: s(10),
        borderRadius: 20,
        marginBottom: vs(20),
        backgroundColor: colors.white,
        shadowOpacity: 1,
        shadowRadius: 4,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        elevation: 5,
    },
    ResturentNameView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ResturentNameTxt: {
        fontFamily: Font.SofiaProBold,
        color: colors.black,
        fontSize: 18
    },
    ItemTxt: {
        fontFamily: Font.sofiaProMedium,
    },
})