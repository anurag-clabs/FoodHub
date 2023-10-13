import { View, Text, ImageBackground, SafeAreaView } from 'react-native'
import React, { useRef, useState } from 'react'
import { styles } from './style';
import { images } from '../../utils/image';
import { commonStyle } from '../../utils/commonStyles';
import { useNavigation } from '@react-navigation/native';
import PhoneInput from "react-native-phone-number-input";
import { BackButton, Button } from '../../common/Button/Button';
import { colors } from '../../utils/colors';
import { PhoneRegistration } from '../../redux/action/PhoneRegistration';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PhoneRegistrationScreen = () => {

    const navigation = useNavigation()
    const [phoneNumber, setPhoneNumber] = useState();

    let msg = {
        type: 'info',
        backgroundColor: colors.errorColor,
      };
    
    const handleRegistration = async () => {
        try {
            const numberData = {
                phoneNumber: phoneNumber,
            };
            const response = await PhoneRegistration(numberData);
            if (response) {
                showMessage({
                    ...msg,
                    message: response.message,
                });
                console.log('Registration', response);
                await AsyncStorage.setItem('userPhoneNumber', response?.phoneNumber);
                navigation.navigate('Verification', {code: response});
            } else {
                console.log('Register failed');
            }
        } catch (error) {
            console.error('Register error:', error);
            showMessage({
                ...msg,
                message: 'An error occurred while Register Number',
            });
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={images.commonBackGround} style={commonStyle.backGroundImg}>
                <BackButton
                    style={styles.BackImgView}
                    onPress={() => navigation.goBack()}
                />
                <View style={[commonStyle.m_20, commonStyle.mV20]}>
                    <Text style={styles.headerTxt}>Registration</Text>
                    <Text style={styles.textInputTxt}>Enter your phone number to verify your account</Text>
                    <PhoneInput
                        value={phoneNumber}
                        defaultCode="IN"
                        layout="first"
                        onChangeText={(text) => setPhoneNumber(text)}
                        autoFocus
                        containerStyle={styles.containerStyle}
                    />
                    <Button
                        color={colors.orange}
                        buttonName="SEND"
                        onPress={() => handleRegistration()}
                    />
                </View>
                <FlashMessage />
            </ImageBackground>
        </SafeAreaView>
    )
}

export default PhoneRegistrationScreen;