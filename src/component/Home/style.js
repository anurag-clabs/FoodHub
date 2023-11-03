import {StyleSheet} from 'react-native';
import {Font} from '../../utils/Fonts';
import {s, vs, ms} from 'react-native-size-matters';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  constainer: {
    flex: 1,
  },
  HeaderView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    shadowColor: colors.DarkShadeGray,
    shadowOffset: {width: 0, height: 2},
    elevation: 5,
  },
  ImgView: {
    marginTop: vs(10),
    marginHorizontal: s(20),
  },
  BackImg: {
    resizeMode: 'contain',
  },
  TextHeader: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: vs(20),
  },
  Deliver: {
    marginHorizontal: 3,
    fontFamily: Font.SofiaProMedium,
    fontSize: 14,
    color: colors.darkgray,
  },
  header: {
    alignSelf: 'center',
    fontFamily: Font.SofiaProMedium,
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
    color: colors.darkNavy,
  },
  search: {
    height: ms(18),
    width: ms(18),
    tintColor: colors.search,
    marginHorizontal: vs(5),
  },
  textInputStyleView: {
    backgroundColor: colors.LightGrayishBlue,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.WhiteSmoke,
    borderWidth: 1,
    borderRadius: 10,
    fontFamily: Font.SofiaProMedium,
    height: vs(45),
    width: '80%',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: colors.DarkShadeGray,
    shadowOffset: {width: 0, height: 2},
    elevation: 1,
  },
  textInputBar: {
    fontFamily: Font.SofiaProRegular,
  },
  filetBtn: {
    marginLeft: s(12),
    height: ms(45),
    width: ms(45),
    backgroundColor: colors.LightGrayishBlue,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: colors.DarkShadeGray,
    shadowOffset: {width: 0, height: 2},
    elevation: 1,
  },
  filter: {
    height: vs(20),
    width: s(20),
    resizeMode: 'contain',
  },
  titleRestaurant: {
    marginHorizontal: s(20),
    fontFamily: Font.SofiaProBold,
    fontSize: 20,
    color: colors.darkNavy,
  },
  titleView: {
    flexDirection: 'row',
    marginHorizontal: s(10),
    alignItems: 'center',
  },
  ViewAll: {
    color: colors.orange,
    fontFamily: Font.SofiaProMedium,
    fontSize: 14,
  },
  OpenAero: {
    resizeMode: 'contain',
    height: vs(8),
    width: s(10),
  },
  SecondBoxElevation: {
    marginTop: vs(10),
    marginLeft: s(15),
    height: vs(230),
    width: s(280),
    backgroundColor: colors.white,
    borderRadius: 15,
    marginBottom: 6,
  },
  mainImg: {
    width: s(279),
    height: vs(130),
    resizeMode: 'cover',
  },
  rowSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Elevation: {
    marginTop: vs(10),
    marginLeft: s(15),
    height: vs(28),
    width: s(82),
    backgroundColor: colors.white,
    borderRadius: 30,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    position: 'relative',
  },
  Rating: {
    color: colors.black,
    fontFamily: Font.SofiaProMedium,
    fontSize: 13,
  },
  star: {
    resizeMode: 'contain',
    width: ms(14),
    height: ms(14),
    marginBottom: vs(4),
  },
  user: {
    color: colors.GreySuit,
    fontFamily: Font.SofiaProRegular,
    fontSize: 12,
  },
  Like: {
    width: ms(50),
    height: ms(50),
    marginTop: vs(5),
  },
  Restaurants: {
    fontFamily: Font.SofiaProBold,
    fontSize: 16,
    color: colors.black,
  },
  Verified: {
    resizeMode: 'contain',
    width: ms(12),
    height: ms(12),
  },
  DeliveryIcon: {
    resizeMode: 'contain',
    width: ms(20),
    height: ms(20),
    alignSelf: 'center',
  },
  Delivery: {
    fontFamily: Font.SofiaProRegular,
    fontSize: 16,
    alignSelf: 'center',
  },
  Box: {
    marginTop: vs(10),
    marginLeft: s(10),
    height: vs(28),
    width: s(72),
    backgroundColor: colors.WhiteSmoke,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  Food: {
    color: colors.RomanSilver,
    fontSize: 12,
  },
  ItemBox: {
    marginTop: vs(10),
    marginLeft: s(15),
    height: vs(100),
    width: s(140),
    marginBottom: 6,
  },
  PopularItemElevation: {
    marginTop: vs(10),
    marginLeft: s(5),
    height: vs(28),
    width: s(52),
    backgroundColor: colors.white,
    borderRadius: 30,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  ItemElevation: {
    marginTop: vs(40),
    marginLeft: s(8),
    height: vs(28),
    width: s(82),
    backgroundColor: colors.white,
    borderRadius: 30,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: colors.DarkShadeGray,
    shadowOffset: {width: 0, height: 2},
    elevation: 5,
  },
  ItemTitle: {
    marginTop: vs(20),
    fontFamily: Font.SofiaProBold,
    fontSize: 16,
    color: colors.black,
  },
  FoodName: {
    marginVertical: vs(10),
    marginTop: vs(5),
    fontFamily: Font.SofiaProRegular,
    fontSize: 16,
  },
  filterModalContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
