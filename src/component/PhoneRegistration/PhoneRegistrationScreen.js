import { View, Text, ImageBackground, TouchableOpacity, Image, TextInput, SafeAreaView } from 'react-native'
import React, { useRef, useState } from 'react'
import { styles } from './style';
import { images } from '../../utils/image';
import { commonStyle } from '../../utils/commonStyles';
import { useNavigation } from '@react-navigation/native';
import PhoneInput from "react-native-phone-number-input";
import { BackButton, Button } from '../../common/Button/Button';
import { colors } from '../../utils/colors';


const PhoneRegistrationScreen = () => {

    const navigation = useNavigation()
    const [value, setValue] = useState("");

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={images.commonBackGround} style={commonStyle.backGroundImg}>
            <BackButton
        style={styles.BackImgView}
          onPress={() => navigation.goBack()}
        />
                <View style={[commonStyle.m_20, { marginVertical: 20 }]}>
                    <Text style={styles.headerTxt}>Registration</Text>
                    <Text style={styles.textInputTxt}>Enter your phone number to verify your account</Text>
                    <PhoneInput
                        value={value}
                        defaultCode="IN"
                        layout="first"
                        onChange={(text) => {
                            setValue(text);
                        }}
                        autoFocus
                        containerStyle={styles.containerStyle}
                    />
                    <Button
                        color={colors.orange}
                        buttonName="Send"
                        emptyFildFunction={() => navigation.goBack()}
                    />
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default PhoneRegistrationScreen;