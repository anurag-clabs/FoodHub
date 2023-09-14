import {Platform, StyleSheet} from 'react-native';
import {ms, s, vs} from 'react-native-size-matters';
import { Font } from '../../utils/Fonts';
import { colors } from '../../utils/colors';

export const Styles = StyleSheet.create({
  Button: {
    height: vs(45),
    width: s(220),
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: vs(20),
    borderRadius: 25,
  },
  TextButton: {
    fontSize: 15,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center',
    fontFamily: Font.sofiaProMedium
  },
  BackImgView: {
    backgroundColor: colors.white,
    height: ms(40),
    width: ms(40),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    elevation: 5,
},
});
