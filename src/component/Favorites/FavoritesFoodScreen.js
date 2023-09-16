import React from 'react';
import { View, Text, SafeAreaView, ImageBackground, Image, TouchableOpacity, FlatList } from 'react-native'
import { commonStyle } from '../../utils/commonStyles';
import { images } from '../../utils/image';
import styled from 'styled-components';
import { styles } from './style';
import { colors } from '../../utils/colors';
import { useNavigation } from '@react-navigation/native';
import FoodItem from '../../common/FoodItem/FoodItem';

const FavoritesFoodScreen = () => {

  const FoodData = [
    {
      id: 1,
      backgroundImg: images.ChickenHawaiian,
      price: '12.20',
      rating: '4.5 ⭐(25+)',
      foodName: 'Chicken Hawaiian',
      foodDescription: 'Chicken, Cheese and pineapple'
    },
    {
      id: 2,
      backgroundImg: images.RedPizza,
      price: '12.20',
      rating: '4.5 ⭐(25+)',
      foodName: 'Red N Hot Pizza',
      foodDescription: 'Chicken, Cheese and pineapple'
    },
    {
      id: 3,
      backgroundImg: images.FoodItem4,
      price: '12.20',
      rating: '4.5 ⭐(25+)',
      foodName: 'Chicken Hawaiian',
      foodDescription: 'Chicken, Cheese and pineapple'
    }
  ]

  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <FoodItem
      backgroundImg={item.backgroundImg}
      price={item.price}
      rating={item.rating}
      foodName={item.foodName}
      foodDescription={item.foodDescription}
    />
  )

  return (
    <SafeAreaView style={commonStyle.constainer}>
      <FlatList
        data={FoodData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  )
}

export default FavoritesFoodScreen;