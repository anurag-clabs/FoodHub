import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';
import { images } from '../../utils/image';
import { commonStyle } from '../../utils/commonStyles';
import { Font } from '../../utils/Fonts';
import { vs } from 'react-native-size-matters';
import { BackButton, Button } from '../../common/Button/Button';
import { Header } from '../../common/Header/Header';
import { colors } from '../../utils/colors';
import { DropDown } from '../../common/DropDown/DropDown';

const AdressScreen = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={commonStyle.constainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header
                    Text='Add new address aaa aaa'
                    onPress={() => navigation.goBack()}
                />
                <View style={[commonStyle.m_20, { marginVertical: vs(30) }]}>
                    <Text style={styles.TextInputTxt}>Full Name</Text>
                    <TextInput
                        style={commonStyle.textInputStyle}
                        placeholder='Your Full Name'
                    />
                    <Text style={styles.TextInputTxt}>E-mail</Text>
                    <TextInput
                        style={commonStyle.textInputStyle}
                        placeholder='Your phone Number'
                    />
                    <Text style={styles.TextInputTxt}>State</Text>
                    <DropDown
                        placeholder='Select State'
                    />
                    <Text style={styles.TextInputTxt}>City</Text>
                    <DropDown
                        placeholder='Select City'
                    />
                    <Text style={styles.TextInputTxt}>Street (Include house number)</Text>
                    <DropDown
                        placeholder='Street'
                    />
                    <Button
                        style={styles.Btn}
                        buttonName="SAVE"
                        color={colors.orange}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default AdressScreen;