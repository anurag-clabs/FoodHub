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
import { BackButton, Button } from '../../common/Button/Button';
import { colors } from '../../utils/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { showMessage } from 'react-native-flash-message';
import { Login } from '../../redux/action/Login';
import OTPTextView from 'react-native-otp-textinput';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [passwordHide, setPasswordHide] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enteredOTP, setEnteredOTP] = useState('');
  const [isEmailSelected, setIsEmailSelected] = useState(true);

  const hideandShowPassword = () => {
    setPasswordHide(!passwordHide);
  };

  let msg = {
    type: 'info',
    backgroundColor: colors.errorColor,
  };

  const handleLogin = async () => {
    try {
      const loginData = {
        email: email,
        password: password,
      };
      const response = await Login(loginData);
      if (response) {
        console.log('Login successful');
        showMessage({
          ...msg,
          message: response.message,
        });
        await AsyncStorage.setItem('userEmail', response.email);
        await AsyncStorage.setItem('userName', response.name);
        await AsyncStorage.setItem('userToken', response.token);
        navigation.navigate('Drawer');
      } else {
        console.log('Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      showMessage({
        message: 'An error occurred while Login up',
        type: 'error',
        backgroundColor: colors.errorColor,
      });
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
            <TouchableOpacity onPress={() => setIsEmailSelected(true)} style={isEmailSelected ? styles.activeToggleBtn : styles.toggleBtn}>
              <Text style={isEmailSelected ? styles.activeToggleTxt : styles.toggleTxt}>E-mail</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsEmailSelected(false)} style={!isEmailSelected ? styles.activeToggleBtn : styles.toggleBtn}>
              <Text style={!isEmailSelected ? styles.activeToggleTxt : styles.toggleTxt}>Number</Text>
            </TouchableOpacity>
          </View>
          {isEmailSelected ? (
            <View >
              <Text style={styles.textInputTxt}>E-mail</Text>
              <TextInput
                style={styles.textInputStyle}
                placeholder="Your email"
                onChangeText={(text) => setEmail(text)}
                value={email}
              />
              <Text style={styles.textInputTxt}>Password</Text>
              <View style={styles.passwordView}>
                <TextInputText
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
                style={styles.textInputStyle}
                keyboardType="numeric"
                placeholder="Your phone number"
                onChangeText={(text) => setEmail(text)}
                value={email}
              />
            </View>
          )}
        </View>
        <View style={styles.bottomView}>
        <TouchableOpacity
          onPress={() => navigation.navigate('RessetPassword')}>
          <Text style={styles.forgitTxt}>Forgot password?</Text>
        </TouchableOpacity>
        <Button
          color={colors.orange}
          buttonName="LOGIN"
          onPress={() => handleLogin()}
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
          <View style={[styles.iconView, commonStyle.m_20]}>
            <TouchableOpacity style={[commonStyle.rowCenter, styles.iconBtn]}>
              <Image source={images.facebook} style={styles.iconImg} />
              <Text style={styles.iconTxt}>FACEBOOK</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[commonStyle.rowCenter, styles.iconBtn]}>
              <Image source={images.google} style={styles.iconImg} />
              <Text style={styles.iconTxt}>GOOGLE</Text>
            </TouchableOpacity>
          </View>
        </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LoginScreen;
