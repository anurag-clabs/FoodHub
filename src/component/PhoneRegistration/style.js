import { StyleSheet } from "react-native";
import { ms, s, vs } from "react-native-size-matters";
import { Font } from "../../utils/Fonts";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    BackImgView: {
        marginTop: vs(30),
        marginHorizontal: s(20),
        backgroundColor: colors.white,
        height: ms(40),
        width: ms(40),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        elevation: 5,
    },
    BackImg: {
        height: ms(15),
        width: ms(15),
        resizeMode: 'contain',
    },
    headerTxt: {
        fontFamily: Font.SofiaProBold,
        fontSize: 36,
        color: colors.black,
        marginVertical: vs(30)
    },
    textInputTxt: {
        fontFamily: Font.sofiaProMedium,
        width: '75%'
    },
    containerStyle: {
        borderColor: colors.orange,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 5, 
        marginBottom: 10, 
        marginVertical: vs(25),
        width: '100%',
        height: '20%'
    },
});