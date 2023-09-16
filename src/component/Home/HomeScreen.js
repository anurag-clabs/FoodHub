import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  ImageBackground,
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

const HomeScreen = () => {
  const [selectedFood, setSelectedFood] = useState(null);
  const navigation = useNavigation();
  const openDrawerClick = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  const handleFoodItemClick = index => {
    setSelectedFood(index);
  };
  return (
    <ScrollView>
      <SafeAreaView style={styles.constainer}>
        <View style={styles.HeaderView}>
          <TouchableOpacity
            style={styles.BackImgView}
            onPress={openDrawerClick}>
            <Image source={images.Menu} style={styles.BackImg} />
          </TouchableOpacity>
          <View>
            <View style={styles.TextHeader}>
              <Text style={styles.Deliver}>Deliver to</Text>
              <Image style={styles.HeaderAero} source={images.HeaderAero} />
            </View>
            <Text style={styles.header}>4102 Pretty View Lane </Text>
          </View>
          <View style={styles.ImgView}>
            <Image style={styles.Img} source={images.ProfileImage} />
          </View>
        </View>
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
        <View>
          <ScrollView
            horizontal={true}
            style={{width: '110%'}}
            contentContainerStyle={{marginRight: s(20), paddingRight: s(50)}}
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
        <View style={styles.HeaderView}>
          <Text style={styles.titleRestaurant}>Featured Restaurants</Text>
          <TouchableOpacity style={styles.titleView}>
            <Text style={styles.ViewAll}>View All</Text>
            <Image style={styles.OpenAero} source={images.OpenAero} />
          </TouchableOpacity>
        </View>
        <View>
          <ScrollView
            horizontal={true}
            style={{width: '110%'}}
            contentContainerStyle={{marginRight: s(20), paddingRight: s(50)}}
            showsHorizontalScrollIndicator={false}>
            {Featured_Restaurants.map(item => {
              return (
                <TouchableOpacity style={styles.SecondBoxElevation}>
                  <ImageBackground
                    borderTopRightRadius={15}
                    borderTopLeftRadius={15}
                    style={styles.mainImg}
                    source={item.RestaurantsImg}>
                    <View style={styles.rowSpace}>
                      <View style={styles.Elevation}>
                        <Text style={styles.Reating}>{item.Reating}</Text>
                        <Image style={styles.star} source={item.Star} />
                        <Text style={styles.user}>{item.user}</Text>
                      </View>
                      <Image style={styles.Like} source={item.Like} />
                    </View>
                  </ImageBackground>
                  <View style={commonStyle.f_D_R}>
                    <Text style={styles.Restaurants}>{item.Restaurants}</Text>
                    <Image style={styles.Verified} source={item.Verified} />
                  </View>
                  <View style={[commonStyle.f_D_R]}>
                    <Image
                      style={styles.DeliveryIcon}
                      source={item.DeliveryIcon}
                    />
                    <Text style={[styles.Delivery, {marginRight: 20}]}>
                      {item.Delivery}
                    </Text>
                    <Image style={styles.DeliveryIcon} source={item.TimeIcon} />
                    <Text style={styles.Delivery}>{item.Time}</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.Box}>
                      <Text style={styles.Food}>{item.Burger}</Text>
                    </View>
                    <View style={styles.Box}>
                      <Text style={styles.Food}>{item.Chicken}</Text>
                    </View>
                    <View style={styles.Box}>
                      <Text style={styles.Food}>{item.FastFood}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
          <View style={styles.HeaderView}>
            <Text style={styles.titleRestaurant}>Popular Items</Text>
            <TouchableOpacity style={styles.titleView}>
              <Text style={styles.ViewAll}>View All</Text>
              <Image style={styles.OpenAero} source={images.OpenAero} />
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal={true}
            style={{width: '110%'}}
            contentContainerStyle={{marginRight: s(20), paddingRight: s(50)}}
            showsHorizontalScrollIndicator={false}>
            {PopularItems.map(item => {
              return (
                <TouchableOpacity>
                  <Text>Food</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;
