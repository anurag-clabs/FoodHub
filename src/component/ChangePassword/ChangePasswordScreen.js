import {View, Text, SafeAreaView, TextInput} from 'react-native';
import React, {useState} from 'react';
import {commonStyle} from '../../utils/commonStyles';
import {images} from '../../utils/image';
import {useNavigation} from '@react-navigation/native';
import {styles} from './style';
import {colors} from '../../utils/colors';
import {TitleHeader} from '../../common/Button/Button';

const ChangePasswordScreen = () => {
  const navigation = useNavigation();
  const [isAddPasswordFocused, setIsAddPasswordFocused] = useState(false);
  const [isAddNewPasswordFocused, setIsAddNewPasswordFocused] = useState(false);
  const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] =
    useState(false);

  const handleAddPasswordFocused = () => {
    setIsAddPasswordFocused(true);
    setIsAddNewPasswordFocused(false);
    setIsConfirmPasswordFocused(false);
  };
  const handleAddNewPasswordFocused = () => {
    setIsAddPasswordFocused(false);
    setIsAddNewPasswordFocused(true);
    setIsConfirmPasswordFocused(false);
  };
  const handleConfirmPasswordFocused = () => {
    setIsAddPasswordFocused(false);
    setIsAddNewPasswordFocused(false);
    setIsConfirmPasswordFocused(true);
  };
  return (
    <SafeAreaView style={commonStyle.constainer}>
      <TitleHeader
        title={'Change Password'}
        source={images.BackImg}
        onPress={() => navigation.goBack()}
      />
      <View style={[commonStyle.m_20, {marginVertical: 20}]}>
        <Text style={styles.textInputTxt}>Current Password</Text>
        <TextInput
          style={
            isAddPasswordFocused
              ? [styles.textInputStyle, styles.focusedTextInput]
              : styles.textInputStyle
          }
          placeholderTextColor={colors.RomanSilver}
          placeholder="Add Password"
          onFocus={handleAddPasswordFocused}
        />
        <Text style={styles.textInputTxt}>New Password</Text>
        <TextInput
          placeholderTextColor={colors.RomanSilver}
          style={
            isAddNewPasswordFocused
              ? [styles.textInputStyle, styles.focusedTextInput]
              : styles.textInputStyle
          }
          placeholder="Add New Password"
          onFocus={handleAddNewPasswordFocused}
        />
        <Text style={styles.textInputTxt}>Confirm Password</Text>
        <TextInput
          placeholderTextColor={colors.RomanSilver}
          style={
            isConfirmPasswordFocused
              ? [styles.textInputStyle, styles.focusedTextInput]
              : styles.textInputStyle
          }
          placeholder="Add Confirm Password"
          onFocus={handleConfirmPasswordFocused}
        />
      </View>
    </SafeAreaView>
  );
};

export default ChangePasswordScreen;
