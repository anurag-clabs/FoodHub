import auth from '@react-native-firebase/auth';
import { saveData } from '../../utils/storage';
import { AUTH_TOKEN } from '../../utils/constant';
import { useNavigation } from '@react-navigation/native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const navigation = useNavigation();

export const handleGoogleSignIn = async () => {

    try {
      await GoogleSignin.hasPlayServices();
      const data = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(data.idToken);
      const res = await auth().signInWithCredential(googleCredential);
      console.log('Google', res.user.email);
      const email = res.user.email;
      
      saveData(AUTH_TOKEN, 'true')
      if (email) {
        navigation.navigate("Drawer");
      } else {
        navigation.navigate("SignUp");
      }
      console.log('Google Sign-In successful');
    } catch (error) {
      console.error('Google Sign-In error:', error);
    }
  };