import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import {commonStyle} from '../../utils/commonStyles';
import { Header } from '../../common/Header/Header';
import { useNavigation } from '@react-navigation/native';

const SearchScreen = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView styles={commonStyle.constainer}>
        <Header 
        Text='Search'
        onPress={() => navigation.goBack()}
        />
        <View>
          
        </View>
    </SafeAreaView>
  )
}

export default SearchScreen;