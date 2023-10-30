import React from 'react';
import { SafeAreaView } from 'react-native'
import { Header } from '../common/Header/Header';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { commonStyle } from '../utils/commonStyles';
import MyOrderScreen from '../component/MyOrder/MyOrderScreen';
import OrderHistoryScreen from '../component/MyOrder/OrderHistoryScreen';
import CustomTabBar from '../navigation/CustomTabBar';

const MyOrder = () => {
    const ProfileTabNavigator = createMaterialTopTabNavigator()

    return (
        <SafeAreaView style={commonStyle.constainer}>
            <Header
                text='My Orders'
                showImage={true}
            />
            <ProfileTabNavigator.Navigator
                tabBar={props => <CustomTabBar {...props} />}
            >
                <ProfileTabNavigator.Screen name="Upcoming" component={MyOrderScreen} />
                <ProfileTabNavigator.Screen name="History" component={OrderHistoryScreen} />
            </ProfileTabNavigator.Navigator>
        </SafeAreaView>
    )

}

export default MyOrder;