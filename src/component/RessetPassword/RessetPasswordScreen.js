import React, { useState } from 'react';
import { View, Text, ImageBackground, TextInput, SafeAreaView } from 'react-native';
import { styles } from './style';
import { images } from '../../utils/image';
import { commonStyle } from '../../utils/commonStyles';
import { BackButton, Button } from '../../common/Button/Button';
import { colors } from '../../utils/colors';
import { useNavigation } from '@react-navigation/native';
import { ForgotPassword } from '../../redux/action/ForgotPassword';

const RessetPasswordScreen = () => {

  const navigation = useNavigation()
  const [email, setEmail] = useState('');
  const [loader, setLoader] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
 
  const handleEmailFocus = () => {
    setIsEmailFocused(true);
    };

  const handleForgotPassword = async () => {
    try {
      const passwordData = {
        email: email,
      };
      setLoader(true)
      const response = await ForgotPassword(passwordData);
      setLoader(false)
      if (response) {        
        console.log('password successful', response);
        navigation.navigate('Login');
      } else {
        setLoader(false)
        console.log('passwordData failed');
      }
    } catch (error) {
      setLoader(false)
      console.error('passwordData error:', error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={images.commonBackGround} style={commonStyle.backGroundImg}>
      <BackButton
        style={styles.BackImgView}
          onPress={() => navigation.goBack()}
        />
        <View style={[commonStyle.m_20, commonStyle.mV20]}>
          <Text style={styles.headerTxt}>Resset Password</Text>
          <Text style={styles.textInputTxt}>Please enter your email address to request a password reset</Text>
          <TextInput
          onFocus={handleEmailFocus}
          style={isEmailFocused ? [styles.textInputStyle, styles.focusedTextInput] : styles.textInputStyle}
            placeholder='Your email'
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <Button
          color={colors.orange}
          buttonName="Send new password"
          onPress={() => handleForgotPassword()}
          loading={loader}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

export default RessetPasswordScreen;