import { View, Text } from 'react-native'
import React from 'react'
import { images } from '../../utils/image';

const FoodCartItem = () => {
  return (
    <View>
      <Image source={images.ChickenHawaiian} />
    </View>
  )
}

export default FoodCartItem;