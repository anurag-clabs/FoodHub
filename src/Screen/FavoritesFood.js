import { View, Text, SafeAreaView } from 'react-native'
import React from 'react';
import { Header } from '../common/Header/Header';
import { commonStyle } from '../utils/commonStyles';
import { images } from '../utils/image';
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { colors } from '../utils/colors';
import FavoriteResturentScreen from '../component/Favorites/FavoriteResturentScreen';
import FavoritesFoodScreen from '../component/Favorites/FavoritesFoodScreen';
import { s, vs } from 'react-native-size-matters';
import { Font } from '../utils/Fonts';
import CustomTabBar from '../navigation/CustomTabBar';

const FavoritesFood = () => {

    const navigation = useNavigation();
    const ProfileTabNavigator = createMaterialTopTabNavigator()

    return (
        <SafeAreaView style={commonStyle.constainer}>
            <Header
                Text='Favorites'
                onPress={() => navigation.goBack()}
                HeaderImg={images.UserProfile}
                HeaderImgstyle={commonStyle.headerImg}
            />
            <ProfileTabNavigator.Navigator
                tabBar={props => <CustomTabBar {...props} />}
            >
                <ProfileTabNavigator.Screen name="Food Item" component={FavoritesFoodScreen} />
                <ProfileTabNavigator.Screen name="Resturent" component={FavoriteResturentScreen} />
            </ProfileTabNavigator.Navigator>
        </SafeAreaView>
    )
}

export default FavoritesFood;