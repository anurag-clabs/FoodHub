import React, {useEffect} from 'react';
import AppContainer from './src/navigation/AppNavigation';
import SplashScreen from 'react-native-splash-screen';
import {DrawerAnimationProvider} from './src/context/DrawerAnimationContext/DrawerAnimationProvider';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import configureStore from './src/redux/configureStore';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={configureStore}>
      <DrawerAnimationProvider>
        <SafeAreaProvider>
          <AppContainer />
        </SafeAreaProvider>
      </DrawerAnimationProvider>
      </Provider>
  );
};

export default App;
