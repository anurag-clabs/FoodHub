import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Authatication = () => {
  const navigation = useNavigation();
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [userToken, setUserToken] = useState('');

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const storedUserEmail = await AsyncStorage.getItem('userEmail');
        const storedUserName = await AsyncStorage.getItem('userName');
        const storedUserToken = await AsyncStorage.getItem('userToken');
        if (storedUserEmail?.length) {
          setUserEmail(storedUserEmail);
        }
        if (storedUserName?.length) {
          setUserName(storedUserName);
        }
        if (storedUserToken?.length) {
          setUserToken(storedUserToken);
        }
        if (storedUserToken && storedUserName && storedUserEmail) {
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
