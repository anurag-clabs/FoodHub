import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {commonStyle} from '../../utils/commonStyles';
import {Header} from '../../common/Header/Header';
import {useNavigation} from '@react-navigation/native';
import {styles} from './style';
import {images} from '../../utils/image';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {FoodData} from '../../common/Data/Data';
import FavoritesFoodItem from '../../common/FoodItem/FavoritesFoodItem';
import CategoriesList from '../../common/Categories/CategoriesList';

const SearchScreen = () => {
  const navigation = useNavigation();

  const renderItem = () => {
    return FoodData.map((item, index) => (
      <View key={index}>
        <FavoritesFoodItem
          itemImg={item.ItemImg}
          price={item.Price}
          rating={item.Rating}
          foodName={item.FoodName}
          foodDescription={item.FoodDescription}
          onPress={() => navigation.navigate('Reviews')}
        />
      </View>
    ));
  };

  return (
    <SafeAreaView styles={commonStyle.constainer}>
      <Header
        text='Search'
        showImage={true}
      />
      <ScrollView showsVerticalScrollIndicator={false} style={commonStyle.mB40}>
        <View style={[styles.textInputStyleView, commonStyle.mT20, commonStyle.m_20]}>
          <View style={commonStyle.rowCenter}>
            <Image style={styles.search} source={images.search} />
            <TextInput placeholder="Search" style={styles.textInputBar} />
          </View>
          <TouchableOpacity>
            <Icon name="mic-none" size={22} style={commonStyle.pH10} />
          </TouchableOpacity>
        </View>
        <View>
          <CategoriesList />
        </View>
        <Text style={[styles.headerText, commonStyle.m_20]}>Populer Items</Text>
        <View style={[commonStyle.mT20, commonStyle.pH10, ]}>
          {renderItem()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;
