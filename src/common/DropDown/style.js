import { StyleSheet } from "react-native";
import { Font } from "../../utils/Fonts";
import { colors } from "../../utils/colors";
import { ms } from "react-native-size-matters";

export const styles = StyleSheet.create({
    selectCountryText: {
        fontFamily: Font.SofiaProMedium,
    },
    boxText: {
        color: colors.black,
        paddingLeft: 10,
        fontFamily: Font.SofiaProMedium,
      },
    selectedCountryText: {
        color: colors.black,
        fontFamily: Font.SofiaProMedium,
    },
    focusColor: {
        color: colors.yellow
    },
    downArrow: {
        width: ms(30),
        height: ms(30),
        tintColor: colors.black,
      },
})