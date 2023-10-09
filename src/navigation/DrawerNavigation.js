import React, {useContext, useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {images} from '../utils/image';
import {colors} from '../utils/colors';
import LinearGradient from 'react-native-linear-gradient';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawerContent from './CustomDrawerContent';
import AppTabNavigator from './AppTabNavigator';
import {TouchableOpacity as Touch} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CustomDrawerItem from './CustomDrawerItem';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {DrawerAnimationContext} from '../context/DrawerAnimationContext/Index';
import Animated, {Value} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
import {commonStyle} from '../utils/commonStyles';
import Profile from '../Screen/Profile';
import Address from '../Screen/Address';
import Rating from '../Screen/Rating';
import Reviews from '../Screen/Reviews';
import ReviewResturent from '../Screen/ReviewResturent';
import PaymentMethod from '../Screen/PaymentMethod';
import HelpsFAQs from '../Screen/HelpsFAQs';

const Drawer = createDrawerNavigator();
const {width: WIDTH} = Dimensions.get('window');

const DrawerNav = () => {
  const navigation = useNavigation();
  const {progress} = useContext(DrawerAnimationContext);
  const insets = useSafeAreaInsets();

  // const translateX = Animated.interpolate(animatedValue, {
  //   inputRange: [0, 1],
  //   outputRange: [0, WIDTH],
  // });
  // const opacity = Animated.interpolate(progress, {
  //   inputRange: [0, 0.7, 1],
  //   outputRange: [0, 0, 1],
  // });

  return (
    <>
      <View
        style={{
          position: 'absolute',
          elevation: 1,
          zIndex: 2,
          top: Math.max(insets.top, 16),
          left: -WIDTH,
        }}>
        <Animated.View
          style={{
            marginTop: 15,
            // opacity: opacity,
            // transform: [{ translateX: translateX }],
          }}>
          {Platform.OS === 'ios' ? (
            <TouchableOpacity>
              <Image source={images.Payment} style={styles.user} />
              <View>
                <Text style={styles.profileText}>User Name</Text>
                <Text style={styles.books}> Books</Text>
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={commonStyle.rowCenter}>
              <Image source={images.MyProfile} style={styles.user} />
              <View>
                <Text style={styles.profileText}>Profile Name</Text>
                <Text style={styles.books}> Books</Text>
              </View>
            </TouchableOpacity>
          )}
        </Animated.View>
      </View>
      <LinearGradient
        colors={[colors.blue, colors.orange]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={{flex: 1}}>
        <Drawer.Navigator
          screenOptions={{
            headerShown: false, activeTintColor: 'white',
            inactiveTintColor: 'grey',
          }}
          initialRouteName="Screens"
          drawerType={'slide'}
          overlayColor="transparent"
          drawerStyle={{
            width: '70%',
            backgroundColor: 'transparent',
            marginRight: -30,
          }}
          sceneContainerStyle={{
            backgroundColor: 'transparent',
            overflow: 'visible',
            zIndex: 1,
          }}
          drawerContent={(props) => {
            return <CustomDrawerContent {...props} />;
          }}>
          <Drawer.Screen name="Screens">
            {props => {
              return <AppTabNavigator {...props} progress={progress} />;
            }}
          </Drawer.Screen>
          <Drawer.Screen name="Edit-Profile" component={Profile} />
          <Drawer.Screen name="Address" component={Address} />
          <Drawer.Screen name="PaymentMethod" component={PaymentMethod} />
          <Drawer.Screen name="Reviews" component={Reviews} />
          <Drawer.Screen name="ReviewResturent" component={ReviewResturent} />
          <Drawer.Screen name="HelpsFAQ" component={HelpsFAQs} />
        </Drawer.Navigator>
      </LinearGradient>
      <View
        style={{
          position: 'absolute',
          zIndex: 1,
          bottom: Math.max(insets.bottom, 16),
          left: -WIDTH,
        }}>
        <Animated.View
          style={[
            {
              // opacity: opacity,
              // transform: [{ translateX: translateX }],
            },
            commonStyle.rowCenter,
          ]}>
          {Platform.OS === 'ios' ? (
            <TouchableOpacity>
              <CustomDrawerItem
                title={'Settings'}
                icon={
                  <Ionicons name="settings-sharp" color="white" size={26} />
                }
                titleStyle={{color: 'white'}}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity>
              <CustomDrawerItem
                title={'Settings'}
                icon={
                  <Ionicons name="settings-sharp" color="white" size={26} />
                }
                titleStyle={{color: 'white'}}
              />
            </TouchableOpacity>
          )}
          {Platform.OS === 'ios' ? (
            <TouchableOpacity>
              <CustomDrawerItem
                title={'Log Out'}
                icon={
                  <Ionicons name="log-out-outline" color="white" size={26} />
                }
                titleStyle={{color: 'white'}}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity>
              <CustomDrawerItem
                title={'Log Out'}
                icon={
                  <Ionicons name="log-out-outline" color="white" size={26} />
                }
                titleStyle={{color: 'white'}}
              />
            </TouchableOpacity>
          )}
        </Animated.View>
      </View>
    </>
  );
};
export default DrawerNav;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
