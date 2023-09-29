import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {Font} from '../../utils/Fonts';
import {s, vs, ms} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  titleView: {
    height: vs(50),
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.DimGray,
    marginVertical: vs(10),
    justifyContent: 'space-between',
  },
  title: {
    color: colors.black,
    marginHorizontal: 20,
    fontFamily: Font.SofiaProMedium,
    fontSize: 20,
  },
  OpenAero: {
    height: ms(15),
    width: ms(15),
    tintColor: colors.lightGrey,
    resizeMode: 'contain',
    marginHorizontal: 15,
  },
});
