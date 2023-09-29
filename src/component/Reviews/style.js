import { StyleSheet } from "react-native";
import { ms, s, vs } from "react-native-size-matters";
import { colors } from "../../utils/colors";
import { Font } from "../../utils/Fonts";

export const styles = StyleSheet.create({
    ReaviewTxtView: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.lightGrey,
        marginVertical: vs(20),
        marginHorizontal: s(20),
    },
    imageStyle: {
        height: ms(35),
        width: ms(35),
        resizeMode: 'contain',
        borderRadius: ms(35) / 2,
        marginLeft: s(10),
    },
    userImg: {
        height: ms(45),
        width: ms(55),
        resizeMode: 'contain',
        borderRadius: ms(45) / 2,
    },
    userView: {
        marginHorizontal: s(20),
        marginVertical: vs(10),
    },
})