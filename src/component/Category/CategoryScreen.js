import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import {BackButton} from '../../common/Button/Button';
import {useNavigation} from '@react-navigation/native';
import {styles} from './style';
import {images} from '../../utils/image';
import {s, vs} from 'react-native-size-matters';
import FavoritesFoodItem from '../../common/FoodItem/FavoritesFoodItem';
import {FoodData} from '../../common/Data/Data';
import {commonStyle} from '../../utils/commonStyles';

const CategoryScreen = () => {
  const navigation = useNavigation();
  const renderItem = ({item}) => (
    <FavoritesFoodItem
      ItemImg={item.ItemImg}
      Price={item.Price}
      Rating={item.Rating}
      FoodName={item.FoodName}
      FoodDescription={item.FoodDescription}
      onPress={() => navigation.navigate('Reviews')}
    />
  );
  return (
    <ScrollView style={commonStyle.mT30}>
      <View style={styles.headerView}>
        <View style={{flexDirection: 'column'}}>
          <BackButton
            style={styles.BackImgView}
            onPress={() => navigation.goBack()}
          />
          <View style={{marginTop: vs(30), marginLeft: s(20)}}>
            <Text style={styles.Fast}>Fast</Text>
            <Text style={styles.Food}>Food</Text>
            <Text style={styles.PizzaType}>80 type of pizza</Text>
          </View>
        </View>
        <Image style={styles.BackGroundImg} source={images.BackGroundPizza} />
      </View>
      <View style={styles.HeaderView}>
        <Text style={styles.title}>
          Short by:
          <Text style={styles.Popular}> Popular </Text>
          <Image style={styles.Aero} source={images.Aero} />
        </Text>
        <TouchableOpacity>
          <Image style={styles.filter} source={images.filter} />
        </TouchableOpacity>
      </View>
      <FlatList
        contentContainerStyle={{marginHorizontal: s(10)}}
        data={FoodData}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </ScrollView>
  );
};

export default CategoryScreen;
