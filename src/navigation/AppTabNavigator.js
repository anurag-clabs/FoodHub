import React from 'react';
import { AnimatedTabBarNavigator } from 'react-native-animated-nav-tab-bar';
import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerAnimationContext } from '../context/DrawerAnimationContext/Index';
import { vs, s } from 'react-native-size-matters';
import { StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
import Home from '../Screen/Home';
import FavoritesFood from '../Screen/FavoritesFood';
import { Font } from '../utils/Fonts';
import MyOrder from '../Screen/MyOrder';
import Cart from '../Screen/Cart';
import Search from '../Screen/Search';

const AppTabNavigator = () => {
  const Tabs = AnimatedTabBarNavigator();
  const { progress } = React.useContext(DrawerAnimationContext);

  // const scale = Animated.interpolate(progress, {
  //   inputRange: [0, 1],
  //   outputRange: [1, 0.73],
  // });
  // const backgroundScreen = Animated.interpolate(progress, {
  //   inputRange: [0, 1],
  //   outputRange: [1, 0.85],
  // });
  // const translateX = Animated.interpolate(progress, {
  //   inputRange: [0, 1],
  //   outputRange: [0, -85],
  // });
  // const translateXContainer = Animated.interpolate(progress, {
  //   inputRange: [0, 1],
  //   outputRange: [0, 0],
  // });
  // const borderRadius = Animated.interpolate(progress, {
  //   inputRange: [0, 1],
  //   outputRange: [0, 30],
  // });
  return (
    <Animated.View
      style={{
        flex: 1,
        justifyContent: 'center',
        // transform: [{scale: scale}, {translateX: translateXContainer}],
      }}>
      <Animated.View
        style={[
          styles.topTabView,
          {
            // borderRadius: borderRadius,
            // transform: [{translateX: translateX}, {scale: backgroundScreen}],
          },
        ]}
      />
      <Animated.View
        style={{
          flex: 1,
        }}>
        <Tabs.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            headerShown: false,
            keyboardHidesTabBar: true,
            activeTintColor: 'white',
            inactiveTintColor: 'grey',
            activeBackgroundColor: colors.orange,
            labelStyle: {
              fontFamily: Font.SofiaProMedium
            },
          }}>
          <Tabs.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <Icon
                  name={focused ? 'compass' : 'compass-outline'}
                  size={size}
                  color={color}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="Search"
            component={Search}
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <Icon
                  name={focused ? 'search-circle' : 'search'}
                  size={size}
                  color={color}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="Cart"
            component={Cart}
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <Icon
                  name={focused ? 'bag' : 'bag-outline'}
                  size={size}
                  color={color}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="Favorites"
            component={FavoritesFood}
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <Icon
                  name={focused ? 'heart' : 'heart-outline'}
                  size={size}
                  color={color}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="Notifications"
            component={MyOrder}
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <Icon
                  name={focused ? 'notifications' : 'notifications-outline'}
                  size={size}
                  color={color}
                />
              ),
            }}
          />
        </Tabs.Navigator>
      </Animated.View>
    </Animated.View>
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

export default AppTabNavigator;
