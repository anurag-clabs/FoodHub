import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from './style';
import { commonStyle } from '../../utils/commonStyles'
import { Header } from '../../common/Header/Header';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { GetUserAddressAction } from '../../redux/action/GetUserAddressAction';
import { DeleteUserAddressAction } from '../../redux/action/DeleteUserAddressAction';
import { FullScreenLoader } from '../../common/Loader/Loder';

const AdressScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [loader, setLoader] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const handleUserAddress = () => dispatch(GetUserAddressAction());
  const getUserAddressDetail = useSelector(state => state?.GetUserAddress?.getAddressData);
  console.log('get', getUserAddressDetail);

  useEffect(() => {
    handleUserAddress();
  }, []);

  const handleDeleteUserData = async (id) => {
    try {
      setLoader(true)
      await DeleteUserAddressAction(id);
      setLoader(false)
      handleUserAddress();
    } catch (error) {
      setLoader(false);
      console.error('Register error:', error);
    }
  }

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  return (
    <SafeAreaView style={commonStyle.constainer}>
      <Header text='Delivery Address' />
      {
        loader ? (
          <FullScreenLoader />
        ) : (
          <ScrollView showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
            <TouchableOpacity
              onPress={() => navigation.navigate('AddresseTextInput')}
              style={[styles.addAddressBtn, commonStyle.m_20]}
            >
              <Text style={styles.editTxt}> + Add Address</Text>
            </TouchableOpacity>
            <View style={[commonStyle.m_20]}>
              {getUserAddressDetail && Array.isArray(getUserAddressDetail) && getUserAddressDetail.length > 0 ? (
                getUserAddressDetail.map((address, index) => (
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
                <Text style={[styles.noDataTxt, commonStyle.mT30]}>{getUserAddressDetail.message}</Text>
              )}
            </View>
          </ScrollView>
        )}
    </SafeAreaView>
  );
};

export default AdressScreen;