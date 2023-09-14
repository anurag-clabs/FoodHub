import { View, Text, SafeAreaView, Image, ImageBackground } from 'react-native';
import React from 'react';
import { images } from '../../utils/image';
import { commonStyle } from '../../utils/commonStyles';
import { BackButton } from '../../common/Button/Button';
import { s, vs } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import { styles } from './style';


const RatingScreen = () => {

  const navigation = useNavigation()

  return (
    <SafeAreaView style={commonStyle.constainer}>
      <View style={[commonStyle.m_20, {marginTop: 20}]}>
        <ImageBackground source={images.PizzaHut } style={{width: '100%', height: vs(160), borderRadius: 20}}>

        <BackButton
        style={styles.BackImgView}
          onPress={() => navigation.goBack()}
        />
        </ImageBackground>
      </View>
    </SafeAreaView>
  )
}

export default RatingScreen;