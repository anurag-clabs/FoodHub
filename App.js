import React from 'react';
import AppContainer from './src/navigation/AppNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {DrawerAnimationProvider} from './src/context/DrawerAnimationContext/DrawerAnimationProvider';

const App = () => {
  return (
    <>
      <DrawerAnimationProvider>
        <SafeAreaProvider>
          <AppContainer />
        </SafeAreaProvider>
      </DrawerAnimationProvider>
    </>
  );
};

export default App;
