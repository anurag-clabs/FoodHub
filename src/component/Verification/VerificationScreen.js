import { View, Text, ImageBackground, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from './style';
import { images } from '../../utils/image';
import { commonStyle } from '../../utils/commonStyles';
import { useNavigation, useRoute } from '@react-navigation/native';
import OTPTextView from 'react-native-otp-textinput';
import { Button } from '../../common/Button/Button';
import { PhoneNumberVerify } from '../../redux/action/PhoneNumberVerify';
import { EmailVerify } from '../../redux/action/EmailVerify';
import { colors } from '../../utils/colors';

const VerificationScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const signupData = route?.params?.data?.user;
  const numberOtp = route?.params?.code || '';
  const loginData = route?.params?.loginData;

  const [loader, setLoader] = useState(false);
  const [enteredOTP, setEnteredOTP] = useState('');
  const [isOTPVerified, setIsOTPVerified] = useState(false);

  const handleOTPVerification = async () => {
    if (numberOtp?.phoneNumber || loginData?.phoneNumber) {
      setLoader(true);
      const response = await PhoneNumberVerify({
        phoneNumber: numberOtp?.phoneNumber || loginData?.phoneNumber,
        verificationCode: enteredOTP,
      })
      setLoader(false)
      if (response) {
        setIsOTPVerified(true);
        navigation.navigate(numberOtp?.phoneNumber ? 'Login' : 'Drawer');
      }
    } else if (signupData?.email) {
      setLoader(true);
      const response = await EmailVerify({
        email: signupData?.email,
        verificationCode: enteredOTP,
      })
      setLoader(false)
      if (response) {
        setIsOTPVerified(true);
        navigation.navigate('Login');
      }
    }
  };

  return (
    <SafeAreaView style={styles.constainer}>
      <ImageBackground source={images.commonBackGround} style={commonStyle.backGroundImg}>
        <View style={[commonStyle.m_20, { marginVertical: 20 }]}>
          <Text style={styles.headerTxt}>Verification Code</Text>
          <Text style={styles.textInputTxt}>
            Please type the verification code sent to {signupData?.email}{numberOtp?.phoneNumber}
          </Text>
          <OTPTextView
            key={isOTPVerified ? 'verified' : 'unverified'}
            inputCount={6}
            autoFocus
            keyboardType="numeric"
            containerStyle={styles.textInputContainer}
            handleTextChange={(text) => setEnteredOTP(text)}
            textInputStyle={styles.roundedTextInput}
            tintColor={colors.orange}
          />
          <View style={commonStyle.alignCenter}>
            <View style={styles.bottomSignUpTxtView}>
                  <Text style={styles.bottomSignUpTxt}>I don’t receive a code! </Text>
                  <TouchableOpacity onPress={() => navigation.navigate('Verification')}>
                    <Text style={styles.bottomSignUpTxt2}>Please resend</Text>
                  </TouchableOpacity>
            </View>
          </View>
          <Button
            color={colors.orange}
            buttonName="Verify"
            onPress={handleOTPVerification}
            loading={loader}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default VerificationScreen;
