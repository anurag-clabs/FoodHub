import React, { useEffect } from 'react'
import AppContainer from './src/navigation/AppNavigation'
import SplashScreen from 'react-native-splash-screen';

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <AppContainer />
  )
}

export default App;