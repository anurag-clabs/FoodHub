import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {Header} from '../common/Header/Header';
import {commonStyle} from '../utils/commonStyles';
import {images} from '../utils/image';
import {useNavigation} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {colors} from '../utils/colors';
import FavoriteResturentScreen from '../component/Favorites/FavoriteResturentScreen';
import FavoritesFoodScreen from '../component/Favorites/FavoritesFoodScreen';
import {s, vs} from 'react-native-size-matters';
import {Font} from '../utils/Fonts';

const FavoritesFood = () => {
  const navigation = useNavigation();
  const ProfileTabNavigator = createMaterialTopTabNavigator();

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header
        Text="Favorites"
        onPress={() => navigation.goBack()}
        HeaderImg={images.UserProfile}
        HeaderImgstyle={commonStyle.headerImg}
      />
      <ProfileTabNavigator.Navigator
        tabBarOptions={{
          activeTintColor: colors.white,
          labelStyle: {
            fontFamily: Font.sofiaProMedium,
            textTransform: 'capitalize',
            fontSize: 15,
          },
          inactiveTintColor: colors.orange,
          indicatorStyle: {
            height: 45,
            top: '10%',
            bottom: '10%',
            width: '48%',
            left: '1%',
            borderRadius: 100,
            backgroundColor: colors.orange,
          },
          style: {
            height: 55,
            justifyContent: 'center',
            borderRadius: 100,
            marginVertical: vs(20),
            marginHorizontal: s(20),
          },
          tabStyle: {
            borderRadius: 100,
          },
        }}
        swipeEnabled={true}>
        <ProfileTabNavigator.Screen
          name="Food Item"
          component={FavoritesFoodScreen}
        />
        <ProfileTabNavigator.Screen
          name="Resturent"
          component={FavoriteResturentScreen}
        />
      </ProfileTabNavigator.Navigator>
    </SafeAreaView>
  );
};

export default FavoritesFood;
