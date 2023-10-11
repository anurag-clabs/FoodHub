import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {images} from '../../utils/image';
import {styles} from './Styles';
import {commonStyle} from '../../utils/commonStyles';
import {useNavigation} from '@react-navigation/native';

const WelcomScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.constainer}>
      <ImageBackground
        source={images.welcomeBackIMG}
        style={styles.backgroundImg}>
        <View style={styles.skipBtnView}>
          <TouchableOpacity style={styles.skipBtn}>
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
            <TouchableOpacity style={[commonStyle.rowCenter, styles.iconBtn]}>
              <Image source={images.facebook} style={styles.iconImg} />
              <Text style={styles.iconTxt}>FACEBOOK</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[commonStyle.rowCenter, styles.iconBtn]}>
              <Image source={images.google} style={styles.iconImg} />
              <Text style={styles.iconTxt}>GOOGLE</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={[styles.startBtn, commonStyle.m_20]}
            onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.startBtnTxt}>SignUp with email</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.startBtn, commonStyle.m_20]}
            onPress={() => navigation.navigate('PhoneRegistration')}>
            <Text style={styles.startBtnTxt}>SignUp with phone</Text>
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
