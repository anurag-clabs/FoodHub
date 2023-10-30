import {StyleSheet} from 'react-native';
import {s, vs, ms} from 'react-native-size-matters';
import {colors} from '../../utils/colors';
import {Font} from '../../utils/Fonts';

export const styles = StyleSheet.create({
    backgroundImg: {
        width: s(310),
        height: vs(150),
        borderRadius: 15
    },
    mainView: {
        marginHorizontal: s(10),
        borderRadius: 20,
        marginBottom: vs(20),
        backgroundColor: colors.white,
        elevation: 1.5,
    },
    iosShadow: {
        marginHorizontal: s(10),
        borderRadius: 20,
        marginBottom: vs(20),
        backgroundColor: colors.white,
        shadowOpacity: 1,
        shadowRadius: 4,
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 2 },
      },
    priceTagView: {
        borderRadius: 20,
        backgroundColor: colors.white,
        height: vs(28),
        width: s(65),
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    heartIconView: {
        borderRadius: ms(30) / 2,
        backgroundColor: colors.orange,
        height: ms(32),
        width: ms(32),
        alignItems: 'center',
        justifyContent: 'center',
    },
    priceTagTxt: {
        fontFamily: Font.SofiaProBold,
        color: colors.black,
        fontSize: 22
    },
    ratingHeaderView: {
        marginTop: vs(10),
        marginHorizontal: s(10),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute',
        width: s(290),
        left: s(10),
    },
    reviewTxt: {
        fontFamily: Font.SofiaProMedium,
        fontSize: 12,
        color: colors.black
    },
    itemNameView: {
        flexDirection: 'row',
    },
    itemName: {
        fontFamily: Font.SofiaProBold,
        color: colors.black,
        fontSize: 20,
    },
    itemDescription: {
        fontFamily: Font.SofiaProMedium,
        fontSize: 15,
    },
    deliveryIcon: {
        resizeMode: 'contain',
        width: ms(20),
        height: ms(20),
        alignSelf: 'center',
    },
    delivery: {
        fontFamily: Font.SofiaProRegular,
        fontSize: 16,
        alignSelf: 'center',
    },
    box: {
        marginTop: vs(10),
        marginLeft: s(10),
        height: vs(28),
        width: s(72),
        backgroundColor: colors.WhiteSmoke,
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    food: {
        fontFamily: Font.SofiaProRegular,
        color: colors.RomanSilver,
        fontSize: 12,
    },
})

