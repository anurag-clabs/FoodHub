import { StyleSheet } from 'react-native';
import { ms, s, vs } from 'react-native-size-matters';
import { Font } from '../../utils/Fonts';
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  BackImgView: {
    marginTop: vs(20),
    marginHorizontal: s(20),
  },
  ProfileView: {
    marginTop: vs(25),
    alignItems: 'center',
  },
  ProfileImgView: {
    backgroundColor: colors.white,
    height: ms(110),
    width: ms(110),
    borderRadius: ms(110) / 2,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowColor: '#ffff99',
    shadowOffset: { width: 0, height: 2 },
    elevation: 10,
  },
  ProfileImage: {
    height: '85%',
    width: '85%',
    borderRadius: 80,
    resizeMode: 'contain',
  },
  headerTxt: {
    fontFamily: Font.SofiaProBold,
    fontSize: 36,
    color: colors.black,
    marginVertical: vs(30),
  },
  textInputTxt: {
    fontFamily: Font.SofiaProMedium,
    color: colors.GreySuit,
  },
  CameraView: {
    alignSelf: 'center',
    backgroundColor: colors.white,
    height: '25%',
    width: '25%',
    borderRadius: 80,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
    position: 'absolute',
    bottom: 10,
    right: 0,
  },
  profileText: {
    alignSelf: 'center',
    color: colors.black,
    fontSize: 18,
    fontFamily: Font.SofiaProBold,
    marginTop: vs(10),
  },
  editProfileTxt: {
    fontFamily: Font.SofiaProRegular,
    color: colors.GreySuit,
  },
});
