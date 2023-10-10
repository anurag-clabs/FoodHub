import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Authatication = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const userData = await AsyncStorage.getItem('userData');
        if (userData?.length) {
          navigation.navigate('Drawer');
        } else {
          navigation.navigate('Welcome');
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
