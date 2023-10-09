import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { ms, s, vs } from "react-native-size-matters";
import { Font } from "../../utils/Fonts";

export const styles = StyleSheet.create({
    textInputStyleView: {
        height: vs(45),
        backgroundColor: colors.LightGrayishBlue,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: colors.WhiteSmoke,
        borderWidth: 1,
        borderRadius: 10,
        fontFamily: Font.SofiaProMedium,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: colors.DarkShadeGray,
        shadowOffset: {width: 0, height: 2},
        elevation: 2,
      },
      search: {
        height: ms(18),
        width: ms(18),
        resizeMode: 'contain',
        tintColor: colors.search,
        marginHorizontal: vs(5),
      },
      boxElevation: {
        marginLeft: s(20),
        height: vs(100),
        width: s(62),
        backgroundColor: colors.white,
        borderRadius: 80 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: colors.DarkShadeGray,
        shadowOffset: {width: 0, height: 2},
        elevation: 2,
      },
      selectedBoxElevation: {
        backgroundColor: colors.orange,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: colors.orange,
        shadowOffset: {width: 0, height: 2},
        elevation: 5,
      },
      name: {
        marginVertical: vs(10),
        color: colors.DimGray,
        fontSize: 13,
        fontFamily: Font.SofiaProMedium,
      },
      image: {
        width: ms(50),
        height: ms(50),
        borderRadius: 30,
        resizeMode: 'cover',
      },
      headerText: {
        color: colors.black,
        fontFamily: Font.SofiaProSemiBold,
        fontSize: 22,
        marginBottom: vs(5)
    },
})