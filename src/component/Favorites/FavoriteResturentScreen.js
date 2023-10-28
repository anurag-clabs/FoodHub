import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {commonStyle} from '../../utils/commonStyles';
import {Featured_Restaurants} from '../../common/Data/Data';
import Resturents from '../../common/Resturents/Resturents';
import {useNavigation} from '@react-navigation/native';
import {s} from 'react-native-size-matters';

const FavoriteResturentScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({item}) => (
    <Resturents
      BackgroundImg={item.BackgroundImg}
      RestaurantName={item.RestaurantName}
      Rating={item.Rating}
      Verified={item.Verified}
      DeliveryIcon={item.DeliveryIcon}
      DeliveryOption={item.DeliveryOption}
      TimeIcon={item.TimeIcon}
      DeliveryTime={item.DeliveryTime}
      Burger={item.Burger}
      Chicken={item.Chicken}
      FastFood={item.FastFood}
      onPress={() => navigation.navigate('Reviews')}
    />
  );

  return (
    <SafeAreaView style={commonStyle.constainer}>
      <FlatList
        contentContainerStyle={{paddingHorizontal: s(10)}}
        data={Featured_Restaurants}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default FavoriteResturentScreen;
