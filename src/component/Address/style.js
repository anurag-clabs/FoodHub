import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import { Font } from '../../utils/Fonts';
import { ms, s, vs } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  textInputTxt: {
    fontFamily: Font.SofiaProMedium,
    color: colors.GreySuit,
  },
  addressDataNameTxt: {
    fontSize: 16,
    fontFamily: Font.SofiaProSemiBold,
    color: colors.darkPrimaryColor
  },
  addressDataTxt: {
    width: '75%',
    fontSize: 16,
    fontFamily: Font.SofiaProRegular,
    color: colors.DimGray
  },
  numberText: {
    fontSize: 16,
    fontFamily: Font.SofiaProSemiBold,
    color: colors.darkPrimaryColor
  },
  editTxt: {
    fontSize: 16,
    fontFamily: Font.SofiaProMedium,
    color: colors.Blue,
  },
  editdelteTxt: {
    fontSize: 16,
    fontFamily: Font.SofiaProMedium,
    color: colors.errorColor,
  },
  Btn: {
    shadowOpacity: 0.5,
    shadowRadius: 4,
    shadowColor: colors.orange,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  addressBox: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: vs(10),
    backgroundColor: colors.white,
    borderColor: colors.lightGrey,
  },
  BackImgView: {
    
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  backImg: {
    tintColor: colors.black
  },
  addAddressBtn: {
    marginTop: vs(10),
    flexDirection: 'row',
    justifyContent: 'flex-end' 

  },
  deletebtn: {
    marginRight: s(20)
  },
  devider: {
    marginVertical: vs(10),
    // width: '30%',
    height: 0.7,
    backgroundColor: colors.lightGrey,
  },
});
