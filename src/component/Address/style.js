import { StyleSheet } from "react-native";
import { ms, s, vs } from "react-native-size-matters";
import { colors } from "../../utils/colors";
import { Font } from "../../utils/Fonts";

export const styles = StyleSheet.create({
    headerView: {
        marginTop: vs(30),
        marginHorizontal: s(20),
    },
    textInputTxt: {
        fontFamily: Font.sofiaProMedium,
    },
    Btn: {
        backgroundColor: colors.orange,
        shadowOpacity: 1,
        shadowRadius: 4,
        shadowColor: colors.orange,
        shadowOffset: { width: -2, height: 5 },
        elevation: 10,
    },
})
