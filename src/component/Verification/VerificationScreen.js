import { View, Text, ImageBackground, TextInput, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import React, { useRef, useState } from 'react'
import { styles } from './style';
import { images } from '../../utils/image';
import { commonStyle } from '../../utils/commonStyles';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../utils/colors';
import OTPTextView from 'react-native-otp-textinput';
import { BackButton, Button } from '../../common/Button/Button';

const VerificationScreen = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.constainer}>
      <ImageBackground source={images.commonBackGround} style={commonStyle.backGroundImg}>
      <BackButton
        style={styles.BackImgView}
          onPress={() => navigation.goBack()}
        />
        <View style={[commonStyle.m_20, { marginVertical: 20 }]}>
          <Text style={styles.headerTxt}>Verification Code</Text>
          <Text style={styles.textInputTxt}>Please type the verification code sent to prelookstudio@gmail.com</Text>
          <View style={styles.otpView}>
            <OTPTextView
              inputCount={4}
              autoFocus
              keyboardType="numeric"
              containerStyle={styles.textInputContainer}
              handleTextChange={() => { }}
              textInputStyle={styles.roundedTextInput}
              tintColor={colors.orange}
            />
          </View>
          <View style={commonStyle.alignCenter}>
            <View style={styles.bottomSignUpTxtView}>
              <Text style={styles.bottomSignUpTxt}>I don’t recevie a code! </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Verification')}>
                <Text style={styles.bottomSignUpTxt2}>Please resend</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Button 
          color={colors.orange}
          buttonName="Verify"
          emptyFildFunction={() => navigation.navigate('Drawer')}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default VerificationScreen;