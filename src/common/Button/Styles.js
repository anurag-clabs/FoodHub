import {Platform, StyleSheet} from 'react-native';
import {s, vs} from 'react-native-size-matters';
import { Font } from '../../utils/Fonts';

export const Styles = StyleSheet.create({
  Button: {
    height: vs(45),
    width: s(220),
    backgroundColor: 'green',
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
});
