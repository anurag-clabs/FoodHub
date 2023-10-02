import {StyleSheet} from 'react-native';
import {s, vs} from 'react-native-size-matters';
import {colors} from '../../utils/colors';
import {Font} from '../../utils/Fonts';
import {ms} from 'react-native-size-matters';

export const styles = StyleSheet.create({
    BackgroundImg: {
        width: s(310),
        height: vs(150),
        borderRadius: 15
    },
    FoodBackgroundImg: {
        height: vs(140),
        width: s(140),
        borderRadius: 15
    },
    MainView: {
        marginHorizontal: s(10),
        borderRadius: 20,
        marginBottom: vs(20),
        backgroundColor: colors.white,
        elevation: 1.5,
    },
    IosShadow: {
        shadowOpacity: 1,
        shadowRadius: 4,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
    },
    PriceTagView: {
        borderRadius: 20,
        backgroundColor: colors.white,
        height: vs(28),
        width: s(65),
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    HeartIconView: {
        borderRadius: ms(30) / 2,
        backgroundColor: colors.orange,
        height: ms(32),
        width: ms(32),
        alignItems: 'center',
        justifyContent: 'center',
    },
    PriceTagTxt: {
        fontFamily: Font.SofiaProBold,
        color: colors.black,
        fontSize: 22
    },
    PriceHeaderView: {
        marginTop: vs(5),
        marginHorizontal: s(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    FavoritespriceHeaderView: {
        marginTop: vs(10),
        marginHorizontal: s(5),
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        width: s(290),
        left: s(15)
    },
    ReviewTxtView: {
        borderRadius: ms(30) / 2,
        backgroundColor: colors.white,
        height: ms(32),
        width: ms(80),
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 1.5,
        position: 'absolute',
        bottom: vs(60),
        left: s(8)
    },
    FavoritesreviewTxtView: {
        borderRadius: ms(30) / 2,
        backgroundColor: colors.white,
        height: ms(32),
        width: ms(80),
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 1.5,
        position: 'absolute',
        bottom: vs(60),
        left: 15
    },
    Favoritesreview: {
        borderRadius: ms(30) / 2,
        backgroundColor: colors.white,
        height: ms(32),
        width: ms(80),
        alignItems: 'center',
        justifyContent: 'center',
        shadowOpacity: 1,
        shadowRadius: 4,
        shadowColor: colors.orange,
        shadowOffset: { width: -2, height: 4 },
        position: 'absolute',
        bottom: vs(60),
        left: 15
    },
    ReviewTxt: {
        fontFamily: Font.SofiaProMedium,
        fontSize: 12,
        color: colors.black
    },
    ItemNameView: {
        marginHorizontal: s(10),
        marginVertical: vs(15)
    },
    ItemName: {
        fontFamily: Font.SofiaProBold,
        color: colors.black,
        fontSize: 20,
    },
    ItemDescription: {
        fontFamily: Font.SofiaProMedium,
        fontSize: 15,
    },
    RatingHeaderView: {
        width: s(150),
        marginTop: vs(10),
        marginHorizontal: s(5),
        justifyContent: 'space-between',
        position: 'absolute',
        top: -5
    },
})
