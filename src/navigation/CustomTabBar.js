import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {colors} from '../utils/colors';
import {s, vs} from 'react-native-size-matters';
import {Font} from '../utils/Fonts';

const CustomTabBar = ({state, navigation}) => {
  return (
    <View style={styles.tabBarContainer}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={[styles.tabButton, isFocused && styles.tabButtonFocused]}>
            <Text
              style={[
                styles.tabButtonText,
                isFocused && styles.tabButtonTextFocused,
              ]}>
              {route.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    height: 60,
    borderRadius: 100,
    backgroundColor: colors.white,
    marginTop: vs(10),
    marginBottom: vs(20),
    borderWidth: 1,
    borderColor: colors.whiteGrey,
    marginHorizontal: s(20),
    alignItems: 'center',
    paddingHorizontal: s(5),
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 100,
  },
  tabButtonText: {
    color: colors.orange,
    fontFamily: Font.SofiaProMedium,
    fontSize: 15,
  },
  tabButtonFocused: {
    backgroundColor: colors.orange,
  },
  tabButtonTextFocused: {
    color: 'white',
  },
});
