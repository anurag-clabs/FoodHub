import {View, Text, SafeAreaView, TextInput} from 'react-native';
import React from 'react';
import {TitleHeader} from '../Button/Button';
import {commonStyle} from '../../utils/commonStyles';
import {images} from '../../utils/image';
import {useNavigation} from '@react-navigation/native';
import {styles} from './style';
import {colors} from '../../utils/colors';

const ChangePasswordScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={commonStyle.constainer}>
      <TitleHeader
        title={'Change Password'}
        source={images.BackImg}
        onPress={() => navigation.goBack()}
      />
      <View style={[commonStyle.m_20, {marginVertical: 20}]}>
        <Text style={styles.textInputTxt}>Current Password</Text>
        <TextInput
          style={styles.textInputStyle}
          placeholderTextColor={colors.RomanSilver}
          placeholder="Add Password"
        />
        <Text style={styles.textInputTxt}>New Password</Text>
        <TextInput
          placeholderTextColor={colors.RomanSilver}
          style={styles.textInputStyle}
          placeholder="Add New Password"
        />
        <Text style={styles.textInputTxt}>Confirm Password</Text>
        <TextInput
          placeholderTextColor={colors.RomanSilver}
          style={styles.textInputStyle}
          placeholder="Add Confirm Password"
        />
      </View>
    </SafeAreaView>
  );
};

export default ChangePasswordScreen;
