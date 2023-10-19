import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  FlatList,
  Modal,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from './style';
import { images } from '../../utils/image';
import { useNavigation } from '@react-navigation/native';
import { commonStyle } from '../../utils/commonStyles';
import {
  Featured_Restaurants,
  FoodList,
  PopularItems,
} from '../../common/Data/Data';
import Resturents from '../../common/Resturents/Resturents';
import FoodItem from '../../common/FoodItem/FoodItem';
import { MenuHeader } from '../../common/Header/Header';
import { colors } from '../../utils/colors';
import FilterScreen from '../Filter/FilterScreen';
import { useDispatch, useSelector } from 'react-redux';
import { GetCategoriesAction } from '../../redux/action/GetCategoriesAction';

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [selectedFood, setSelectedFood] = useState(null);
  const [isFilterModalVisible, setFilterModalVisible] = useState(false);

  const openDrawerClick = () => {
    navigation.openDrawer();
  };
  const handleFoodItemClick = index => {
    setSelectedFood(index);
  };

  const toggleFilterModal = () => {
    setFilterModalVisible(!isFilterModalVisible);
  };

  const handleCategories = () => dispatch(GetCategoriesAction());

  const categories = useSelector(state => state?.GetCatecories?.categoriesGet?.data);

  useEffect(() => {
    handleCategories();
  }, []);

  const renderRestaurants = ({ item }) => (
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

  const renderCategories = ({ item, index }) => {
    console.log('renderCategories Image: ', item.image);
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
        key={index._id}
        style={[itemStyle, commonStyle.mV25]}
      >
        <Image style={styles.image} source={{ uri: item?.image[0] }} />
        <Text style={nameStyle}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const renderFoodItem = ({ item }) => (
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
    <SafeAreaView style={commonStyle.constainer}>
      <MenuHeader
        onPress={openDrawerClick}
        Deliver="Deliver to"
        DeliveryAddress="4102 Pretty View Lane"
        HeaderImg={images.UserProfile}
        HeaderImgstyle={styles.UserImg}
      />
      <ScrollView showsVerticalScrollIndicator={false}>

        <Text style={styles.titleHeader}>
          What would you like {'\n'}to order
        </Text>
        <View style={[commonStyle.rowCenter, commonStyle.mT20, commonStyle.m_20]}>
          <View style={styles.textInputStyleView}>
            <Image style={styles.search} source={images.search} />
            <TextInput
              placeholder="Find for food or restaurant....."
              style={styles.textInputBar}
            />
          </View>
          <TouchableOpacity style={styles.filetBtn} onPress={toggleFilterModal}>
            <Image style={styles.filter} source={images.filter} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={categories}
          keyExtractor={item => item._id}
          renderItem={renderCategories}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <View>
          <View style={styles.HeaderView}>
            <Text style={styles.titleRestaurant}>Featured Restaurants</Text>
            <TouchableOpacity style={styles.titleView}>
              <Text style={styles.ViewAll}>View All</Text>
              <Image style={styles.OpenAero} source={images.OpenAero} />
            </TouchableOpacity>
          </View>
          <FlatList
            contentContainerStyle={commonStyle.pH10}
            data={Featured_Restaurants}
            keyExtractor={item => item.id}
            renderItem={renderRestaurants}
            showsHorizontalScrollIndicator={false}
            horizontal
          />
          <View style={styles.HeaderView}>
            <Text style={styles.titleRestaurant}>Popular Items</Text>
            <TouchableOpacity
              style={styles.titleView}
              onPress={() => navigation.navigate('Category')}
            >
              <Text style={styles.ViewAll}>View All</Text>
              <Image style={styles.OpenAero} source={images.OpenAero} />
            </TouchableOpacity>
          </View>
          <FlatList
            contentContainerStyle={commonStyle.pH10}
            data={PopularItems}
            keyExtractor={item => item.Id}
            renderItem={renderFoodItem}
            showsHorizontalScrollIndicator={false}
            horizontal
          />
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isFilterModalVisible}
          onRequestClose={() => {
            setModalVisible(!isModalVisible);
          }}
        >
          <View style={styles.modalBackground}>
            <FilterScreen onclick={toggleFilterModal} />
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
