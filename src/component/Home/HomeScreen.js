import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  ImageBackground,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import {images} from '../../utils/image';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {s, vs} from 'react-native-size-matters';
import {commonStyle} from '../../utils/commonStyles';
import {
  Featured_Restaurants,
  FoodList,
  PopularItems,
} from '../../common/Data/Data';
import Resturents from '../../common/Resturents/Resturents';
import FoodItem from '../../common/FoodItem/FoodItem';
import Header, {MenuHeader} from '../../common/Header/Header';

const HomeScreen = () => {
  const [selectedFood, setSelectedFood] = useState(null);
  const navigation = useNavigation();
  const openDrawerClick = () => {
    navigation.openDrawer();
  };
  const handleFoodItemClick = index => {
    setSelectedFood(index);
  };

  const renderRestaurants = ({item}) => (
    <View style={commonStyle.v_10}>
      <Resturents
        BackgroundImg={item.BackgroundImg}
        RestaurantName={item.RestaurantName}
        Rating={item.Rating}
        Verified={item.Verified}
        DeliveryIcon={item.DeliveryIcon}
        DeliveryOption={item.DeliveryOption}
        TimeIcon={item.TimeIcon}
        DeliveryTime={item.DeliveryTime}
        Burger={item.Burger}
        Chicken={item.Chicken}
        FastFood={item.FastFood}
        onPress={() => navigation.navigate('Reviews')}
      />
    </View>
  );

  const renderFoodItem = ({item}) => (
    <View style={[commonStyle.v_10]}>
      <FoodItem
        ItemImg={item.ItemImg}
        Price={item.Price}
        Rating={item.Rating}
        FoodName={item.FoodName}
        FoodDescription={item.FoodDescription}
        onPress={() => navigation.navigate('Reviews')}
      />
    </View>
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView style={commonStyle.constainer}>
        <MenuHeader
          onPress={openDrawerClick}
          Deliver="Deliver to"
          DeliveryAddress="4102 Pretty View Lane"
          HeaderImg={images.UserProfile}
          HeaderImgstyle={styles.UserImg}
        />
        <Text style={styles.titleHeader}>
          What would you like {'\n'}to order
        </Text>
        <View style={commonStyle.f_D_R}>
          <View style={styles.textInputStyle}>
            <Image style={styles.search} source={images.search} />
            <TextInput placeholder="Find for food or restaurant..." />
          </View>
          <TouchableOpacity>
            <Image style={styles.filter} source={images.filter} />
          </TouchableOpacity>
        </View>
        <View style={commonStyle.m_20}>
          <ScrollView
            horizontal={true}
            style={{width: '110%'}}
            contentContainerStyle={{
              marginRight: s(20),
              paddingRight: s(50),
              marginBottom: vs(20),
            }}
            showsHorizontalScrollIndicator={false}>
            {FoodList.map((item, index) => {
              const itemStyle = [
                styles.boxElevation,
                selectedFood === index && {backgroundColor: '#FE724C'},
              ];
              const nameStyle = [
                styles.name,
                selectedFood === index && {color: '#fff'},
              ];
              return (
                <TouchableOpacity
                  onPress={() => handleFoodItemClick(index)}
                  key={index}
                  style={itemStyle}>
                  <Image style={styles.image} source={item.image} />
                  <Text style={nameStyle}>{item.title}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        <View>
          <View style={styles.HeaderView}>
            <Text style={styles.titleRestaurant}>Featured Restaurants</Text>
            <TouchableOpacity style={styles.titleView}>
              <Text style={styles.ViewAll}>View All</Text>
              <Image style={styles.OpenAero} source={images.OpenAero} />
            </TouchableOpacity>
          </View>
          <FlatList
            contentContainerStyle={{paddingHorizontal: s(10)}}
            data={Featured_Restaurants}
            keyExtractor={item => item.id}
            renderItem={renderRestaurants}
            showsHorizontalScrollIndicator={false}
            horizontal
          />
          <View style={styles.HeaderView}>
            <Text style={styles.titleRestaurant}>Popular Items</Text>
            <TouchableOpacity style={styles.titleView}>
              <Text style={styles.ViewAll}>View All</Text>
              <Image style={styles.OpenAero} source={images.OpenAero} />
            </TouchableOpacity>
          </View>
          <FlatList
            contentContainerStyle={{paddingHorizontal: s(10)}}
            data={PopularItems}
            keyExtractor={item => item.Id}
            renderItem={renderFoodItem}
            showsHorizontalScrollIndicator={false}
            horizontal
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;
