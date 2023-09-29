import {StyleSheet} from 'react-native';
import {ms, s, vs} from 'react-native-size-matters';
import {colors} from '../../utils/colors';
import {Font} from '../../utils/Fonts';

export const styles = StyleSheet.create({
  TextInputTxt: {
    fontFamily: Font.SofiaProMedium,
    color: colors.GreySuit,
  },
  Btn: {
    shadowOpacity: 0.5,
    shadowRadius: 4,
    shadowColor: colors.orange,
    shadowOffset: {width: -2, height: 5},
    elevation: 10,
  },
});
