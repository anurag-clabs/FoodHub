import {SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import {commonStyle} from '../../utils/commonStyles';
import {OrderHistoryData} from '../../common/Data/Data';
import OrderHistory from '../../common/OrderHistory/OrderHistory';

const OrderHistoryScreen = () => {
  const renderOrderHistory = ({item}) => (
    <OrderHistory
      restaurantName={item.RestaurantName}
      restaurantImage={item.RestaurantImage}
      orderDate={item.OrderDate}
      orderPrice={item.OrderPrice}
      items={item.Items}
    />
  );

  return (
    <SafeAreaView style={commonStyle.constainer}>
      <FlatList
        data={OrderHistoryData}
        renderItem={renderOrderHistory}
        keyExtractor={item => item.Id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default OrderHistoryScreen;
