import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {Font} from '../../utils/Fonts';
import {s, vs, ms} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  textInputTxt: {
    fontFamily: Font.SofiaProMedium,
    marginTop: vs(20),
    fontSize: 20,
    color: colors.LightSlateGrey,
  },
  textInputStyle: {
    fontSize: 20,
    marginVertical: vs(10),
    borderColor: colors.lightGrey,
    borderWidth: 1,
    borderRadius: 10,
    fontFamily: Font.SofiaProMedium,
    padding: 12,
    height: vs(55),
  },
  btn: {
    position: 'relative',
    bottom: 20
  },
});
