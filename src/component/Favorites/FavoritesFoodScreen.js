import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {commonStyle} from '../../utils/commonStyles';
import {useNavigation} from '@react-navigation/native';
import FavoritesFoodItem from '../../common/FoodItem/FavoritesFoodItem';
import {s} from 'react-native-size-matters';
import {FoodData} from '../../common/Data/Data';

const FavoritesFoodScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({item}) => (
    <FavoritesFoodItem
      itemImg={item.ItemImg}
      price={item.Price}
      rating={item.Rating}
      foodName={item.FoodName}
      foodDescription={item.FoodDescription}
      onPress={() => navigation.navigate('Reviews')}
    />
  );

  return (
    <SafeAreaView style={commonStyle.constainer}>
      <FlatList
        contentContainerStyle={{paddingHorizontal: s(10)}}
        data={FoodData}
        keyExtractor={item => item.Id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default FavoritesFoodScreen;
