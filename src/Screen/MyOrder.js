import React from 'react';
import { View, Text, SafeAreaView } from 'react-native'
import { Header } from '../common/Header/Header';
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { colors } from '../utils/colors';
import { Font } from '../utils/Fonts';
import FavoritesFoodScreen from '../component/Favorites/FavoritesFoodScreen';
import FavoriteResturentScreen from '../component/Favorites/FavoriteResturentScreen';
import { s, vs } from 'react-native-size-matters';
import { commonStyle } from '../utils/commonStyles';
import { images } from '../utils/image';
import MyOrderScreen from '../component/MyOrder/MyOrderScreen';
import OrderHistoryScreen from '../component/MyOrder/OrderHistoryScreen';

const MyOrder = () => {
    const navigation = useNavigation();
    const ProfileTabNavigator = createMaterialTopTabNavigator()

    return (
        <SafeAreaView style={commonStyle.constainer}>
            <Header
                Text='My Orders'
                onPress={() => navigation.goBack()}
                HeaderImg={images.UserProfile}
                HeaderImgstyle={commonStyle.headerImg}
            />
            <ProfileTabNavigator.Navigator
                screenOptions={{
                    tabBarActiveTintColor: colors.white,
                    tabBarInactiveTintColor: colors.orange,
                    tabBarLabelStyle: {
                        fontFamily: Font.sofiaProMedium,
                        textTransform: 'capitalize',
                        fontSize: 15,
                    },
                    tabBarIndicatorStyle: {
                        height: 45,
                        top: '10%',
                        bottom: '10%',
                        width: '48%',
                        left: '1%',
                        borderRadius: 100,
                        backgroundColor: colors.orange,
                    },
                    tabBarStyle: {
                        height: 55,
                        justifyContent: 'center',
                        borderRadius: 100,
                        marginVertical: vs(20),
                        marginHorizontal: s(20)
                    },
                    tabBarTabStyle: {
                        borderRadius: 100,
                    },
                    swipeEnabled: true,
                }}
            >
                <ProfileTabNavigator.Screen name="Upcoming" component={MyOrderScreen} />
                <ProfileTabNavigator.Screen name="History" component={OrderHistoryScreen} />
            </ProfileTabNavigator.Navigator>
        </SafeAreaView>
    )

}

export default MyOrder;