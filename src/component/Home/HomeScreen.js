import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from './style';
import {images} from '../../utils/image';
import {DrawerActions, useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const openDrawerClick = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  return (
    <SafeAreaView style={styles.constainer}>
      <TouchableOpacity style={styles.BackImgView} onPress={openDrawerClick}>
        <Image source={images.Menu} style={styles.BackImg} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;
