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
import React, {useState, useEffect} from 'react';
import {styles} from './style';
import {images} from '../../utils/image';
import {useNavigation} from '@react-navigation/native';
import {commonStyle} from '../../utils/commonStyles';
import {Featured_Restaurants, PopularItems} from '../../common/Data/Data';
import Resturents from '../../common/Resturents/Resturents';
import FoodItem from '../../common/FoodItem/FoodItem';
import {MenuHeader} from '../../common/Header/Header';
import FilterScreen from '../Filter/FilterScreen';
import {useDispatch} from 'react-redux';
import {GetCategoriesAction} from '../../redux/action/GetCategoriesAction';
import CategoriesList from '../../common/Categories/CategoriesList';

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isFilterModalVisible, setFilterModalVisible] = useState(false);

  const openDrawerClick = () => {
    navigation.openDrawer();
  };

  const toggleFilterModal = () => {
    setFilterModalVisible(!isFilterModalVisible);
  };

  const handleCategories = () => dispatch(GetCategoriesAction());

  useEffect(() => {
    handleCategories();
  }, []);

  const renderRestaurants = ({item}) => (
    <View style={commonStyle.v_10}>
      <Resturents
        backgroundImg={item.BackgroundImg}
        restaurantName={item.RestaurantName}
        rating={item.Rating}
        verified={item.Verified}
        deliveryIcon={item.DeliveryIcon}
        deliveryOption={item.DeliveryOption}
        timeIcon={item.TimeIcon}
        deliveryTime={item.DeliveryTime}
        burger={item.Burger}
        chicken={item.Chicken}
        fastFood={item.FastFood}
        onPress={() => navigation.navigate('Reviews')}
      />
    </View>
  );

  const renderFoodItem = ({item}) => (
    <View style={[commonStyle.v_10]}>
      <FoodItem
        itemImg={item.ItemImg}
        price={item.Price}
        rating={item.Rating}
        foodName={item.FoodName}
        foodDescription={item.FoodDescription}
        onPress={() => navigation.navigate('Reviews')}
      />
    </View>
  );

  return (
    <SafeAreaView style={commonStyle.constainer}>
      <MenuHeader
        onPress={openDrawerClick}
        deliver="Deliver to"
        deliveryAddress="4102 Pretty View Lane"
        showImage={true}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.titleHeader}>
          What would you like {'\n'}to order
        </Text>
        <View
          style={[commonStyle.rowCenter, commonStyle.mT20, commonStyle.m_20]}>
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
        <CategoriesList />
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
              onPress={() => navigation.navigate('Category')}>
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
            setFilterModalVisible(!isFilterModalVisible);
          }}>
          <View style={styles.modalBackground}>
            <FilterScreen onclick={toggleFilterModal} />
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
