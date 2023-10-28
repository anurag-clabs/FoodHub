import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';
import {commonStyle} from '../../utils/commonStyles';
import {Button} from '../../common/Button/Button';
import {Header} from '../../common/Header/Header';
import {colors} from '../../utils/colors';
import {DropDown} from '../../common/DropDown/DropDown';

const AdressScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={commonStyle.constainer}>
        <Header Text="Add new address" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[commonStyle.m_20, commonStyle.mV25]}>
          <Text style={styles.TextInputTxt}>Full Name</Text>
          <TextInput
            style={commonStyle.textInputStyle}
            placeholder="Your Full Name"
          />
          <Text style={styles.TextInputTxt}>E-mail</Text>
          <TextInput
            style={commonStyle.textInputStyle}
            placeholder="Your phone Number"
          />
          <Text style={styles.TextInputTxt}>State</Text>
          <DropDown placeholder="Select State" />
          <Text style={styles.TextInputTxt}>City</Text>
          <DropDown placeholder="Select City" />
          <Text style={styles.TextInputTxt}>Street (Include house number)</Text>
          <DropDown placeholder="Street" />
          <Button style={styles.Btn} buttonName="SAVE" color={colors.orange} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AdressScreen;
