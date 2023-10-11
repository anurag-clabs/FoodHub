import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getToken() {
    try {
        const userToken = await AsyncStorage.getItem('userToken');
        return userToken;
      } catch (error) {
        console.error('Error getting user token:', error);
        return null;
      }
}

export const getAndSetToken = updateUserToken => {
    getToken().then(() => {
      AsyncStorage.getItem('userToken').then(fcmToken => {
        if (fcmToken) {
          updateUserToken(fcmToken);
        }
      });
    });
  };
  