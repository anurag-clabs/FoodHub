import {
  View,
  Text,
  ImageBackground,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from './style';
import { images } from '../../utils/image';
import { commonStyle } from '../../utils/commonStyles';
import { TextInputText } from '../../common/TextInputComponent/TextInputComponent';
import { Button } from '../../common/Button/Button';
import { colors } from '../../utils/colors';
import { useNavigation } from '@react-navigation/native';
import { UserSignUp } from '../../redux/action/UserSignUp';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

const SignUpScreen = () => {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [passwordHide, setPasswordHide] = useState(true);
  const [password, setPassword] = useState("");
  const [isFullNameFocused, setIsFullNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '774557546104-7928mshorf5ladf6v5fec5ldep6mo849.apps.googleusercontent.com',
      offlineAccess: false,
    });
  }, []);

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

  const hideandShowPassword = () => {
    setPasswordHide(!passwordHide);
  };

  const handelSignUpVerify = async () => {
    try {
      const signupData = {
        name: name,
        email: email,
        password: password,
      };
      setLoader(true)
      const response = await UserSignUp(signupData);
      setLoader(false)
      if (response) {
        console.log('Signup successful');
        navigation.navigate('Verification', {
          email
        });
      } else {
        console.log('Signup failed');
      }
    } catch (error) {
      setLoader(false)
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      const googleCredential = auth.GoogleAuthProvider.credential(userInfo.idToken);

      await auth().signInWithCredential(googleCredential);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.constainer}>
      <ImageBackground
        source={images.commonBackGround}
        style={commonStyle.backGroundImg}>
        <View style={[commonStyle.m_20, commonStyle.mV20]}>
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
            placeholder='Your email'
            onFocus={handleEmailFocus}
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <Text style={styles.textInputTxt}>Password</Text>
          <View onFocus={handlePasswordFocus}
            style={isPasswordFocused ? [styles.passwordView, styles.FocuspasswordView] : styles.passwordView}>
            <TextInputText
            style={styles.passwordInputStyle}
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
            loading={loader}
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
            <TouchableOpacity style={[commonStyle.rowCenter, styles.iconBtn, commonStyle.blackShadow]}>
              <Image source={images.facebook} style={styles.iconImg} />
              <Text style={styles.iconTxt}>FACEBOOK</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={[commonStyle.rowCenter, styles.iconBtn, commonStyle.blackShadow]}
            onPress={handleGoogleSignIn}
            >
              <Image source={images.google} style={styles.iconImg} />
              <Text style={styles.iconTxt}>GOOGLE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SignUpScreen;
