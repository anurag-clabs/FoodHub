import { View, Text, SafeAreaView, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { commonStyle } from '../../utils/commonStyles';
import { useNavigation } from '@react-navigation/native';
import { styles } from './style';
import { colors } from '../../utils/colors';
import { Button } from '../../common/Button/Button';
import { showMessage } from 'react-native-flash-message';
import { ChangePassword } from '../../redux/action/ChangePassword';
import { Header } from '../../common/Header/Header';

const ChangePasswordScreen = () => {
  const navigation = useNavigation();
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isCurrentPassFocused, setIsCurrentPassFocused] = useState(false);
  const [isNewPassFocused, setIsNewPassFocused] = useState(false);
  const [isConfirmPassFocused, setIsConfirmPassFocused] = useState(false);

  const handleCurrentPassFocus = () => {
    setIsCurrentPassFocused(true);
    setIsNewPassFocused(false);
    setIsConfirmPassFocused(false);
  };

  const handleNewPassFocus = () => {
    setIsCurrentPassFocused(false);
    setIsNewPassFocused(true);
    setIsConfirmPassFocused(false);
  };

  const handleConfirmPassFocus = () => {
    setIsCurrentPassFocused(false);
    setIsNewPassFocused(false);
    setIsConfirmPassFocused(true);
  };

  const handleChangePassword = async () => {
    try {
      const changePassword = {
        oldPassword: oldPassword,
        newPassword: newPassword,
        confirmPassword: confirmPassword,
      };
      const response = await ChangePassword(changePassword);
      if (response) {
        console.log('password Change successful');
        navigation.goBack();
      } else {
        console.log('changePassword failed');
      }
    } catch (error) {
      console.error('changePassword error:', error);
    }
  };

  return (
    <SafeAreaView style={commonStyle.constainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header Text={'Change Password'} onPress={() => navigation.goBack()} />
        <View style={[commonStyle.m_20, commonStyle.mV15]}>
          <Text style={styles.textInputTxt}>Current Password</Text>
          <TextInput
            onFocus={handleCurrentPassFocus}
            style={isCurrentPassFocused ? [styles.textInputStyle, styles.focusedTextInput] : styles.textInputStyle}
            placeholderTextColor={colors.RomanSilver}
            placeholder="Add Password"
            value={oldPassword}
            onChangeText={text => setOldPassword(text)}
          />
          <Text style={styles.textInputTxt}>New Password</Text>
          <TextInput
            onFocus={handleNewPassFocus}
            placeholderTextColor={colors.RomanSilver}
            style={isNewPassFocused ? [styles.textInputStyle, styles.focusedTextInput] : styles.textInputStyle}
            placeholder="Add New Password"
            value={newPassword}
            onChangeText={text => setNewPassword(text)}
          />
          <Text style={styles.textInputTxt}>Confirm Password</Text>
          <TextInput
            onFocus={handleConfirmPassFocus}
            placeholderTextColor={colors.RomanSilver}
            style={isConfirmPassFocused ? [styles.textInputStyle, styles.focusedTextInput] : styles.textInputStyle}
            placeholder="Add Confirm Password"
            value={confirmPassword}
            onChangeText={text => setConfirmPassword(text)}
          />
        </View>
      </ScrollView>
      <Button
        style={[styles.btn, commonStyle.orangeShadow]}
        color={colors.orange}
        buttonName="SAVE"
        onPress={() => handleChangePassword()}
      />
    </SafeAreaView>
  );
};

export default ChangePasswordScreen;
