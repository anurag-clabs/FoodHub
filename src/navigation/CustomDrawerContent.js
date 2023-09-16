/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { images } from '../utils/image';
import CustomDrawerItem from './CustomDrawerItem';
import { ms, s, vs } from 'react-native-size-matters';
import DrawerAnimationContext from '../context/DrawerAnimationContext/Context';
import { colors } from '../utils/colors';
import { Font } from '../utils/Fonts';

const CustomDrawerContent = props => {
  const { progress, navigation } = props;
  const { setProgress } = useContext(DrawerAnimationContext);

  useEffect(() => {
    progress && setProgress(progress);
  }, [progress]);
  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled={false}
      contentContainerStyle={styles.drawerView}>
      <View style={styles.ProfileView}>
        <Image source={images.UserProfile} style={styles.ProfileImage} />
          <Text style={styles.profileText}>Farion Wick</Text>
          <Text style={{fontFamily: Font.sofiaProMedium}}>farionwick@gmail.com</Text>
      </View>
      <View style={styles.drawerContent}>
        <CustomDrawerItem
          title="My Orders"
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
        onPress={() => navigation.navigate('Address')}
        />
        <CustomDrawerItem
          title="Payment Methods"
          icon={<Image source={images.Payment} style={styles.drawerImage} />}
        onPress={() => navigation.navigate('Rating')}
        />
        <CustomDrawerItem
          title="Contact Us"
          icon={<Image source={images.Message} style={styles.drawerImage} />}
        onPress={() => navigation.navigate('ReviewResturent')}
        />
        <CustomDrawerItem
          title="Settings"
          icon={<Image source={images.Setting} style={styles.drawerImage} />}
        // onPress={() => navigation.navigate('About')}
        />
        <CustomDrawerItem
          title="Helps & FAQs"
          icon={
            <Image
              source={images.Helps}
              style={[styles.drawerImage,]}
            />
          }
        // onPress={() => navigation.navigate('Feedback')}
        />
      </View>
      <View style={styles.LogoutView}>
        <Image source={images.Logout} style={styles.drawerImage}/>
        <Text style={styles.LogoutTxt}>Log Out</Text>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  ProfileView: {
    marginTop: vs(25),
    marginHorizontal: s(20),
    justifyContent: 'flex-start'
  },
  ProfileImage: {
    height: ms(80),
    width: ms(80),
    borderRadius: s(80) / 2,
    resizeMode: 'contain',
  },
  profileText: {
    color: colors.black,
    fontSize: 20,
    fontFamily: Font.SofiaProBold,
    marginTop: vs(10)
  },
  drawerContent: {
    marginVertical: vs(15),
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
  LogoutView: {
    marginHorizontal: s(20),
    backgroundColor: colors.orange,
    flexDirection: 'row',
    borderRadius: 25,
    height: vs(35),
    width: s(90),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 15,
    left: 0,
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowColor: colors.orange,
    shadowOffset: { width: -2, height: 4 },
    elevation: 10,
  },
  LogoutTxt: {
    fontFamily: Font.sofiaProMedium,
    color: colors.white,
    marginHorizontal: s(5)
  }
});
export default CustomDrawerContent;
