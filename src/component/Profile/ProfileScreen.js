import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import {images} from '../../utils/image';
import {commonStyle} from '../../utils/commonStyles';
import {useNavigation} from '@react-navigation/native';
import {Font} from '../../utils/Fonts';
import {vs} from 'react-native-size-matters';
import {BackButton, Button} from '../../common/Button/Button';
import {colors} from '../../utils/colors';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [isFirstNameFocused, setIsFirstNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPhoneNumberFocused, setIsPhoneNumberFocused] = useState(false);
  const [isLocationFocused, setIsLocationFocused] = useState(false);

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

  return (
    <SafeAreaView>
      <ImageBackground
        source={images.ProfileBackGround}
        style={commonStyle.backGroundImg}>
        <BackButton
          style={styles.BackImgView}
          onPress={() => navigation.goBack()}
        />
        <View style={styles.ProfileView}>
          <View style={styles.ProfileImgView}>
            <Image source={images.UserProfile} style={styles.ProfileImage} />
            <TouchableOpacity style={styles.CameraView}>
              <Image source={images.Camera} style={commonStyle.imageStyle} />
            </TouchableOpacity>
          </View>
          <Text style={styles.profileText}>Eljad Eendaz</Text>
          <TouchableOpacity>
            <Text style={{fontFamily: Font.sofiaPro, color: colors.GreySuit}}>
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
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ProfileScreen;
