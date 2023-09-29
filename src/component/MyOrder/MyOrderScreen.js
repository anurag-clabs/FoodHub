import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { commonStyle } from '../../utils/commonStyles';
import { styles } from './Style';
import { images } from '../../utils/image';

const MyOrderScreen = () => {
  return (
    <SafeAreaView style={commonStyle.constainer}>
      <View style={[styles.MainView]}>
        <View style={commonStyle.f_D_R}>
            <Image source={images.StarBucksLogo} />
            <View>
                <Text style={styles.ItemTxt}>3 Items</Text>
                <View style={styles.ResturentNameView}>
                <Text style={styles.ResturentNameTxt}>Starbuck  </Text>
                <Image source={images.Verified} style={commonStyle.ImageStyle}/>
                </View>
            </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default MyOrderScreen;