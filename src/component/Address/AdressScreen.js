import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from './style';
import { commonStyle } from '../../utils/commonStyles'
import { Header } from '../../common/Header/Header';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { GetUserAddressAction } from '../../redux/action/GetUserAddressAction';
import { DeleteUserAddressAction } from '../../redux/action/DeleteUserAddressAction';

const AdressScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleUserAddress = () => dispatch(GetUserAddressAction());
  const getUserAddressDetail = useSelector(state => state?.GetUserAddress?.getAddressData);
  console.log('get', getUserAddressDetail);

  useEffect(() => {
    handleUserAddress();
  }, [getUserAddressDetail]);

  const handleDeleteUserData = async (id) => {
    try {
      console.log('id', id);
      const response = await DeleteUserAddressAction(id);
      console.log('Delete Address', response);
    } catch (error) {
      setLoader(false);
      console.error('Register error:', error);
    }
  }


  return (
    <SafeAreaView style={commonStyle.constainer}>
      <Header text='Delivery Address' />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          onPress={() => navigation.navigate('AddresseTextInput')}
          style={[styles.addAddressBtn, commonStyle.m_20]}
        >
          <Text style={styles.editTxt}> + Add Address</Text>
        </TouchableOpacity>
        <View style={[commonStyle.m_20]}>
          {getUserAddressDetail ? (
            getUserAddressDetail?.map((address, index) => (
              <View style={[styles.addressBox, commonStyle.blackShadow]} key={index}>
                <Text style={styles.addressDataNameTxt}>{address.name}</Text>
                <Text style={styles.addressDataTxt}>{address.address} ,
                  {address.city} , {address.state} - {address.pincode}
                </Text>
                <Text style={styles.addressDataTxt}>
                  Phone : <Text style={styles.numberText}>{address.number}</Text>
                </Text>
                <View style={styles.devider} />
                <View style={commonStyle.flexRow}>
                  <TouchableOpacity
                    onPress={() => handleDeleteUserData(address._id)}
                    style={styles.deletebtn}
                  >
                    <Text style={styles.editdelteTxt}>Delete</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('AddresseTextInput',
                      { addressData: address, type: 'edit' }
                    )}
                  >
                    <Text style={styles.editTxt}>Edit</Text>
                  </TouchableOpacity>
                </View>
              </View>

            ))
          ) : (
            <Text>No addresses available</Text>
          )}

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AdressScreen;
