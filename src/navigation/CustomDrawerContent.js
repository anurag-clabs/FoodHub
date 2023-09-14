/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {images} from '../utils/image';
import CustomDrawerItem from './CustomDrawerItem';
import {s, vs} from 'react-native-size-matters';
import DrawerAnimationContext from '../context/DrawerAnimationContext/Context';

const CustomDrawerContent = props => {
  const {progress, navigation} = props;
  const {setProgress} = useContext(DrawerAnimationContext);

  useEffect(() => {
    progress && setProgress(progress);
  }, [progress]);
  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled={false}
      contentContainerStyle={styles.drawerView}>
      <View style={{flexGrow: 1}} />
      <CustomDrawerItem
        title="My Order"
        icon={<Image source={images.MyOrder} style={styles.drawerImage} />}
        onPress={() => navigation.navigate('Home')}
      />
      <CustomDrawerItem
        title="My Profile"
        icon={<Image source={images.MyProfile} style={styles.drawerImage} />}
        onPress={() => navigation.navigate('Profile')}
      />
      <CustomDrawerItem
        title="Delivery Address"
        icon={<Image source={images.Location} style={styles.drawerImage} />}
        // onPress={() => navigation.navigate('BookNear')}
      />
      <CustomDrawerItem
        title="Payment Methods"
        icon={<Image source={images.Payment} style={styles.drawerImage} />}
        // onPress={() => navigation.navigate('Faq')}
      />
      <CustomDrawerItem
        title="About Us"
        icon={<Image source={images.Message} style={styles.drawerImage} />}
        // onPress={() => navigation.navigate('About')}
      />
      <CustomDrawerItem
        title="About Us"
        icon={<Image source={images.Setting} style={styles.drawerImage} />}
        // onPress={() => navigation.navigate('About')}
      />
      <CustomDrawerItem
        title="Feedback"
        icon={
          <Image
            source={images.Helps}
            style={[styles.drawerImage, {tintColor: 'white'}]}
          />
        }
        // onPress={() => navigation.navigate('Feedback')}
      />
      <View style={{flexGrow: 1}} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  user: {
    height: vs(30),
    width: s(30),
    resizeMode: 'contain',
    marginHorizontal: s(20),
  },
  profileText: {
    color: 'white',
    fontSize: vs(20),
  },
  drawerView: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingBottom: 90,
    overflow: 'visible',
  },
  drawerImage: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
  topTabView: {
    position: 'absolute',
    height: '100%',
    overflow: 'hidden',
    backgroundColor: 'white',
    opacity: 0.4,
    zIndex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  books: {
    color: '#7ea9a9',
    fontSize: vs(12),
  },
});
export default CustomDrawerContent;
