import {StyleSheet} from 'react-native';
import {ms, s, vs} from 'react-native-size-matters';
import {colors} from '../../utils/colors';
import {Font} from '../../utils/Fonts';

export const styles = StyleSheet.create({
  backgroundImg: {
    width: 'auto',
    height: vs(180),
    resizeMode: 'contain',
  },
  headerView: {
    marginTop: vs(20),
  },
  headerTxt: {
    fontFamily: Font.SofiaProSemiBold,
    fontSize: 30,
    color: colors.black,
  },
  backImgView: {
    marginTop: vs(10),
    marginHorizontal: s(10),
  },
  heartIconView: {
    borderRadius: ms(30) / 2,
    backgroundColor: colors.orange,
    height: ms(32),
    width: ms(32),
    alignItems: 'center',
    justifyContent: 'center',
  },
  reviewTxt: {
    fontFamily: Font.SofiaProMedium,
    fontSize: 15,
    color: colors.black,
  },
  seeReviewTxt: {
    fontFamily: Font.SofiaProMedium,
    fontSize: 15,
    color: colors.orange,
    textDecorationLine: 'underline',
  },
  priceView: {
    alignItems: 'flex-end',
  },
  dolorSign: {
    marginBottom: vs(5),
    color: colors.black,
    fontSize: 15,
    fontFamily: Font.SofiaProSemiBold,
  },
  priceTxt: {
    fontFamily: Font.SofiaProSemiBold,
    fontSize: 30,
    color: colors.orange,
  },
  itemName: {
    fontFamily: Font.SofiaProSemiBold,
    color: colors.black,
    fontSize: 20,
  },
  foodDetail: {
    fontSize: 15,
    fontFamily: Font.SofiaProRegular,
  },
  choiceTxt: {
    fontFamily: Font.SofiaProSemiBold,
    fontSize: 20,
    color: colors.black,
  },
  ingredientTxt: {
    marginLeft: s(10),
    fontFamily: Font.SofiaProMedium,
    fontSize: 16,
    color: colors.black,
  },
  ingredientPrice: {
    marginRight: s(10),
    fontFamily: Font.SofiaProMedium,
    fontSize: 16,
    color: colors.black,
  },
  ingredientImg: {
    height: vs(40),
    width: s(44),
    resizeMode: 'contain',
  },
  filledImg: {
    height: ms(22),
    width: ms(22),
    tintColor: colors.orange,
    resizeMode: 'contain',
  },
  blankImg: {
    height: ms(22),
    width: ms(22),
    tintColor: colors.lightGrey,
    resizeMode: 'contain',
  },
  btnView: {
    marginTop: vs(25),
    possition: 'abolute',
  },
});
