import React from 'react';
import { View, Text, SafeAreaView, ImageBackground, Image, TouchableOpacity, FlatList } from 'react-native'
import { commonStyle } from '../../utils/commonStyles';
import { images } from '../../utils/image';
import { useNavigation } from '@react-navigation/native';
import FavoritesFoodItem from '../../common/FoodItem/FavoritesFoodItem';
import { s } from 'react-native-size-matters';

const FavoritesFoodScreen = () => {

  const FoodData = [
    {
      id: 1,
      ItemImg: images.ChickenHawaiian,
      Price: '12.20',
      Rating: '4.5 ⭐(25+)',
      FoodName: 'Chicken Hawaiian',
      FoodDescription: 'Chicken, Cheese and pineapple'
    },
    {
      id: 2,
      ItemImg: images.RedPizza,
      Price: '12.20',
      Rating: '4.5 ⭐(25+)',
      FoodName: 'Red N Hot Pizza',
      FoodDescription: 'Chicken, Chili'
    },
    {
      id: 3,
      ItemImg: images.FoodItem4,
      Price: '12.20',
      Rating: '4.5 ⭐(25+)',
      FoodName: 'Chicken Hawaiian',
      FoodDescription: 'Chicken, Cheese and pineapple'
    }
  ]

  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <FavoritesFoodItem
      ItemImg={item.ItemImg}
      Price={item.Price}
      Rating={item.Rating}
      FoodName={item.FoodName}
      FoodDescription={item.FoodDescription}
      onPress={() => navigation.navigate('Reviews')}
    />
  )

  return (
    <SafeAreaView style={commonStyle.constainer}>
      <FlatList
       contentContainerStyle={{ paddingHorizontal: s(10) }}
        data={FoodData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  )
}

export default FavoritesFoodScreen;