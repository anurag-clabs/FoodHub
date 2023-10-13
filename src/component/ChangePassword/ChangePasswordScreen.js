import {View, Text, SafeAreaView, TextInput, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {commonStyle} from '../../utils/commonStyles';
import {useNavigation} from '@react-navigation/native';
import {styles} from './style';
import {colors} from '../../utils/colors';
import {Button} from '../../common/Button/Button';
import {showMessage} from 'react-native-flash-message';
import {ChangePassword} from '../../redux/action/ChangePassword';
import {Header} from '../../common/Header/Header';

const ChangePasswordScreen = () => {
  const navigation = useNavigation();
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  let msg = {
    type: 'info',
    backgroundColor: colors.errorColor,
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
        showMessage({
          ...msg,
          message: response.message,
        });
        navigation.navigate('Drawer');
      } else {
        console.log('changePassword failed');
      }
    } catch (error) {
      console.error('changePassword error:', error);
      showMessage({
        message: 'An error occurred while Change password',
        type: 'error',
        backgroundColor: colors.errorColor,
      });
    }
  };

  return (
    <SafeAreaView style={commonStyle.constainer}>
      <ScrollView>
        <Header Text={'Change Password'} onPress={() => navigation.goBack()} />
        <View style={[commonStyle.m_20]}>
          <Text style={styles.textInputTxt}>Current Password</Text>
          <TextInput
            style={
              isAddPasswordFocused
                ? [styles.textInputStyle, styles.focusedTextInput]
                : styles.textInputStyle
            }
            placeholderTextColor={colors.RomanSilver}
            placeholder="Add Password"
            value={oldPassword}
            onChangeText={text => setOldPassword(text)}
          />
          <Text style={styles.textInputTxt}>New Password</Text>
          <TextInput
            placeholderTextColor={colors.RomanSilver}
            style={
              isAddNewPasswordFocused
                ? [styles.textInputStyle, styles.focusedTextInput]
                : styles.textInputStyle
            }
            placeholder="Add New Password"
            value={newPassword}
            onChangeText={text => setNewPassword(text)}
          />
          <Text style={styles.textInputTxt}>Confirm Password</Text>
          <TextInput
            placeholderTextColor={colors.RomanSilver}
            style={
              isConfirmPasswordFocused
                ? [styles.textInputStyle, styles.focusedTextInput]
                : styles.textInputStyle
            }
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
