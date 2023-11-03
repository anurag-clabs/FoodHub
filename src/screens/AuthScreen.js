import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {readData} from '../utils/storage';
import {AUTH_TOKEN} from '../utils/constant';
import {View} from 'react-native';
import {setToken} from '../httpclient/httpclient/clientHelper';

const Authatication = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const checkAuthentication = async () => {
      const isToken = await readData(AUTH_TOKEN);
      console.log('isToken', isToken);
      if (isToken) {
        setToken(isToken);
        navigation.reset({
          index: 0,
          routes: [{name: 'Drawer'}],
        });
      } else {
        navigation.navigate('Welcome');
      }
    };
    checkAuthentication();
  }, []);

  return <View />;
};

export default Authatication;
