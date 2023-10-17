import React, { useEffect, useState } from 'react';
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
import { styles } from './style';
import { images } from '../../utils/image';
import { commonStyle } from '../../utils/commonStyles';
import { useNavigation } from '@react-navigation/native';
import { BackButton, Button } from '../../common/Button/Button';
import { colors } from '../../utils/colors';
import { GetUserDetailAction } from '../../redux/action/UserDetailAction';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateUserDetailAction } from '../../redux/action/UpdateUserDetailAction';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isFirstNameFocused, setIsFirstNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPhoneNumberFocused, setIsPhoneNumberFocused] = useState(false);
  const [isLocationFocused, setIsLocationFocused] = useState(false);

  const handleUserDetail = () => dispatch(GetUserDetailAction());
  const handleUpdateUserDetail = () => dispatch(UpdateUserDetailAction());

  const getUserDetail = useSelector(state => state?.GetUserDetail?.profileData.data);
  // const putUserUserDetail = useSelector(state => state?.UpdateUserDetail?.profileData.data);
  console.log('getUserDetail', getUserDetail);
  // console.log('putUserUserDetail', putUserUserDetail);

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

  const handleSave = () => {
    const updatedData = {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
    };
    handleUpdateUserDetail(updatedData);
  };

  useEffect(() => {
    handleUserDetail();
    // handleUpdateUserDetail();
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
            <Text style={styles.profileText}>{getUserDetail?.name || 'User Name'}</Text>
            <TouchableOpacity>
              <Text
                style={styles.editProfileTxt}>
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
              value={name}
              onChangeText={(text) => setName(text)}
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
              value={email}
              onChangeText={(text) => setEmail(text)}
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
              value={phoneNumber}
              onChangeText={(text) => setPhoneNumber(text)}
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
              value={location}
              // onChangeText={(text) => setLocation(text)}
            />
          </View>
          <Button
            buttonName="SAVE"
            color={colors.orange}
            onPress={handleSave}
          />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ProfileScreen;
