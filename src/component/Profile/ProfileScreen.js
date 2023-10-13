import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './style';
import { images } from '../../utils/image';
import { commonStyle } from '../../utils/commonStyles';
import { useNavigation } from '@react-navigation/native';
import { Font } from '../../utils/Fonts';
import { BackButton, Button } from '../../common/Button/Button';
import { colors } from '../../utils/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [isFirstNameFocused, setIsFirstNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPhoneNumberFocused, setIsPhoneNumberFocused] = useState(false);
  const [isLocationFocused, setIsLocationFocused] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');

  const handleFirstNameFocus = () => {
    setIsFirstNameFocused(true);
    setIsEmailFocused(false);
    setIsPhoneNumberFocused(false);
    setIsLocationFocused(false);
  };

  const handleEmailFocus = () => {
    setIsFirstNameFocused(false);
    setIsEmailFocused(true);
    setIsPhoneNumberFocused(false);
    setIsLocationFocused(false);
  };

  const handlePhoneNumberFocus = () => {
    setIsFirstNameFocused(false);
    setIsEmailFocused(false);
    setIsPhoneNumberFocused(true);
    setIsLocationFocused(false);
  };
  const handleLocationFocus = () => {
    setIsFirstNameFocused(false);
    setIsEmailFocused(false);
    setIsPhoneNumberFocused(false);
    setIsLocationFocused(true);
  };

  const retrieveData = async () => {
    try {
      const firstName = await AsyncStorage.getItem('userName');
      const email = await AsyncStorage.getItem('userEmail');
      if (firstName) {
        setUserName(firstName);
      }
      if (email) {
        setUserEmail(email);
      }
    } catch (error) {
      console.error('Error retrieving data from AsyncStorage:', error);
    }
  };

  useEffect(() => {
    retrieveData();
  }, []);

  return (
    <SafeAreaView style={commonStyle.constainer}>
      <ImageBackground
        source={images.ProfileBackGround}
        style={commonStyle.backGroundImg}>
        <ScrollView>
          <BackButton
            style={styles.BackImgView}
            onPress={() => navigation.goBack()}
          />
          <View style={styles.ProfileView}>
            <View style={styles.ProfileImgView}>
              <Image source={images.UserProfile} style={styles.ProfileImage} />
              <TouchableOpacity style={styles.CameraView}>
                <Image source={images.Camera} style={commonStyle.ImageStyle} />
              </TouchableOpacity>
            </View>
            <Text style={styles.profileText}>{userName || 'User Name'}</Text>
            <TouchableOpacity>
              <Text
                style={{
                  fontFamily: Font.SofiaProRegular,
                  color: colors.GreySuit,
                }}>
                Edit Profile
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[commonStyle.m_20]}>
            <Text style={styles.textInputTxt}>Full Name</Text>
            <TextInput
              style={
                isFirstNameFocused
                  ? [commonStyle.textInputStyle, commonStyle.focusedTextInput]
                  : commonStyle.textInputStyle
              }
              placeholder="Your Full Name"
              onFocus={handleFirstNameFocus}
              value={userName}
            />
            <Text style={styles.textInputTxt}>E-mail</Text>
            <TextInput
              style={
                isEmailFocused
                  ? [commonStyle.textInputStyle, commonStyle.focusedTextInput]
                  : commonStyle.textInputStyle
              }
              placeholder="Your email"
              onFocus={handleEmailFocus}
              value={userEmail}

            />
            <Text style={styles.textInputTxt}>Phone Number</Text>
            <TextInput
              style={
                isPhoneNumberFocused
                  ? [commonStyle.textInputStyle, commonStyle.focusedTextInput]
                  : commonStyle.textInputStyle
              }
              placeholder="Your phone Number"
              onFocus={handlePhoneNumberFocus}
            />
            <Text style={styles.textInputTxt}>Location</Text>
            <TextInput
              style={
                isLocationFocused
                  ? [commonStyle.textInputStyle, commonStyle.focusedTextInput]
                  : commonStyle.textInputStyle
              }
              placeholder="Your Location"
              onFocus={handleLocationFocus}
            />
          </View>
          <Button
            buttonName="SAVE"
            color={colors.orange}
            onPress={() => navigation.navigate('Reviews')}
          />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ProfileScreen;
