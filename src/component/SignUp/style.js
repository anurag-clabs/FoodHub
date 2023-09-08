import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { Font } from "../../common/Fonts";
import { s, vs, ms } from "react-native-size-matters";

export const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        backgroundColor: colors.grey
    },
    headerTxt: {
        fontFamily: Font.sofiaProMedium,
        fontSize: 36,
        color: colors.black,
        marginVertical: vs(40)
    },
    textInputTxt: {
        fontFamily: Font.sofiaProMedium,
    },
    textInputStyle: {
        marginVertical: vs(10),
        borderColor: colors.orange,
        borderWidth: 1,
        borderRadius: 10,
        fontFamily: Font.sofiaProMedium,
        padding: 10
    },
})