import { Platform, StyleSheet } from 'react-native';
import { ms, s, vs } from 'react-native-size-matters';
import { Font } from '../../utils/Fonts';
import { colors } from '../../utils/colors';

export const Styles = StyleSheet.create({
  Button: {
    height: vs(45),
    width: s(220),
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: vs(10),
    borderRadius: 25,
    shadowColor: colors.black,
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  TextButton: {
    fontSize: 15,
    color: colors.white,
    textAlign: 'center',
    fontFamily: Font.SofiaProMedium,
  },
  ButtonTxt: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: Font.SofiaProMedium,
  },
  BackImgView: {
    backgroundColor: colors.white,
    height: ms(40),
    width: ms(40),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    shadowColor: colors.black,
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  menuView: {
    zIndex: 1,
    position: 'absolute',
    top: 0,
    borderRadius: 10,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: s(18),
    height: ms(40),
    width: ms(40),
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  menuTitle: {
    fontSize: 22,
    fontFamily: Font.SofiaProBold,
    textAlign: 'center',
    marginTop: Platform.OS === 'ios' ? vs(10) : vs(5),
    color: colors.darkPrimaryColor,
  },
  buttonView: {
    height: vs(40),
    width: s(120),
    justifyContent: 'center',
    borderRadius: 25,
  },
});
