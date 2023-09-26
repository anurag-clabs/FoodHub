import {StyleSheet} from 'react-native';
import {s, vs} from 'react-native-size-matters';
import {colors} from '../../utils/colors';
import {Font} from '../../utils/Fonts';
import {ms} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  BackgroundImg: {
    width: s(310),
    height: vs(150),
    borderRadius: 15,
  },
  mainView: {
    marginHorizontal: s(10),
    borderRadius: 20,
    backgroundColor: colors.white,
    shadowRadius: 4,
    shadowOpacity: 0.2,
    shadowColor: colors.DarkShadeGray,
    shadowOffset: {width: -2, height: 4},
    elevation: 5,
    marginBottom: 6,
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
  HeartIconView: {
    borderRadius: ms(30) / 2,
    backgroundColor: colors.orange,
    height: ms(32),
    width: ms(32),
    alignItems: 'center',
    justifyContent: 'center',
    // flexDirection: 'row',
  },
  priceTagTxt: {
    fontFamily: Font.SofiaProBold,
    color: colors.black,
    fontSize: 22,
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
  reviewTxtView: {
    borderRadius: ms(30) / 2,
    backgroundColor: colors.white,
    height: ms(32),
    width: ms(80),
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowColor: colors.orange,
    shadowOffset: {width: -2, height: 4},
    elevation: 5,
    position: 'absolute',
    bottom: -12,
    left: 15,
  },
  reviewTxt: {
    fontFamily: Font.SofiaProMedium,
    fontSize: 12,
    color: colors.black,
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
  DeliveryIcon: {
    resizeMode: 'contain',
    width: ms(20),
    height: ms(20),
    alignSelf: 'center',
  },
  Delivery: {
    fontFamily: Font.SofiaProRegular,
    fontSize: 16,
    alignSelf: 'center',
  },
  Box: {
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
  Food: {
    color: colors.RomanSilver,
    fontSize: 12,
  },
});
