import {StyleSheet} from 'react-native';
import {Font} from '../../utils/Fonts';
import {s, vs, ms} from 'react-native-size-matters';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  constainer: {
    flex: 1,
  },
  BackImgView: {
    marginTop: vs(30),
    marginHorizontal: s(20),
    backgroundColor: colors.white,
    height: ms(40),
    width: ms(40),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    elevation: 5,
  },
  BackImg: {
    resizeMode: 'contain',
  },
});
