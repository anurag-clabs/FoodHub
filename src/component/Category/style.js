import {StyleSheet} from 'react-native';
import {ms, s, vs} from 'react-native-size-matters';
import {Font} from '../../utils/Fonts';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  BackImgView: {
    marginTop: vs(20),
    marginHorizontal: s(20),
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Fast: {
    fontFamily: Font.SofiaProBold,
    fontSize: 45,
    color: colors.Fast,
  },
  Food: {
    fontFamily: Font.SofiaProBold,
    fontSize: 52,
    color: colors.orange,
    marginTop: vs(10),
  },
  BackGroundImg: {
    height: vs(270),
    width: s(230),
    right: 13,
  },
  PizzaType: {
    fontFamily: Font.sofiaProMedium,
    fontSize: 17,
    color: colors.GreySuit,
    marginTop: vs(10),
  },
  filter: {
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  Aero: {
    height: ms(10),
    width: ms(10),
    resizeMode: 'contain',
    marginBottom: s(8),
  },
  HeaderView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: s(20),
  },
  title: {
    fontFamily: Font.sofiaProMedium,
    fontSize: 18,
    color: colors.black,
    marginBottom: s(20),
  },
  Popular: {
    fontFamily: Font.sofiaProMedium,
    fontSize: 20,
    marginBottom: s(20),
    color: colors.orange,
  },
});
