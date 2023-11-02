import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import { Font } from '../../utils/Fonts';
import { ms, s, vs } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  textInputTxt: {
    fontFamily: Font.SofiaProMedium,
    color: colors.GreySuit,
  },
  Btn: {
    position: 'absolute',
    bottom: 2
  },
});
