import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {s, vs} from 'react-native-size-matters';

const CustomDrawerItem = props => {
  const {title, icon, titleStyle, ...touchableProps} = props;
  return (
    <TouchableOpacity style={[styles.container]} {...touchableProps}>
      <View style={styles.icon}>{icon}</View>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};
export default CustomDrawerItem;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    paddingVertical: vs(15),
  },
  icon: {
    height: vs(25),
    width: s(25),
    resizeMode: 'contain',
    marginLeft: s(15),
    marginRight: s(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: vs(18),
    color: 'white',
  },
});
