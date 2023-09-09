import { View, Text, ImageBackground, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style';
import { images } from '../../utils/image';
import { commonStyle } from '../../utils/commonStyles';
import { TextInputText } from '../../common/TextInputComponent/TextInputComponent';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../common/Button/Button';
import { colors } from '../../utils/colors';

const LoginScreen = () => {

  const navigation = useNavigation();
  const [passwordHide, setPasswordHide] = useState(true);
  const [password, setPassword] = useState("");

  const hideandShowPassword = () => {
    setPasswordHide(!passwordHide)
  };

  return (
    <View style={styles.constainer}>
      <ImageBackground source={images.commonBackGround} style={commonStyle.backGroundImg}>
        
        <TouchableOpacity style={styles.BackImgView} onPress={() => navigation.goBack()}>
        <Image source={images.BackImg} style={styles.BackImg}/>
        </TouchableOpacity>
      <View style={[commonStyle.m_20, { marginVertical: 20 }]}>
          <Text style={styles.headerTxt}>Login</Text>
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
          <TouchableOpacity onPress={() => navigation.navigate('RessetPassword')}>
          <Text style={styles.forgitTxt}>Forgot password?</Text>
          </TouchableOpacity>
          <Button
            color={colors.orange}
            buttonName="LOGIN"
            emptyFildFunction={() => navigation.navigate('Verification')}
          />
          <View style={commonStyle.alignCenter}>
            <View style={styles.bottomSignUpTxtView}>
              <Text style={styles.bottomSignUpTxt}>Don’t have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Verification')}>
                <Text style={styles.bottomSignUpTxt2}>Sign up</Text>
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

export default LoginScreen;