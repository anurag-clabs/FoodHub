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
      backgroundImg={item.BackgroundImg}
      restaurantName={item.RestaurantName}
      rating={item.Rating}
      verified={item.Verified}
      deliveryIcon={item.DeliveryIcon}
      deliveryOption={item.DeliveryOption}
      timeIcon={item.TimeIcon}
      deliveryTime={item.DeliveryTime}
      burger={item.Burger}
      chicken={item.Chicken}
      fastFood={item.FastFood}
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
