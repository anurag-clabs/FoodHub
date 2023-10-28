import React, { useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import { styles } from './style';
import { images } from '../../utils/image';
import { commonStyle } from '../../utils/commonStyles';
import { TextInputText } from '../../common/TextInputComponent/TextInputComponent';
import { useNavigation } from '@react-navigation/native';
import { BackButton, Button, SocialButton } from '../../common/Button/Button';
import { colors } from '../../utils/colors';
import { showMessage } from 'react-native-flash-message';
import { UserLogin } from '../../redux/action/UserLogin';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [passwordHide, setPasswordHide] = useState(true);
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('');
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isEmailSelected, setIsEmailSelected] = useState(true);
  const [loader, setLoader] = useState(false);

  const hideandShowPassword = () => {
    setPasswordHide(!passwordHide);
  };

  const handleEmailFocus = () => {
    setIsEmailFocused(true);
    setIsPasswordFocused(false);
  };

  const handlePasswordFocus = () => {
    setIsEmailFocused(false);
    setIsPasswordFocused(true);
  };

  const handleLogin = async () => {
    if (isEmailSelected) {
      if (!email?.length) {
        showMessage({
          type: 'error',
          message: 'Please enter your Email',
          backgroundColor: colors.errorColor,
        });
        return;
      }

      if (!password?.length) {
        showMessage({
          type: 'error',
          message: 'Please enter your Password',
          backgroundColor: colors.errorColor,
        });
        return;
      }
    }
    else {
      if (!phoneNumber?.length) {
        showMessage({
          type: 'error',
          message: 'Please enter your Number',
          backgroundColor: colors.errorColor,
        });
        return;
      }
    }

    const loginData = isEmailSelected ? {
      email: email,
      password: password,
    } : {
      phoneNumber: phoneNumber,
    }

    try {
      setLoader(true)
      const response = await UserLogin(loginData);
      setLoader(false)
      if (response) {
        console.log('login successful', response);
        if (isEmailSelected) {
          navigation.navigate('Verification', { email , type: 'login'})
        } else {
          navigation.navigate('Verification', { phoneNumber })
        }
      } else {
        console.log('Login failed');
      }
    } catch (error) {
      setLoader(false);
    }
  }

  return (
    <SafeAreaView style={commonStyle.constainer}>
      <ImageBackground
        source={images.commonBackGround}
        style={commonStyle.backGroundImg}>
        <BackButton
          style={styles.BackImgView}
          onPress={() => navigation.goBack()}
        />
        <View style={[commonStyle.m_20, commonStyle.mV5]}>
          <Text style={styles.headerTxt}>Login</Text>
          <View style={[commonStyle.rowCenter, styles.toggleView]}>
            <TouchableOpacity
              onPress={() => setIsEmailSelected(true)}
              style={isEmailSelected ? [styles.toggleBtn, commonStyle.orangeShadow] : styles.toggleBtn}>
              <Text style={isEmailSelected ? [styles.toggleTxt, styles.activeToggleTxt] : styles.toggleTxt}>
                E-mail
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setIsEmailSelected(false)}
              style={!isEmailSelected ? [styles.toggleBtn, commonStyle.orangeShadow] : styles.toggleBtn}>
              <Text style={!isEmailSelected ? [styles.toggleTxt, styles.activeToggleTxt] : styles.toggleTxt}>
                Number
              </Text>
            </TouchableOpacity>
          </View>
          {isEmailSelected ? (
            <View>
              <Text style={styles.textInputTxt}>E-mail</Text>
              <TextInput
                onFocus={handleEmailFocus}
                style={isEmailFocused ? [styles.textInputStyle, styles.focusedTextInput] : styles.textInputStyle}
                placeholder="Your email"
                onChangeText={(text) => setEmail(text)}
                value={email}
              />
              <Text style={styles.textInputTxt}>Password</Text>
              <View onFocus={handlePasswordFocus}
                style={isPasswordFocused ? [styles.passwordView, styles.FocuspasswordView] : styles.passwordView}>
                <TextInputText
                  style={styles.passwordInputStyle}
                  secureTextEntry={passwordHide}
                  placeHolder="Password"
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                />
                <TouchableOpacity onPress={hideandShowPassword}>
                  <Image
                    source={passwordHide ? images.showPass : images.hidePass}
                    style={styles.hidePassword}
                  />
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View style={commonStyle.mT20}>
              <Text style={styles.textInputTxt}>Number</Text>
              <TextInput
                style={isEmailFocused ? [styles.textInputStyle, styles.focusedTextInput] : styles.textInputStyle}
                onFocus={handleEmailFocus}
                keyboardType="numeric"
                placeholder="Your phone number"
                onChangeText={(text) => setPhoneNumber(text)}
                value={phoneNumber}
                maxLength={10}
              />
            </View>
          )}
        </View>
        <View style={styles.bottomView}>
          <TouchableOpacity onPress={() => navigation.navigate('RessetPassword')}>
            <Text style={styles.forgotTxt}>Forgot password?</Text>
          </TouchableOpacity>
          <Button
            color={colors.orange}
            buttonName="LOGIN"
            onPress={handleLogin}
            loading={loader}
          />
          <View style={[commonStyle.alignCenter]}>
            <View style={styles.bottomSignUpTxtView}>
              <Text style={styles.bottomSignUpTxt}>Don’t have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.bottomSignUpTxt2}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <View style={[styles.lineView, commonStyle.rowSpace]}>
              <View style={styles.devider} />
              <Text style={styles.deviderTxt}> Sign up with </Text>
              <View style={styles.devider} />
            </View>
            <View style={[styles.iconView, commonStyle.m_20,]}>
            <SocialButton
              shadowStyle={commonStyle.blackShadow}
              image={images.facebook}
              buttonName='FACEBOOK'
            />
            <SocialButton
              shadowStyle={commonStyle.blackShadow}
              image={images.google}
              buttonName='GOOGLE'
            />
          </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LoginScreen;
