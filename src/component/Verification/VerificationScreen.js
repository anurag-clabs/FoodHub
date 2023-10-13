import { View, Text, ImageBackground, TextInput, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import React, { useRef, useState } from 'react'
import { styles } from './style';
import { images } from '../../utils/image';
import { commonStyle } from '../../utils/commonStyles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { colors } from '../../utils/colors';
import OTPTextView from 'react-native-otp-textinput';
import { BackButton, Button } from '../../common/Button/Button';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import { apiInstance } from '../../httpclient/httpclient';
import AsyncStorage from '@react-native-async-storage/async-storage';

const VerificationScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const signupData = route?.params?.data?.user;
  const numberOtp = route?.params?.code || '';
  const loginData = route?.params?.loginNumber
// console.log('loginData', loginData);

  const [enteredOTP, setEnteredOTP] = useState('');
  const [isOTPVerified, setIsOTPVerified] = useState(false);

  let msg = {
    type: 'info',
    backgroundColor: colors.errorColor,
  };

  const verifyEmail = async (email, verifyCode) => {
    try {
      const res = await apiInstance.post('verify', {
        email: email,
        verificationCode: verifyCode,
      });
      return res.data;
    } catch (err) {
      console.log(' verifyEmail -=-=-=-=-=-=  err: ', err);
      showMessage({
        ...msg,
        message: err.response.data.message,
        duration: 2000,
      });
      return null;
    }
  };

  const verifyPhoneNumber = async (phoneNumber, verifyCode, loginNumber) => {
    try {
      const res = await apiInstance.post('verifyNumber', {
        phoneNumber: phoneNumber || loginNumber,
        verificationCode: verifyCode,
      });
      return res.data;
    } catch (err) {
      console.log(' verifyPhoneNumber -=-=-=-=-=-=  err: ', err);
      showMessage({
        ...msg,
        message: err.response.data.message,
        duration: 2000,
      });
      return null;
    }
  };

  const handleOTPVerification = async () => {
    if (numberOtp?.phoneNumber || loginData?.phoneNumber) {
      const result = await verifyPhoneNumber(numberOtp?.phoneNumber || loginData?.phoneNumber, enteredOTP);
      if (result) {
        setIsOTPVerified(true);
        navigation.navigate('Drawer');
      }
    } else if (signupData?.email) {
      const result = await verifyEmail(signupData?.email, enteredOTP);
      if (result) {
        setIsOTPVerified(true);
        navigation.navigate('Login');
      }
    }
  };

  return (
    <SafeAreaView style={styles.constainer}>
      <ImageBackground source={images.commonBackGround} style={commonStyle.backGroundImg}>
        <BackButton
          style={styles.BackImgView}
          onPress={() => navigation.goBack()}
        />
        <View style={[commonStyle.m_20, { marginVertical: 20 }]}>
          <Text style={styles.headerTxt}>Verification Code</Text>
          <Text style={styles.textInputTxt}>Please type the verification code sent to {signupData?.email}{numberOtp?.phoneNumber} </Text>
          <View style={styles.otpView}>
            <OTPTextView
              inputCount={6}
              autoFocus
              keyboardType="numeric"
              containerStyle={styles.textInputContainer}
              handleTextChange={(text) => setEnteredOTP(text)}
              textInputStyle={styles.roundedTextInput}
              tintColor={colors.orange}
            />
          </View>
          <View style={commonStyle.alignCenter}>
            <View style={styles.bottomSignUpTxtView}>
              {isOTPVerified ? (
                <Text style={styles.bottomSignUpTxt2}>OTP Verified!</Text>
              ) : (
                <>
                  <Text style={styles.bottomSignUpTxt}>I don’t receive a code! </Text>
                  <TouchableOpacity onPress={() => navigation.navigate('Verification')}>
                    <Text style={styles.bottomSignUpTxt2}>Please resend</Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
          </View>
          <Button
            color={colors.orange}
            buttonName="Verify"
            onPress={() => {
              handleOTPVerification();
            }}
          />
        </View>
      </ImageBackground>
      <FlashMessage position="top" />
    </SafeAreaView>
  )
}

export default VerificationScreen;