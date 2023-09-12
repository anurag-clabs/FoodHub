import React, {useContext, useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {TabButton} from './TabButton';
import {logOutTab, tabs} from '../utils/tab';
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

const Drawer = createDrawerNavigator();
const {width: WIDTH} = Dimensions.get('window');

export default function App() {
  const [currentTab, setCurrentTab] = useState('Home');
  const [showMenu, setShowMenu] = useState(false);
  const {progress} = useContext(DrawerAnimationContext);

  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;
  const insets = useSafeAreaInsets();

  const translateX = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, WIDTH],
  });
  const opacity = Animated.interpolate(progress, {
    inputRange: [0, 0.7, 1],
    outputRange: [0, 0, 1],
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={{justifyContent: 'flex-start', padding: 15}}>
        <Image
          source={images.facebook}
          style={{
            width: 70,
            height: 70,
            borderRadius: 10,
            marginTop: 8,
          }}
        />

        <View style={{flexGrow: 1, marginTop: 50}}>
          {
            // Tab Bar Buttons....
          }
          {tabs.map(item => {
            return (
              <TabButton
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
                text={item.text}
                icon={item.icon}
                key={item.id}
              />
            );
          })}
        </View>

        <View>
          <TabButton
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            text={logOutTab.text}
            icon={logOutTab.icon}
            key={logOutTab.id}
          />
        </View>
      </View>

      <Animated.View
        style={{
          flexGrow: 1,
          backgroundColor: 'white',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          paddingHorizontal: 15,
          paddingVertical: 20,
          borderRadius: showMenu ? 15 : 0,
          transform: [{scale: scaleValue}, {translateX: offsetValue}],
        }}>
        {
          // Menu Button...
        }

        <Animated.View
          style={{
            transform: [
              {
                translateY: closeButtonOffset,
              },
            ],
          }}>
          <TouchableOpacity
            onPress={() => {
              Animated.timing(scaleValue, {
                toValue: showMenu ? 1 : 0.55,
                duration: 300,
                useNativeDriver: true,
              }).start();

              Animated.timing(offsetValue, {
                toValue: showMenu ? 0 : 400,
                duration: 300,
                useNativeDriver: true,
              }).start();

              Animated.timing(closeButtonOffset, {
                toValue: !showMenu ? -30 : 0,
                duration: 300,
                useNativeDriver: true,
              }).start();

              setShowMenu(!showMenu);
            }}>
            <Image
              source={images.Menu}
              style={{
                width: 20,
                height: 20,
                tintColor: 'black',
                marginTop: 40,
              }}
            />
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: 'black',
              paddingTop: 20,
            }}>
            tabTitle
          </Text>
        </Animated.View>
      </Animated.View>
      <LinearGradient
        colors={[colors.blue, colors.orange]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={{flex: 1}}>
        <Drawer.Navigator
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
          drawerContentOptions={{
            activeTintColor: 'white',
            inactiveTintColor: 'grey',
          }}
          drawerContent={props => {
            return <CustomDrawerContent {...props} />;
          }}
        />
        <Drawer.Screen name="Screens">
          {props => {
            return <AppTabNavigator {...props} progress={progress} />;
          }}
        </Drawer.Screen>
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
              opacity: opacity,
              transform: [{translateX: translateX}],
            },
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
            <Touch>
              <CustomDrawerItem
                title={'Settings'}
                icon={
                  <Ionicons name="settings-sharp" color="white" size={26} />
                }
                titleStyle={{color: 'white'}}
              />
            </Touch>
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
            <Touch>
              <CustomDrawerItem
                title={'Log Out'}
                icon={
                  <Ionicons name="log-out-outline" color="white" size={26} />
                }
                titleStyle={{color: 'white'}}
              />
            </Touch>
          )}
        </Animated.View>
      </View>
    </SafeAreaView>
  );
}

// For multiple Buttons...

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
