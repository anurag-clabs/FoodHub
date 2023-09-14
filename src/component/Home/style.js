import {StyleSheet} from 'react-native';
import {Font} from '../../utils/Fonts';
import {s, vs, ms} from 'react-native-size-matters';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    // backgroundColor: 'grey',
  },
  HeaderView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  BackImgView: {
    marginTop: vs(10),
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
  ImgView: {
    marginTop: vs(10),
    marginHorizontal: s(20),
  },
  BackImg: {
    resizeMode: 'contain',
  },
  Img: {
    height: ms(40),
    width: ms(40),
    borderRadius: 10,
  },
  TextHeader: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: vs(20),
  },
  Deliver: {
    marginHorizontal: 3,
    fontFamily: Font.sofiaProMedium,
    fontSize: 14,
    color: colors.darkgray,
  },
  header: {
    alignSelf: 'center',
    fontFamily: Font.sofiaProMedium,
    color: colors.orange,
    fontSize: 15,
  },
  HeaderAero: {
    resizeMode: 'contain',
    height: vs(8),
    width: s(10),
    alignSelf: 'center',
  },
  titleHeader: {
    marginHorizontal: s(20),
    marginTop: vs(20),
    fontFamily: Font.SofiaProBold,
    fontSize: 30,
    color: '#323643',
  },
  search: {
    height: ms(18),
    width: ms(18),
    tintColor: '#767F9D',
    marginTop: vs(5),
    marginHorizontal: vs(5),
  },
  textInputStyle: {
    backgroundColor: '#FCFCFD',
    flexDirection: 'row',
    marginVertical: vs(20),
    borderColor: '#EFEFEF',
    borderWidth: 1,
    borderRadius: 10,
    fontFamily: Font.sofiaProMedium,
    padding: 10,
    height: vs(45),
    width: '65%',
    marginHorizontal: vs(15),
  },
  filter: {
    marginTop: vs(8),
    resizeMode: 'contain',
  },
  boxElevation: {
    marginLeft: s(10),
    height: vs(110),
    width: s(72),
    backgroundColor: '#FE724C',
    borderRadius: 80 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: ms(55),
    height: ms(55),
    borderRadius: 30,
    resizeMode: 'cover',
    marginBottom: vs(20),
  },
  name: {
    color: '#67666D',
    fontSize: 14,
    fontFamily: Font.sofiaProMedium,
  },
});
