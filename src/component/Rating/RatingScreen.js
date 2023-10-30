import {
  View,
  Text,
  SafeAreaView,
  Image,
  ImageBackground,
  TextInput,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { images } from '../../utils/image';
import { commonStyle } from '../../utils/commonStyles';
import { BackButton, Button } from '../../common/Button/Button';
import { useNavigation } from '@react-navigation/native';
import { styles } from './style';
import { colors } from '../../utils/colors';
import StarRating from 'react-native-star-rating-widget';

const RatingScreen = () => {

  const navigation = useNavigation()
  const [rating, setRating] = useState(0);

  const getRatingText = () => {
    if (rating === 5) {
      return 'Excellent';
    } else if (rating >= 4) {
      return 'Very Good';
    } else if (rating >= 3) {
      return 'Good';
    } else if (rating >= 2) {
      return 'Fair';
    } else if (rating >= 1) {
      return 'Bad';
    } else {
      return 'No Rating';
    }
  };

  return (
    <SafeAreaView style={commonStyle.constainer} >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[commonStyle.m_20, styles.headerView]}>
          <ImageBackground source={images.FoodItem1} style={styles.BackgroundImg} imageStyle={{ borderRadius: 15 }}>
            <BackButton />
            <View style={styles.logoMainView}>
              <View style={styles.logoImgView}>
                <View style={styles.PizzaHutImageView}>
                  <Image source={images.PizzaHutLogo} style={styles.PizzaHutImage} />
                </View>
                <View style={styles.VerifiedImgView}>
                  <Image source={images.Verified} style={styles.imageStyle} />
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.textView}>
          <Text style={styles.headerTxt}>Pizza Hut</Text>
          <Text style={styles.headerDescription}>4102  Pretty View Lanenda</Text>
          <Text style={styles.statusTxt}>{'\u25CF'} Order Delivered</Text>
          <Text style={styles.ratingTxt}>Please Rate Delivery Service</Text>
          <Text style={styles.rateTxt}>{getRatingText()}</Text>
          <StarRating rating={rating} onChange={setRating} starSize={40} starStyle={styles.ratingContainer} />
          <TextInput
            multiline={true}
            numberOfLines={5}
            placeholder='Write Review'
            style={styles.textInputStyle}
          />
        </View>
        <Button
          buttonName='SUBMIT'
          color={colors.orange}
          onPress={() => navigation.navigate('Reviews')}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default RatingScreen;