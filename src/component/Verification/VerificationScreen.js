import { View, Text, ImageBackground, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useRef, useState } from 'react'
import { styles } from './style';
import { images } from '../../utils/image';
import { commonStyle } from '../../utils/commonStyles';
import { TextInputText } from '../../common/TextInputComponent/TextInputComponent';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../common/Button/Button';
import { colors } from '../../utils/colors';
import OTPTextView from 'react-native-otp-textinput';

const VerificationScreen = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.constainer}>
      <ImageBackground source={images.commonBackGround} style={commonStyle.backGroundImg}>

        <TouchableOpacity style={styles.BackImgView} onPress={() => navigation.goBack()}>
          <Image source={images.BackImg} style={styles.BackImg} />
        </TouchableOpacity>
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
        </View>
      </ImageBackground>
    </View>
  )
}

export default VerificationScreen;