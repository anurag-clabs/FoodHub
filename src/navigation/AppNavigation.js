import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './StackNavigation';
import FlashMessage from 'react-native-flash-message';

const AppContainer = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default AppContainer;
