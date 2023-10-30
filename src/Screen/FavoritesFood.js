import React from 'react';
import { SafeAreaView} from 'react-native';
import {Header} from '../common/Header/Header';
import {commonStyle} from '../utils/commonStyles';
import {images} from '../utils/image';
import {useNavigation} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import FavoriteResturentScreen from '../component/Favorites/FavoriteResturentScreen';
import FavoritesFoodScreen from '../component/Favorites/FavoritesFoodScreen';
import CustomTabBar from '../navigation/CustomTabBar';
import { useSelector } from 'react-redux';

const FavoritesFood = () => {
  const ProfileTabNavigator = createMaterialTopTabNavigator();

  const getUserDetail = useSelector(state => state?.GetUserDetail?.profileData);

  return (
    <SafeAreaView style={commonStyle.constainer}>
      <Header
        Text="Favorites"
        HeaderImgstyle={commonStyle.headerImg}
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
