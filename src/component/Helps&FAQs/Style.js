import {StyleSheet} from 'react-native';
import {ms, s, vs} from 'react-native-size-matters';
import {Font} from '../../utils/Fonts';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    marginHorizontal: s(20),
    marginTop: vs(15),
  },
  headerText: {
    color: colors.black,
    fontFamily: Font.SofiaProSemiBold,
    fontSize: 25,
    marginBottom: vs(5),
  },
  description: {
    color: colors.black,
    fontFamily: Font.SofiaProRegular,
    fontSize: 15,
    marginBottom: vs(5),
  },
  contectBtn: {
    color: colors.black,
    fontFamily: Font.SofiaProRegular,
    fontSize: 18,
  },
  search: {
    height: ms(18),
    width: ms(18),
    tintColor: colors.search,
    marginHorizontal: vs(5),
  },
  textInputStyleView: {
    height: vs(45),
    backgroundColor: colors.LightGrayishBlue,
    flexDirection: 'row',
    alignItems: 'center',
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
  conditionTxt: {
    color: colors.black,
    fontFamily: Font.SofiaProRegular,
    fontSize: 16,
    marginHorizontal: s(10),
    marginVertical: vs(15),
  },
  conditionDataTxt: {
    color: colors.black,
    fontFamily: Font.SofiaProRegular,
    fontSize: 15,
    marginHorizontal: s(10),
    marginVertical: vs(15),
  },
  termsView: {
    backgroundColor: colors.LightGrayishBlue,
    borderColor: colors.WhiteSmoke,
    borderWidth: 1,
    borderRadius: 10,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: colors.DarkShadeGray,
    shadowOffset: {width: 0, height: 2},
    elevation: 2,
  },
  termsDataView: {
    backgroundColor: colors.whiteGrey,
    borderColor: colors.WhiteSmoke,
    borderWidth: 1,
    borderRadius: 10,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: colors.DarkShadeGray,
    shadowOffset: {width: 0, height: 2},
    elevation: 1,
  },
});
