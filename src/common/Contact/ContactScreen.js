import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';
import {commonStyle} from '../../utils/commonStyles';
import {styles} from './style';
import {TitleHeader} from '../Button/Button';
import {useNavigation} from '@react-navigation/native';
import {images} from '../../utils/image';
import {ms} from 'react-native-size-matters';

const ContactScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={commonStyle.constainer}>
      <TitleHeader
        title={'Contact Us'}
        source={images.BackImg}
        onPress={() => navigation.goBack()}
      />
      <View style={[commonStyle.mH15, commonStyle.mT30]}>
        <View style={commonStyle.flexRow}>
          <View style={[commonStyle.iconView, {margin: ms(10)}]}>
            <Image source={images.Addresh} style={commonStyle.icon} />
          </View>
          <Text style={styles.contact}>
            STC ofc no 911, Near Vip circal, Mota Varachha, Surat 394110 Gujarat
          </Text>
        </View>
        <View style={commonStyle.flexRow}>
          <View style={[commonStyle.iconView, {margin: ms(10)}]}>
            <Image source={images.Email} style={commonStyle.icon} />
          </View>
          <TouchableOpacity
            onPress={() => Linking.openURL('foodhub@gmail.org')}>
            <Text style={[styles.contact, {marginTop: 15}]}>
              foodhub@gmail.org
            </Text>
          </TouchableOpacity>
        </View>
        <View style={commonStyle.flexRow}>
          <View style={[commonStyle.iconView, {margin: ms(10)}]}>
            <Image source={images.Call} style={commonStyle.icon} />
          </View>
          <TouchableOpacity>
            <Text style={[styles.contact, {marginTop: 15}]}>0260-2430950</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.iconeStyle}>
        <View>
          <Image source={images.Twitter} style={styles.icon} />
        </View>
        <Image source={images.FaceBookIcon} style={styles.icon} />
      </View>
    </SafeAreaView>
  );
};

export default ContactScreen;
