import {
  View,
  Text,
  ImageBackground,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, { useState } from 'react';
import { styles } from './style';
import { images } from '../../utils/image';
import { commonStyle } from '../../utils/commonStyles';
import { TextInputText } from '../../common/TextInputComponent/TextInputComponent';
import { Button } from '../../common/Button/Button';
import { colors } from '../../utils/colors';
import { useNavigation } from '@react-navigation/native';
import { apiInstance } from '../../httpclient/httpclient';
import { handelAuthVerify, signup } from '../../redux/action/SignUp';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import { useDispatch } from 'react-redux';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [passwordHide, setPasswordHide] = useState(true);
  const [password, setPassword] = useState("");
  const [isFullNameFocused, setIsFullNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  let msg = {
    type: 'info',
    backgroundColor: colors.errorColor,
  };

  const handleFullNameFocus = () => {
    setIsFullNameFocused(true);
    setIsEmailFocused(false);
    setIsPasswordFocused(false);
  };

  const handleEmailFocus = () => {
    setIsFullNameFocused(false);
    setIsEmailFocused(true);
    setIsPasswordFocused(false);
  };

  const handlePasswordFocus = () => {
    setIsFullNameFocused(false);
    setIsEmailFocused(false);
    setIsPasswordFocused(true);
  };

  const handleFullNameSubmit = () => {
    if (!isFullNameFocused.length) {
      showMessage({
        ...msg,
        message: 'Please Enter Full Name',
      });
      return;
    }
  };

  const hideandShowPassword = () => {
    setPasswordHide(!passwordHide);
  };

  const handelSignUpVerify = async () => {
    handleFullNameSubmit();
    try {
      const signupData = {
        name: name,
        email: email,
        password: password,
      };
      console.log('signupData:', signupData);
      const response = await signup(signupData);
      console.log('Signup response:', response); 
      if (response) {
        console.log('Signup successful');
        showMessage({
          ...msg,
          message: response.message, 
        });
        navigation.navigate('Verification')
      } else {
        console.log('Signup failed');
      }
    } catch (error) {
      console.error('Signup error:', error);
      showMessage({
        message: 'An error occurred while signing up', 
        type: 'error',
        backgroundColor: colors.errorColor, 
      });
    }
  };

  return (
    <SafeAreaView style={styles.constainer}>
      <ImageBackground
        source={images.commonBackGround}
        style={commonStyle.backGroundImg}>
        <View style={[commonStyle.m_20, { marginVertical: 20 }]}>
          <Text style={styles.headerTxt}>Sign Up</Text>
          <Text style={styles.textInputTxt}>Full name</Text>
          <TextInput
            style={isFullNameFocused ? [styles.textInputStyle, styles.focusedTextInput] : styles.textInputStyle}
            placeholder='Your Full name'
            onFocus={handleFullNameFocus}
            value={name}
            onChangeText={text => setName(text)}
          />
          <Text style={styles.textInputTxt}>E-mail</Text>
          <TextInput
            style={isEmailFocused ? [styles.textInputStyle, styles.focusedTextInput] : styles.textInputStyle}
            placeholder='Your email or phone'
            onFocus={handleEmailFocus}
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <Text style={styles.textInputTxt}>Password</Text>
          <View onFocus={handlePasswordFocus}
            style={isPasswordFocused ? [styles.passwordView, styles.FocuspasswordView] : styles.passwordView}>
            <TextInputText
              secureTextEntry={passwordHide}
              placeHolder="Password"
              value={password}
              onChangeText={text => setPassword(text)}
            />
            <TouchableOpacity onPress={hideandShowPassword}>
              <Image
                source={passwordHide ? images.showPass : images.hidePass}
                style={styles.hidePassword}
              />
            </TouchableOpacity>
          </View>
          <Button
            color={colors.orange}
            buttonName="SIGN UP"
            onPress={() => handelSignUpVerify()}
          />
          <View style={commonStyle.alignCenter}>
            <View style={styles.bottomSignUpTxtView}>
              <Text style={styles.bottomSignUpTxt}>
                Already have an account?{' '}
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.bottomSignUpTxt2}>Login</Text>
              </TouchableOpacity>
            </View>
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
      </ImageBackground>
      <FlashMessage position="top"/>
    </SafeAreaView>
  );
};

export default SignUpScreen;
