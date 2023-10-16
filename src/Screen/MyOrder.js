import React from 'react';
import { SafeAreaView } from 'react-native'
import { Header } from '../common/Header/Header';
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { commonStyle } from '../utils/commonStyles';
import { images } from '../utils/image';
import MyOrderScreen from '../component/MyOrder/MyOrderScreen';
import OrderHistoryScreen from '../component/MyOrder/OrderHistoryScreen';
import CustomTabBar from '../navigation/CustomTabBar';

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
                tabBar={props => <CustomTabBar {...props} />}
            >
                <ProfileTabNavigator.Screen name="Upcoming" component={MyOrderScreen} />
                <ProfileTabNavigator.Screen name="History" component={OrderHistoryScreen} />
            </ProfileTabNavigator.Navigator>
        </SafeAreaView>
    )

}

export default MyOrder;