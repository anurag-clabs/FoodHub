import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Authatication = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const userLoggedIn = await AsyncStorage.getItem('userLoggedIn');
        if (userLoggedIn === 'true') {
          navigation.navigate('Drawer');
        } else {
          navigation.navigate('Login');
        }
      } catch (error) {
        console.error('Error checking userLoggedIn state:', error);
      }
    };

    checkAuthentication();
  }, [navigation]); 

  return null; 
};

export default Authatication;
