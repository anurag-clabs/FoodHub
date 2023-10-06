import React from 'react';
import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { commonStyle } from '../../utils/commonStyles';
import { Header } from '../../common/Header/Header';
import { useNavigation } from '@react-navigation/native';
import { styles } from './Style';
import { images } from '../../utils/image';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../utils/colors';
import { FoodData, FoodList } from '../../common/Data/Data';
import { useState } from 'react';
import FavoritesFoodItem from '../../common/FoodItem/FavoritesFoodItem';

const SearchScreen = () => {

  const [selectedFood, setSelectedFood] = useState(null);
  const navigation = useNavigation();
  const handleFoodItemClick = index => {
    setSelectedFood(index);
  };

  const renderItem = () => {
    return FoodData.map((item, index) => (
      <View key={index}>
        <FavoritesFoodItem
          ItemImg={item.ItemImg}
          Price={item.Price}
          Rating={item.Rating}
          FoodName={item.FoodName}
          FoodDescription={item.FoodDescription}
          onPress={() => navigation.navigate('Reviews')}
        />
      </View>
    ))
  }

  return (
    <SafeAreaView styles={commonStyle.constainer}>
      <Header
        Text='Search'
        onPress={() => navigation.goBack()}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={[styles.textInputStyleView, commonStyle.mT20, commonStyle.m_20]}>
        <View style={commonStyle.rowCenter}>
          <Image style={styles.search} source={images.search} />
          <TextInput
            placeholder="Search"
            style={styles.textInputBar}
          />
        </View>
        <TouchableOpacity>
          <Icon name="mic-none" size={22} style={commonStyle.pH10} />
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {FoodList.map((item, index) => {
          const itemStyle = [
            styles.boxElevation,
            selectedFood === index && styles.selectedBoxElevation,
          ];
          const nameStyle = [
            styles.name,
            selectedFood === index && { color: colors.white },
          ];
          return (
            <TouchableOpacity
              onPress={() => handleFoodItemClick(index)}
              key={index}
              style={[itemStyle, commonStyle.mV25]}>
              <Image style={styles.image} source={item.image} />
              <Text style={nameStyle}>{item.title}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <Text style={[styles.headerText, commonStyle.m_20]}>Populer Items</Text>
      <View style={[commonStyle.mT20, commonStyle.pH10, commonStyle.mB40]}>
        {renderItem()}
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SearchScreen;