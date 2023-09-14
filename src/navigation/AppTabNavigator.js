/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {AnimatedTabBarNavigator} from 'react-native-animated-nav-tab-bar';
import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';
import {DrawerAnimationContext} from '../context/DrawerAnimationContext/Index';
import {vs, s} from 'react-native-size-matters';
import PhoneRegistration from '../Screen/PhoneRegistration';
import Login from '../Screen/Login';
import Welcome from '../Screen/Welcome';
import RessetPassword from '../Screen/RessetPassword';
import {StyleSheet} from 'react-native';
import {colors} from '../utils/colors';
import Home from '../Screen/Home';

const AppTabNavigator = () => {
  const Tabs = AnimatedTabBarNavigator();
  const {progress} = React.useContext(DrawerAnimationContext);

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
          // borderRadius: borderRadius,
          overflow: 'hidden',
        }}>
        <Tabs.Navigator
          initialRouteName="Home"
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Donate') {
                iconName = focused
                  ? 'add-circle-outline'
                  : 'add-circle-outline';
              } else if (route.name === 'Search') {
                iconName = focused ? 'search' : 'search-outline';
              } else if (route.name === 'Explore') {
                iconName = focused ? 'compass' : 'compass-outline';
              } else if (route.name === 'Chat') {
                iconName = focused ? 'chatbubble' : 'chatbubble-outline';
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            keyboardHidesTabBar: true,
            activeTintColor: 'white',
            inactiveTintColor: 'grey',
            activeBackgroundColor: colors.orange,
            labelStyle: {
              fontSize: vs(12),
            },
          }}>
          <Tabs.Screen name="Home" component={Home} />
          <Tabs.Screen name="Search" component={PhoneRegistration} />
          <Tabs.Screen name="Donate" component={Login} />
          <Tabs.Screen name="Explore" component={Welcome} />
          <Tabs.Screen
            name="Chat"
            component={RessetPassword}
            options={{title: 'Inbox'}}
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
