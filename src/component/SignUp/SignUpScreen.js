import { View, Text, ImageBackground, TextInput } from 'react-native'
import React from 'react'
import { styles } from './style';
import { images } from '../../utils/image';
import { commonStyle } from '../../utils/commonStyles';

const SignUpScreen = () => {
  return (
    <View style={styles.constainer}>
      <ImageBackground source={images.commonBackGround} style={commonStyle.backGroundImg}>
        <View style={[commonStyle.m_20, {marginVertical: 20}]}>
          <Text style={styles.headerTxt}>Sign Up</Text>
          <Text style={styles.textInputTxt}>Full name</Text>
          <TextInput 
          style={styles.textInputStyle}
          placeholder='Your Full name'
          />
        </View>
      </ImageBackground>
    </View>
  )
}

export default SignUpScreen;