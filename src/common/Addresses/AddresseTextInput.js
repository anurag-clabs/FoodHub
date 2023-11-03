import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { styles } from './style';
import { CommonTextInput } from '../TextInputComponent/TextInputComponent';
import { DropDown } from '../DropDown/DropDown';
import { AddressType } from '../Data/Data';
import { commonStyle } from '../../utils/commonStyles';
import { Header } from '../Header/Header';
import { Button } from '../Button/Button';
import { colors } from '../../utils/colors';
import { CreateUserAddress } from '../../redux/action/CreateUserAddressAction';
import { UpdateUserAddressAction } from '../../redux/action/UpdateUserAddressAction';
import { useNavigation, useRoute } from '@react-navigation/native';

const AddresseTextInput = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const id = route?.params?.addressData?._id
    const editType = route?.params?.type;
    const addressData = route?.params?.addressData;

    const isEditing = !!id;
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [pincode, setPincode] = useState('');
    const [type, setType] = useState('');
    const [loader, setLoader] = useState(false);
    const [headerText, setHeaderText] = useState('Add Address');

    useEffect(() => {
        setName(addressData ? addressData.name : '');
        setNumber(addressData ? addressData.number : '');
        setState(addressData ? addressData.state : '');
        setCity(addressData ? addressData.city : '');
        setAddress(addressData ? addressData.address : '')
        setPincode(addressData ? addressData.pincode : '')
        setType(addressData ? addressData.type : '')
    }, [addressData]);

    useEffect(() => {
        if (isEditing) {
            setHeaderText('Edit Address');
        } else {
            setHeaderText('Add Address');
        }
    }, [isEditing]);

    const CreateAddress = async () => {
        try {
            const addressData = {
                name: name,
                number: number,
                state: state,
                city: city,
                address: address,
                pincode: pincode,
                type: type
            }
            if (editType) {
                setLoader(true)
                const response = await UpdateUserAddressAction(id, addressData);
                navigation.goBack()
                console.log('Update User Address successful', response);
                setLoader(false)
            } else {
                setLoader(true)
                const response = await CreateUserAddress(addressData);
                navigation.goBack()
                console.log('Create User Address successful', response);
                setLoader(false)
            }
        } catch (error) {
            console.log('Create User Address failed', error);
            setLoader(false);
        }
    }

    return (
        <SafeAreaView style={commonStyle.constainer}>
            <Header text={headerText} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={[commonStyle.m_20, commonStyle.mB40]}>
                    <Text style={styles.textInputTxt}>Full Name</Text>
                    <CommonTextInput
                        placeholder="Your Full Name"
                        value={name}
                        onChangeText={(text) => setName(text)}
                    />
                    <Text style={styles.textInputTxt}>Phone Number</Text>
                    <CommonTextInput
                        placeholder="Your phone Number"
                        keyboardType="numeric"
                        maxLength={10}
                        value={number.toString()}
                        onChangeText={(text) => setNumber(text)}
                    />
                    <Text style={styles.textInputTxt}>State</Text>
                    <CommonTextInput
                        placeholder="Select State"
                        value={state}
                        onChangeText={(text) => setState(text)}
                    />
                    <Text style={styles.textInputTxt}>City</Text>
                    <CommonTextInput
                        placeholder="Select City"
                        value={city}
                        onChangeText={(text) => setCity(text)}
                    />
                    <Text style={styles.textInputTxt}>Address (Include house number)</Text>
                    <CommonTextInput
                        placeholder="Address"
                        value={address}
                        onChangeText={(text) => setAddress(text)}
                    />
                    <Text style={styles.textInputTxt}>Pincode</Text>
                    <CommonTextInput
                        keyboardType='numeric'
                        placeholder="Pincode"
                        maxLength={6}
                        value={pincode}
                        onChangeText={(text) => setPincode(text)}
                    />
                    <Text style={styles.textInputTxt}>Address Type</Text>
                    <DropDown
                        placeholder='Select Address Type'
                        data={AddressType}
                        dropDownValue={type}
                        onchangeFunction={(item) => {
                            setType(item.value)
                        }}
                    />
                </View>
            </ScrollView>
            <Button
                onPress={CreateAddress}
                style={[commonStyle.orangeShadow, styles.Btn]}
                buttonName="SAVE"
                color={colors.orange}
                loading={loader}
            />
        </SafeAreaView>
    )
}

export default AddresseTextInput;