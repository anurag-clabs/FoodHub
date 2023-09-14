import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import {styles} from './style';
import {images} from '../../utils/image';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {s, vs} from 'react-native-size-matters';
import {commonStyle} from '../../utils/commonStyles';
import {FoodList} from '../../common/Data/Data';

const HomeScreen = () => {
  const navigation = useNavigation();
  const openDrawerClick = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  return (
    <SafeAreaView style={styles.constainer}>
      <View style={styles.HeaderView}>
        <TouchableOpacity style={styles.BackImgView} onPress={openDrawerClick}>
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
      <Text style={styles.titleHeader}>What would you like {'\n'}to order</Text>
      <View style={{flexDirection: 'row'}}>
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
          {FoodList.map(item => {
            return (
              <TouchableOpacity style={styles.boxElevation}>
                <Image style={styles.image} source={item.image} />
                <Text style={styles.name}>{item.title}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
