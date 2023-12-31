/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { images } from '../utils/image';
import CustomDrawerItem from './CustomDrawerItem';
import { ms, s, vs } from 'react-native-size-matters';
import DrawerAnimationContext from '../context/DrawerAnimationContext/Context';
import { colors } from '../utils/colors';
import { Font } from '../utils/Fonts';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { removeToken } from '../httpclient/httpclient/clientHelper';
import { AUTH_TOKEN } from '../utils/constant';
import { removeItem } from '../utils/storage';
import { useSelector } from 'react-redux';

const CustomDrawerContent = props => {
  const { progress, navigation } = props;
  const { setProgress } = useContext(DrawerAnimationContext);

  const getUserDetail = useSelector(state => state?.GetUserDetail?.profileData);

  const handleLogout = async () => {
    removeItem(AUTH_TOKEN)
    removeToken(AUTH_TOKEN);
    navigation.navigate('Welcome');
  };

  useEffect(() => {
    progress && setProgress(progress);
  }, [progress]);

  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled={false}
      contentContainerStyle={styles.drawerView}>
      <View style={styles.ProfileView}>
        <Image
          source={
            getUserDetail?.image?.length > 0 ?
              { uri: getUserDetail?.image } : images.UserProfile}
          style={styles.ProfileImage}
        />
        <Text style={styles.profileText}>{getUserDetail?.name || 'User Name'}</Text>
        <Text style={{ fontFamily: Font.SofiaProMedium }}>{getUserDetail?.email || 'Email'}</Text>
      </View>
      <View style={styles.drawerContent}>
        <CustomDrawerItem
          title="My Orders"
          icon={<Image source={images.MyOrder} style={styles.drawerImage} />}
          onPress={() => navigation.navigate('Category')}
        />
        <CustomDrawerItem
          title="My Profile"
          icon={<Image source={images.MyProfile} style={styles.drawerImage} />}
          onPress={() => navigation.navigate('Edit-Profile')}
        />
        <CustomDrawerItem
          title="Delivery Address"
          icon={<Image source={images.Location} style={styles.drawerImage} />}
          onPress={() => navigation.navigate('Address')}
        />
        <CustomDrawerItem
          title="Payment Methods"
          icon={<Image source={images.Payment} style={styles.drawerImage} />}
          onPress={() => navigation.navigate('PaymentMethod')}
        />
        <CustomDrawerItem
          title="Contact Us"
          icon={<Image source={images.Message} style={styles.drawerImage} />}
          onPress={() => navigation.navigate('Contact')}
        />
        <CustomDrawerItem
          title="Settings"
          icon={<Image source={images.Setting} style={styles.drawerImage} />}
          onPress={() => navigation.navigate('Setting')}
        />
        <CustomDrawerItem
          title="Helps & FAQs"
          icon={<Image source={images.Helps} style={[styles.drawerImage]} />}
          onPress={() => navigation.navigate('HelpsFAQ')}
        />
      </View>
      <TouchableOpacity
        style={styles.LogoutView}
        onPress={handleLogout}>
        <Image source={images.Logout} style={styles.drawerImage} />
        <Text style={styles.LogoutTxt}>Log Out</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  ProfileView: {
    marginTop: vs(25),
    marginHorizontal: s(20),
    justifyContent: 'flex-start',
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
    marginTop: vs(10),
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
    marginTop: vs(40),
    marginHorizontal: s(20),
    backgroundColor: colors.orange,
    flexDirection: 'row',
    borderRadius: 25,
    height: vs(35),
    width: s(90),
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowColor: colors.orange,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  LogoutTxt: {
    fontFamily: Font.SofiaProMedium,
    color: colors.white,
    marginHorizontal: s(5),
  },
});
export default CustomDrawerContent;
