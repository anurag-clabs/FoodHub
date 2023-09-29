import {StyleSheet} from 'react-native';
import {s, vs} from 'react-native-size-matters';
import {colors} from '../../utils/colors';
import {Font} from '../../utils/Fonts';
import {ms} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  contact: {
    fontSize: 16,
    fontFamily: Font.SofiaProMedium,
    margin: ms(10),
    width: ms(265),
    color: colors.black,
  },
  iconeStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    bottom: vs(40),
    position: 'absolute',
    left: s(5),
    right: s(5),
  },
  icon: {
    height: ms(25),
    width: ms(25),
    resizeMode: 'contain',
    margin: ms(20),
  },
});
