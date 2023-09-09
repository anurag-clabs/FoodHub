import { View, Text, ImageBackground, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { styles } from './style';
import { images } from '../../utils/image';
import { commonStyle } from '../../utils/commonStyles';
import { Button } from '../../common/Button/Button';
import { colors } from '../../utils/colors';
import { useNavigation } from '@react-navigation/native';

const RessetPasswordScreen = () => {

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <ImageBackground source={images.commonBackGround} style={commonStyle.backGroundImg}>
        <TouchableOpacity style={styles.BackImgView} onPress={() => navigation.goBack()}>
          <Image source={images.BackImg} style={styles.BackImg} />
        </TouchableOpacity>
        <View style={[commonStyle.m_20, { marginVertical: 20 }]}>
          <Text style={styles.headerTxt}>Resset Password</Text>
          <Text style={styles.textInputTxt}>Please enter your email address to request a password reset</Text>
          <TextInput
            style={styles.textInputStyle}
            placeholder='Your email or phone'
          />
        </View>
        <Button
          color={colors.orange}
          buttonName="Send new password"
        />
      </ImageBackground>
    </View>
  )
}

export default RessetPasswordScreen;