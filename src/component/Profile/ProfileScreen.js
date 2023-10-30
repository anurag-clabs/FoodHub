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
  Platform,
} from 'react-native';
import { styles } from './style';
import { images } from '../../utils/image';
import { commonStyle } from '../../utils/commonStyles';
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

  const getUserDetail = useSelector(state => state?.GetUserDetail?.profileData);

  const [loader, setLoader] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [isFirstNameFocused, setIsFirstNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPhoneNumberFocused, setIsPhoneNumberFocused] = useState(false);
  const [isLocationFocused, setIsLocationFocused] = useState(false);

  const handleUserDetail = () => dispatch(GetUserDetailAction());

  useEffect(() => {
    handleUserDetail();
  }, []);

  useEffect(() => {
    setName(getUserDetail?.name);
    setEmail(getUserDetail?.email || '');
    setPhoneNumber(getUserDetail?.phoneNumber || '');
    setLocation(getUserDetail?.location);
    setProfileImage(getUserDetail?.image)
  }, [getUserDetail]);

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

  const openGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setProfileImage(image.path);
    })
      .catch(e => {
        console.log('e-----', JSON.stringify(e));
      })
  }

  const handleSave = async () => {
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('phoneNumber', phoneNumber);
      formData.append('location', location);

      if (profileImage) {
        formData.append('image', {
          name: `${new Date().getTime()}.jpg`,
          uri: profileImage,
          type: 'image/jpeg',
        });
      } else {
        formData.append('image', null);
      }
      setLoader(true);
      await UpdateProfileAction(formData);
      setLoader(false);
    } catch (error) {
      setLoader(false);
      console.error('API error:', error);
    }
  };

  return (
    <SafeAreaView style={commonStyle.constainer}>
      <ImageBackground
        source={images.ProfileBackGround}
        style={commonStyle.backGroundImg}>
        <BackButton
          style={styles.BackImgView}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
            style={[{ flex: 1 }]}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 80}
          >
            <View style={[styles.ProfileView, commonStyle.mB10]}>
              <View style={styles.ProfileImgView}>
                {profileImage?.length > 0 ? (
                  <Image source={{ uri: profileImage }} style={styles.ProfileImage} />
                ) : (
                  <Image source={images.UserProfile} style={styles.ProfileImage} />
                )}
                <TouchableOpacity style={styles.CameraView} onPress={clickOnFunction}>
                  <Image source={images.Camera} style={commonStyle.imageStyle} />
                </TouchableOpacity>
              </View>
              <Text style={styles.profileText}>{getUserDetail?.name || 'User Name'}</Text>
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
                editable={!getUserDetail?.email}
                onChangeText={(text) => {
                  if (!getUserDetail?.email) {
                    setEmail(text);
                  }
                }}
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
                editable={!getUserDetail?.phoneNumber}
                value={phoneNumber?.toString()}
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
        </ScrollView>
        <Button
          style={styles.btnPosition}
          buttonName="SAVE"
          color={colors.orange}
          onPress={handleSave}
          loading={loader}
        />
        <ActionSheet
          ref={actionRef}
          title={'Which one do you like ?'}
          options={['Click Photo', 'Choose Photo', 'Cancel']}
          cancelButtonIndex={2}
          destructiveButtonIndex={2}
          onPress={(index) => {
            if (index == 0) {
              openCamera()
            }
            if (index == 1) {
              openGallery()
            }
          }}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ProfileScreen;
