import React, { useEffect } from 'react'
import AppContainer from './src/navigation/AppNavigation'
import SplashScreen from 'react-native-splash-screen';
import { DrawerAnimationProvider } from './src/context/DrawerAnimationContext/DrawerAnimationProvider';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide()
    }, 1000)
  }, []);

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
