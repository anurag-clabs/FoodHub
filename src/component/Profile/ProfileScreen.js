import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import { styles } from './style';
import { images } from '../../utils/image';
import { commonStyle } from '../../utils/commonStyles';
import { useNavigation } from '@react-navigation/native';
import { BackButton, Button } from '../../common/Button/Button';
import { colors } from '../../utils/colors';
import { GetUserDetailAction } from '../../redux/action/UserDetailAction';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateProfileAction } from '../../redux/action/UpdateProfileAction';
import ActionSheet from 'react-native-actionsheet';
import ImagePicker from 'react-native-image-crop-picker';


const ProfileScreen = () => {
  const actionRef = useRef();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const getUserDetail = useSelector(state => state?.GetUserDetail?.profileData.data);

  const [loader, setLoader] = useState(false);
  const [name, setName] = useState(getUserDetail?.name || '');
  const [email, setEmail] = useState(getUserDetail?.email || '');
  const [phoneNumber, setPhoneNumber] = useState(getUserDetail?.phoneNumber || '');
  const [location, setLocation] = useState(getUserDetail?.location || '');
  const [profileImage, setProfileImage] = useState(getUserDetail?.image || '');
  const [isFirstNameFocused, setIsFirstNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPhoneNumberFocused, setIsPhoneNumberFocused] = useState(false);
  const [isLocationFocused, setIsLocationFocused] = useState(false);

  const handleUserDetail = () => dispatch(GetUserDetailAction());

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

  const clickOnFunction = () => {
    actionRef.current.show()
  }

  const openCamera = async () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: false,
    })
      .then(image => {
        setProfileImage(image.path);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const handleSave = async () => {
      setLoader(true);
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('phoneNumber', phoneNumber);
      formData.append('location', location);
      formData.append('image', {
        name: `${new Date().getTime()}.jpg`,
        uri: profileImage,
        type: 'image/jpeg',
      });

      console.log('Updated data', JSON.stringify(formData));
      // dispatch(UpdateProfileAction(formData));
      await UpdateProfileAction(formData)
      setLoader(false);
  };

  useEffect(() => {
    handleUserDetail();
  }, []);

  return (
    <SafeAreaView style={commonStyle.constainer}>
      <ImageBackground
        source={images.ProfileBackGround}
        style={commonStyle.backGroundImg}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <BackButton
            style={styles.BackImgView}
            onPress={() => navigation.goBack()}
          />
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
            style={{ flex: 1 }}
          >
            <View style={styles.ProfileView}>
              <View style={styles.ProfileImgView}>
                {profileImage ? (
                  <Image source={{ uri: profileImage }} style={styles.ProfileImage} />
                ) : (
                  <Image source={images.UserProfile} style={styles.ProfileImage} />
                )}
                <TouchableOpacity style={styles.CameraView} onPress={clickOnFunction}>
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
                maxLength={10}
                value={phoneNumber.toString()}
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
                onChangeText={(text) => setLocation(text)}
              />
            </View>
          </KeyboardAvoidingView>
          <Button
            buttonName="SAVE"
            color={colors.orange}
            onPress={handleSave}
            loading={loader}
          />
        </ScrollView>
        <ActionSheet
          ref={actionRef}
          title={'Which one do you like ?'}
          options={['Click Photo', 'Choose Photo', 'Delete Photo', 'Cancel']}
          cancelButtonIndex={3}
          destructiveButtonIndex={2}
          onPress={(index) => {
            if (index == 0) {
              openCamera()
            }
            if (index == 1) {
              openGallery()
            }
            if (index == 2) {
              deleteImage()
            }
          }}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ProfileScreen;
