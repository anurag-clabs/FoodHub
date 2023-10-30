import React from 'react';
import { View, Text, FlatList, SafeAreaView, ScrollView } from 'react-native';
import { commonStyle } from '../../utils/commonStyles';
import { OrderHistoryData, UpcomingOrder } from '../../common/Data/Data';
import OrderDetail from '../../common/UpcomingOrder/OrderDetail';
import OrderHistory from '../../common/OrderHistory/OrderHistory';
import { styles } from './style';

const FavoriteResturentScreen = () => {

  const renderUpcomingOrder = () => {
    return UpcomingOrder.map((item) => (
      <OrderDetail
        key={item.Id}
        restaurantName={item.RestaurantName}
        restaurantImage={item.RestaurantImage}
        estimateTime={item.EstimateTime}
        items={item.Items}
        orderNumber={item.OrderNumber}
      />
    ));
    }

    const renderOrderHistory = () => {
      return OrderHistoryData.map((item) => (
        <OrderHistory
          key={item.Id}
          restaurantName={item.RestaurantName}
          restaurantImage={item.RestaurantImage}
          orderDate={item.OrderDate}
          orderPrice={item.OrderPrice}
          items={item.Items}
        />
      ));
    };

  return (
    <SafeAreaView style={commonStyle.constainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
      {renderUpcomingOrder()}
      <View>
        <Text style={[styles.lastedTxt, commonStyle.m_20, commonStyle.v_10]}>Lasted Orders</Text>
          {renderOrderHistory()}
          </View>
          </ScrollView>
    </SafeAreaView>
  )
}

export default FavoriteResturentScreen;