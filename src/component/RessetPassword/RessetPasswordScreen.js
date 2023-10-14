import { View, Text, ImageBackground, TouchableOpacity, Image, TextInput, SafeAreaView } from 'react-native'
import React from 'react'
import { styles } from './style';
import { images } from '../../utils/image';
import { commonStyle } from '../../utils/commonStyles';
import { BackButton, Button } from '../../common/Button/Button';
import { colors } from '../../utils/colors';
import { useNavigation } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message';
import { ForgotPassword } from '../../redux/action/ForgotPassword';
import { useState } from 'react';

const RessetPasswordScreen = () => {

  const navigation = useNavigation()
  const [email, setEmail] = useState('');
  const [isEmailFocused, setIsEmailFocused] = useState(false);

  let msg = {
    type: 'info',
    backgroundColor: colors.errorColor,
  };

  const handleEmailFocus = () => {
    setIsEmailFocused(true);
    };

  const handleForgotPassword = async () => {
    try {
      const passwordData = {
        email: email,
      };
      const response = await ForgotPassword(passwordData);
      if (response) {
        console.log('password successful');
        showMessage({
          ...msg,
          message: response.message,
        });
        console.log('passwordData', response);
        navigation.navigate('Login');
      } else {
        console.log('passwordData failed');
      }
    } catch (error) {
      console.error('passwordData error:', error);
      showMessage({
        message: 'An error occurred while password Enter',
        type: 'error',
        backgroundColor: colors.errorColor,
      });
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={images.commonBackGround} style={commonStyle.backGroundImg}>
      <BackButton
        style={styles.BackImgView}
          onPress={() => navigation.goBack()}
        />
        <View style={[commonStyle.m_20, { marginVertical: 20 }]}>
          <Text style={styles.headerTxt}>Resset Password</Text>
          <Text style={styles.textInputTxt}>Please enter your email address to request a password reset</Text>
          <TextInput
          onFocus={handleEmailFocus}
          style={isEmailFocused ? [styles.textInputStyle, styles.focusedTextInput] : styles.textInputStyle}
            placeholder='Your email or phone'
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <Button
          color={colors.orange}
          buttonName="Send new password"
          onPress={() => handleForgotPassword()}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

export default RessetPasswordScreen;