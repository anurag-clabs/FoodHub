import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {ms, s, vs} from 'react-native-size-matters';
import {Font} from '../../utils/Fonts';

export const styles = StyleSheet.create({
  textInputStyleView: {
    height: vs(45),
    backgroundColor: colors.LightGrayishBlue,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  search: {
    height: ms(18),
    width: ms(18),
    resizeMode: 'contain',
    tintColor: colors.search,
    marginHorizontal: vs(5),
  },
  headerText: {
    color: colors.black,
    fontFamily: Font.SofiaProSemiBold,
    fontSize: 22,
    // marginBottom: vs(5)
  },
});
