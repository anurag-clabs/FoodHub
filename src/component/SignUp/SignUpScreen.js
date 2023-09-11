import { View, Text, ImageBackground, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style';
import { images } from '../../utils/image';
import { commonStyle } from '../../utils/commonStyles';
import { TextInputText } from '../../common/TextInputComponent/TextInputComponent';
import { Button } from '../../common/Button/Button';
import { colors } from '../../utils/colors';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [passwordHide, setPasswordHide] = useState(true);
  const [password, setPassword] = useState("");

  const hideandShowPassword = () => {
    setPasswordHide(!passwordHide)
  };

  return (
    <View style={styles.constainer}>
      <ImageBackground source={images.commonBackGround} style={commonStyle.backGroundImg}>
        <View style={[commonStyle.m_20, { marginVertical: 20 }]}>
          <Text style={styles.headerTxt}>Sign Up</Text>
          <Text style={styles.textInputTxt}>Full name</Text>
          <TextInput
            style={styles.textInputStyle}
            placeholder='Your Full name'
          />
          <Text style={styles.textInputTxt}>E-mail</Text>
          <TextInput
            style={styles.textInputStyle}
            placeholder='Your email or phone'
          />
          <Text style={styles.textInputTxt}>Password</Text>
          <View style={styles.passwordView}>
            <TextInputText
              secureTextEntry={passwordHide}
              placeHolder='Password'
              value={password}
              onChangeText={text => setPassword(text)}
            />
            <TouchableOpacity onPress={hideandShowPassword}>
              <Image source={passwordHide ? images.showPass : images.hidePass} style={styles.hidePassword} />
            </TouchableOpacity>
          </View>
          <Button
            color={colors.orange}
            buttonName="SIGN UP"
            emptyFildFunction={() => navigation.navigate('PhoneRegistration')}
          />
          <View style={commonStyle.alignCenter}>
            <View style={styles.bottomSignUpTxtView}>
              <Text style={styles.bottomSignUpTxt}>Already have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.bottomSignUpTxt2}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.bottomView}>
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
    </View>
  )
}

export default SignUpScreen;