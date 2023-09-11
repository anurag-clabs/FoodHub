import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {color} from '../../utils/colour';
import { commonStyle } from '../../utils/commonStyles';
import { colors } from '../../utils/colors';

export const FullScreenLoader = () => {
  return (
    <View style={[{flex: 1}, commonStyle.alignCenter]}>
      <ActivityIndicator size={'large'} color={colors.orange} />
    </View>
  );
};

export const ButtonLoader = () => {
  return (
    <View>
      <ActivityIndicator size={'small'} color="#fff" />
    </View>
  );
};
