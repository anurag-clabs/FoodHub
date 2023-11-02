import React, { useState } from 'react';
import { View, Text, ImageBackground, SafeAreaView } from 'react-native';
import { styles } from './style';
import { images } from '../../utils/image';
import { commonStyle } from '../../utils/commonStyles';
import { useNavigation } from '@react-navigation/native';
import PhoneInput from "react-native-phone-number-input";
import { BackButton, Button } from '../../common/Button/Button';
import { colors } from '../../utils/colors';
import { PhoneRegistration } from '../../redux/action/PhoneRegistration';

const PhoneRegistrationScreen = () => {

    const navigation = useNavigation()
    const [loader, setLoader] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState();

    const handleRegistration = async () => {
        try {
            const numberData = {
                phoneNumber: phoneNumber,
            };
            setLoader(true);
            const response = await PhoneRegistration(numberData);
            setLoader(false);
            if (response) {
                console.log('Registration', response);
                navigation.navigate('Verification', { phoneNumber, type: 'signup' });
            } else {
                console.log('Register failed');
            }
        } catch (error) {
            setLoader(false);
            console.error('Register error:', error);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={images.commonBackGround} style={commonStyle.backGroundImg}>
                <BackButton 
                     style={[commonStyle.m_20, commonStyle.mV20]}
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
                        textInputStyle={styles.textInputStyle}
                    />
                    <Button
                        color={colors.orange}
                        buttonName="SEND"
                        onPress={() => handleRegistration()}
                        loading={loader}
                    />
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default PhoneRegistrationScreen;