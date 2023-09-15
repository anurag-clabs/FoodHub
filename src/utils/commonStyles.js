import { Dimensions, StyleSheet } from "react-native";
import { ms, s, vs } from "react-native-size-matters";
import { Font } from "./Fonts";
import { colors } from "./colors";

export const commonStyle = StyleSheet.create({
    constainer: {
        flex: 1,
        backgroundColor: colors.white
      },
    rowCenter: {
        flexDirection: 'row',
        alignItems: 'center',
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
    dropdown: {
        height: vs(55),
        width: Dimensions.get('screen').width / 1.2,
      },
      BoxText: {
        // fontSize: 20,
        paddingLeft: 10,
        fontFamily: Font.sofiaProMedium
      },
      DownArrow: {
        width: ms(30),
        height: ms(30),
        tintColor: colors.black,
      },
      Boxs: {
        marginVertical: vs(10),
        borderColor: colors.lightGrey,
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: vs(20),
      },
    backGroundImg: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
      imageStyle: {
        height: ms(15),
        width: ms(15),
        resizeMode: 'contain',
      },
      textInputStyle: {
        marginVertical: vs(10),
        borderColor: colors.lightGrey,
        borderWidth: 1,
        borderRadius: 10,
        fontFamily: Font.sofiaProMedium,
        padding: 12,
        height: vs(55),
        marginBottom: vs(20),
    },
    focusedTextInput: {
        marginVertical: vs(10),
        borderWidth: 1,
        borderRadius: 10,
        fontFamily: Font.sofiaProMedium,
        padding: 12,
        height: vs(55),
        marginBottom: vs(20),
        borderColor: colors.orange
    },
    headerImg: {
      height: ms(40),
      width: ms(40),
      resizeMode: 'contain',
      borderRadius: ms(35) / 4,
    },
})