import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {commonStyle} from '../../utils/commonStyles';
import {styles} from './style';
import {Setting} from '../../common/Data/Data';
import {colors} from '../../utils/colors';
import { Header } from '../../common/Header/Header';

const SettingScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={commonStyle.constainer}>
      <Header
        Text={'Setting'}
        onPress={() => navigation.goBack()}
      />
      <View style={[commonStyle.m_20, commonStyle.mT20]}>
        {Setting.map(item => {
          return (
              
              <TouchableOpacity
              key={item.Id}
              style={styles.titleView}
                onPress={() => {
                  item.title === 'Edit Profile'
                    ? navigation.navigate('Edit-Profile')
                    : null;
                  item.title === 'Change Password'
                    ? navigation.navigate('ChangePassword')
                    : null;
                  item.title === 'Contact Us'
                    ? navigation.navigate('Contact')
                    : null;
                }}>
                  <Text style={styles.title}>{item.title}</Text>
                <Image
                  source={item.aero}
                  style={[styles.OpenAero, {tintColor: colors.black}]}
                />
              </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default SettingScreen;
