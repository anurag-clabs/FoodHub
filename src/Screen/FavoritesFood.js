import React from 'react';
import { SafeAreaView } from 'react-native';
import { Header } from '../common/Header/Header';
import { commonStyle } from '../utils/commonStyles';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FavoriteResturentScreen from '../component/Favorites/FavoriteResturentScreen';
import FavoritesFoodScreen from '../component/Favorites/FavoritesFoodScreen';
import CustomTabBar from '../navigation/CustomTabBar';

const FavoritesFood = () => {
  const ProfileTabNavigator = createMaterialTopTabNavigator();

  return (
    <SafeAreaView style={commonStyle.constainer}>
      <Header
        text="Favorites"
        showImage={true} 
      />
      <ProfileTabNavigator.Navigator
        tabBar={props => <CustomTabBar {...props} />}>
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
