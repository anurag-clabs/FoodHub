import { StyleSheet } from "react-native";
import { ms, s, vs } from "react-native-size-matters";
import { Font } from "./Fonts";
import { colors } from "./colors";

export const commonStyle = StyleSheet.create({
    constainer: {
        flex: 1,
      },
    rowCenter: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rowSpace: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    alignCenter: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    m_20: {
        marginHorizontal: s(20)
    },
    backGroundImg: {
        height: '100%',
        width: '100%',
    },
    input: {
        width: ms(300),
        color: colors.black,
        fontFamily: Font.sofiaProMedium,
        padding: 10,
        marginVertical: vs(5)
      },
})