import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { images } from '../../utils/image';
import { styles } from './style';
import { commonStyle } from '../../utils/commonStyles';
import { useNavigation } from '@react-navigation/native';
import { UserSocialLogin } from '../../redux/action/UserSocialLogin';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { SocialButton } from '../../common/Button/Button';
import DeviceInfo from 'react-native-device-info';

const WelcomScreen = () => {
  const navigation = useNavigation();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '774557546104-7928mshorf5ladf6v5fec5ldep6mo849.apps.googleusercontent.com',
      offlineAccess: true,
    });
  }, []);

  const handelSignUpVerify = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const data = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(data.idToken);
      const res = await auth().signInWithCredential(googleCredential);
      const email = res?.user?.email;
      const name = res?.user?.displayName;

      const deviceId = await DeviceInfo.getUniqueId();

      const SocialLoginData = {
        name: name,
        email: email,
        deviceId: deviceId
      };
      setLoader(true);
      const response = await UserSocialLogin(SocialLoginData);
      setLoader(false);
      if (response) {
        console.log('Google Sign-in successful');
        navigation.navigate('Drawer');
      } else {
        console.log('Google Sign-in failed');
      }
    } catch (error) {
      setLoader(false);
      console.log('Google Sign-in failed', error);
    }
  };

  return (
    <View style={styles.constainer}>
      <ImageBackground
        source={images.welcomeBackIMG}
        style={styles.backgroundImg}>
        <View style={styles.skipBtnView}>
          <TouchableOpacity style={styles.skipBtn} onPress={() => navigation.navigate('Drawer')}>
            <Text style={styles.skipBtnTxt}>Skip</Text>
          </TouchableOpacity>
        </View>
        <View style={[commonStyle.m_20, styles.headerView]}>
          <Text style={styles.headerTxt}>Welcome to </Text>
          <Text style={styles.headerTxt2}>FoodHub</Text>
          <Text style={styles.headerTxtContent}>
            Your favourite foods delivered fast at your door.
          </Text>
        </View>
        <View style={styles.signInComponent}>
          <View style={[styles.lineView, commonStyle.rowSpace]}>
            <View style={styles.devider} />
            <Text style={styles.deviderTxt}> sign in with </Text>
            <View style={styles.devider} />
          </View>
          <View style={[styles.iconView, commonStyle.m_20]}>
            <SocialButton
              style={commonStyle.blackShadow}
              image={images.facebook}
              buttonName='FACEBOOK'
            />
            <SocialButton
              image={images.google}
              buttonName='GOOGLE'
              loading={loader}
              onPress={handelSignUpVerify}
            />
          </View>
          <TouchableOpacity
            style={[styles.startBtn, commonStyle.m_20]}
            onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.startBtnTxt}>SignUp with Email</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.startBtn, commonStyle.m_20]}
            onPress={() => navigation.navigate('PhoneRegistration')}>
            <Text style={styles.startBtnTxt}>SignUp with Phone</Text>
          </TouchableOpacity>
          <View style={commonStyle.alignCenter}>
            <View style={styles.bottomSignUpTxtView}>
              <Text style={styles.bottomSignUpTxt}>
                Already have an account?{' '}
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.bottomSignUpTxt2}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default WelcomScreen;
