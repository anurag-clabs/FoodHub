import {Dimensions, Platform, StyleSheet} from 'react-native';
import {ms, s, vs} from 'react-native-size-matters';
import {Font} from './Fonts';
import {colors} from './colors';

export const commonStyle = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowSpace: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  alignCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  m_20: {
    marginHorizontal: s(20),
  },
  mV20: {
    marginVertical: vs(20),
  },
  v_10: {
    marginVertical: vs(10),
  },
  mV5: {
    marginVertical: vs(5),
  },
  dropdown: {
    height: vs(55),
    width: Dimensions.get('screen').width / 1.2,
  },
  BoxText: {
    paddingLeft: 10,
    fontFamily: Font.SofiaProMedium,
  },
  DownArrow: {
    width: ms(30),
    height: ms(30),
    tintColor: colors.black,
  },
  Boxs: {
    marginVertical: vs(10),
    borderColor: colors.lightGrey,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: vs(20),
  },
  backGroundImg: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  ImageStyle: {
    height: ms(15),
    width: ms(15),
    resizeMode: 'contain',
  },
  textInputStyle: {
    marginVertical: vs(10),
    borderColor: colors.lightGrey,
    borderWidth: 1,
    borderRadius: 10,
    fontFamily: Font.SofiaProMedium,
    padding: 12,
    height: vs(55),
    marginBottom: vs(20),
  },
  focusedTextInput: {
    marginVertical: vs(10),
    borderWidth: 1,
    borderRadius: 10,
    fontFamily: Font.SofiaProMedium,
    padding: 12,
    height: vs(55),
    marginBottom: vs(20),
    borderColor: colors.orange,
  },
  headerImg: {
    height: ms(40),
    width: ms(40),
    resizeMode: 'contain',
    borderRadius: ms(35) / 4,
  },
  f_D_R: {
    flexDirection: 'row',
    marginTop: vs(10),
    marginLeft: s(12),
  },
  input: {
    width: ms(300),
    color: colors.black,
    fontFamily: Font.SofiaProMedium,
    padding: 10,
    marginVertical: vs(5),
  },
  mT10: {
    marginTop: Platform.OS === 'ios' ? vs(5) : vs(10),
  },
  mH15: {
    marginHorizontal: s(15),
  },
  mV15: {
    marginVertical: vs(15),
  },
  mV25: {
    marginVertical: vs(25),
  },
  mT30: {
    marginTop: vs(30),
  },
  mT20: {
    marginTop: vs(20),
  },
  mB10: {
    marginBottom: vs(10)
  },
  mB15: {
    marginBottom: vs(15)
  },
  mB30: {
    marginBottom: vs(30),
  },
  mB40: {
    marginBottom: vs(40),
  },
  flexRow: {
    flexDirection: 'row',
  },
  pH10: {
    paddingHorizontal: s(10)
  },
  iconView: {
    width: ms(30),
    height: ms(30),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  icon: {
    width: ms(24),
    height: ms(24),
    resizeMode: 'contain',
  },
  blackShadow: {
    shadowColor: colors.black,
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2, 
  },
  orangeShadow: {
    shadowColor: colors.orange,
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5, 
  },

});
