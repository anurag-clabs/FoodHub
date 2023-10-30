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
import {images} from '../../utils/image';
import {ms, vs} from 'react-native-size-matters';
import { Header } from '../../common/Header/Header';

const ContactScreen = () => {
  return (
    <SafeAreaView style={commonStyle.constainer}>
      <Header
        text={'Contact Us'}
      />
      <View style={[commonStyle.mH15, commonStyle.mT10]}>
        <View style={commonStyle.flexRow}>
          <View style={[commonStyle.iconView, {margin: ms(10)}]}>
            <Image source={images.Addresh} style={commonStyle.icon} />
          </View>
          <Text style={styles.contact}>
            STC ofc no 911, Near Vip circal, Mota Varachha, Surat-394110, Gujarat
          </Text>
        </View>
        <View style={commonStyle.flexRow}>
          <View style={[commonStyle.iconView, {margin: ms(10)}]}>
            <Image source={images.Email} style={commonStyle.icon} />
          </View>
          <TouchableOpacity
            onPress={() => Linking.openURL('foodhub@gmail.org')}>
            <Text style={[styles.contact, {marginTop: vs(15)}]}>
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
