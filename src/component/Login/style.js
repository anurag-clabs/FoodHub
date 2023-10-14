import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {Font} from '../../utils/Fonts';
import {s, vs, ms} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  constainer: {
    flex: 1,
  },
  BackImgView: {
    marginTop: vs(30),
    marginHorizontal: s(20),
  },
  BackImg: {
    height: ms(15),
    width: ms(15),
    resizeMode: 'contain',
  },
  headerTxt: {
    fontFamily: Font.SofiaProBold,
    fontSize: 36,
    color: colors.black,
    marginTop: vs(30),
  },
  textInputTxt: {
    fontFamily: Font.SofiaProMedium,
  },
  toggleTxt: {
    fontSize: 18,
    fontFamily: Font.SofiaProMedium,
  },
  activeToggleTxt: {
    color: colors.orange
  },
  toggleBtn: {
    height: vs(40),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderRadius: 25,
    width: '45%',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 2},
    elevation: 3,
  },
  textInputStyle: {
    fontSize: 18,
    marginVertical: vs(10),
    borderColor: colors.lightGrey,
    borderWidth: 1,
    borderRadius: 10,
    fontFamily: Font.SofiaProMedium,
    padding: 12,
    height: vs(55),
  },
  focusedTextInput: {
    borderColor: colors.orange,
  },
  passwordInputStyle: {
    fontSize: 18,
  },
  hidePassword: {
    height: ms(18),
    width: ms(18),
    tintColor: colors.lightGrey,
    resizeMode: 'contain',
  },
  passwordView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.lightGrey,
    marginVertical: vs(10),
  },
  FocuspasswordView: {
    borderColor: colors.orange,
},
  input: {
    width: ms(300),
    color: colors.lightGrey,
  },
  bottomSignUpTxtView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomSignUpTxt: {
    fontFamily: Font.SofiaProMedium,
    fontSize: 15,
    color: colors.grey,
  },
  bottomSignUpTxt2: {
    fontFamily: Font.SofiaProMedium,
    fontSize: 15,
    color: colors.orange,
  },
  lineView: {
    marginHorizontal: s(30),
    marginVertical: vs(15),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  devider: {
    width: '30%',
    height: 0.6,
    backgroundColor: colors.grey,
  },
  deviderTxt: {
    fontFamily: Font.SofiaProMedium,
    fontSize: 15,
    color: colors.grey,
  },
  bottomView: {
    position: 'absolute',
    bottom: vs(30),
    left: 0,
    right: 0,
  },
  iconView: {
    marginVertical: vs(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconBtn: {
    backgroundColor: colors.white,
    borderRadius: 25,
    width: '45%',
  },
  iconImg: {
    height: ms(25),
    width: ms(25),
    margin: ms(14),
    resizeMode: 'contain',
  },
  iconTxt: {
    fontFamily: Font.SofiaProMedium,
    color: colors.black,
    fontSize: 15,
  },
  forgotTxt: {
    color: colors.orange,
    fontFamily: Font.SofiaProMedium,
    textAlign: 'center',
    fontSize: 16,
    marginTop: vs(15),
  },
  toggleView: {
    marginVertical: vs(25),
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },
  roundedTextInput: {
    height: 45,
    width: 45,
    borderRadius: 10,
    borderWidth: 1,
    fontFamily: Font.SofiaProMedium,
    color: colors.orange,
    fontSize: 20,
    borderBottomWidth: 1
},
});
