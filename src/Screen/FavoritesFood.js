import { View, Text, SafeAreaView } from 'react-native'
import React from 'react';
import Header from '../common/Header/Header';
import { commonStyle } from '../utils/commonStyles';
import { images } from '../utils/image';
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { colors } from '../utils/colors';
import FavoriteResturentScreen from '../component/Favorites/FavoriteResturentScreen';
import FavoritesFoodScreen from '../component/Favorites/FavoritesFoodScreen';
import { s, vs } from 'react-native-size-matters';

const FavoritesFood = () => {

    const navigation = useNavigation();
    const ProfileTabNavigator = createMaterialTopTabNavigator()

    return (
        <SafeAreaView style={{flex: 1}}>
            <Header
                Text='Favorites'
                onPress={() => navigation.goBack()}
                HeaderImg={images.UserProfile}
                HeaderImgstyle={commonStyle.headerImg}
            />
            <ProfileTabNavigator.Navigator tabBarOptions={{
                activeTintColor: colors.white,
                labelStyle: {
                    textTransform: "uppercase",
                },
                inactiveTintColor: colors.grey,
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
                    padding: 5,
                    alignSelf: "center",
                    height: 55,
                    width: '90%',
                    borderRadius: 100,
                    elevation: 5,
                    shadowOpacity: .10, 
                    shadowRadius: 4, 
                    marginTop: vs(20),
                    marginHorizontal: s(20)
                },
                tabStyle: {
                    borderRadius: 100,
                },
            }}
                swipeEnabled={true}>
                <ProfileTabNavigator.Screen name="Food Item" component={FavoritesFoodScreen} />
                <ProfileTabNavigator.Screen name="Resturent" component={FavoriteResturentScreen} />
            </ProfileTabNavigator.Navigator>
        </SafeAreaView>
    )
}

export default FavoritesFood;