import React, { useEffect } from 'react'
import AppContainer from './src/navigation/AppNavigation'
import SplashScreen from 'react-native-splash-screen';

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
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
