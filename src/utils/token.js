import AsyncStorage from '@react-native-async-storage/async-storage';
import {AUTH_TOKEN} from './constant';

export async function getToken() {
  try {
    const userToken = await AsyncStorage.getItem(AUTH_TOKEN);
    return userToken;
  } catch (error) {
    console.error('Error getting user token:', error);
    return null;
  }
}

export const getAndSetToken = updateUserToken => {
  getToken().then(() => {
    AsyncStorage.getItem(AUTH_TOKEN).then(fcmToken => {
      if (fcmToken) {
        updateUserToken(fcmToken);
      }
    });
  });
};
