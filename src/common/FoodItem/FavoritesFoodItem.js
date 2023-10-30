import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {commonStyle} from '../../utils/commonStyles';
import {styles} from './style';
import {images} from '../../utils/image';
import {colors} from '../../utils/colors';
import {useNavigation} from '@react-navigation/native';

const FavoritesFoodItem = props => {
  const navigation = useNavigation();

  return (
    <>
      <TouchableOpacity
        style={[styles.mainView, Platform.OS === 'ios' && styles.iosShadow]}
        onPress={() => navigation.navigate('FoodDetail')}>
        <Image source={props.itemImg} style={styles.backgroundImg} />
        <TouchableOpacity
          style={[
            styles.favoritesreviewTxtView,
            Platform.OS === 'ios' && styles.favoritesreview,
          ]}
          onPress={props.onPress}>
          <Text style={styles.reviewTxt}>{props.rating}</Text>
        </TouchableOpacity>
        <View style={styles.itemNameView}>
          <Text style={styles.itemName}>{props.foodName}</Text>
          <Text style={styles.itemDescription}>{props.foodDescription}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.favoritespriceHeaderView}>
        <View style={styles.priceTagView}>
          <Text style={{color: colors.orange}}>$</Text>
          <Text style={styles.priceTagTxt}>{props.price}</Text>
        </View>
        <TouchableOpacity style={styles.heartIconView}>
          <Image source={images.HeartIcon} style={commonStyle.imageStyle} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default FavoritesFoodItem;
