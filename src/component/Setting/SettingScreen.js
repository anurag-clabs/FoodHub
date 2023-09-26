import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {images} from '../../utils/image';
import {TitleHeader} from '../../common/Button/Button';
import {commonStyle} from '../../utils/commonStyles';
import {styles} from './style';
import {Setting} from '../../common/Data/Data';
import {colors} from '../../utils/colors';
import {vs} from 'react-native-size-matters';

const SettingScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={commonStyle.constainer}>
      <TitleHeader
        title={'Setting'}
        source={images.BackImg}
        onPress={() => navigation.goBack()}
      />
      <View style={[commonStyle.m_20, {marginTop: vs(30)}]}>
        {Setting.map(item => {
          return (
            <View style={styles.titleView}>
              <Text style={styles.title}>{item.title}</Text>
              <TouchableOpacity
                onPress={() => {
                  item.title === 'Change Password'
                    ? navigation.navigate('ChangePassword')
                    : null;
                  item.title === 'Contact Us'
                    ? navigation.navigate('Contact')
                    : null;
                }}>
                <Image
                  source={item.aero}
                  style={[styles.OpenAero, {tintColor: colors.black}]}
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default SettingScreen;
