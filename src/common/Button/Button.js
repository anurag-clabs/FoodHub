import { Image, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Styles } from './Styles';
import { ButtonLoader } from '../Loader/Loder';
import { images } from '../../utils/image';
import { commonStyle } from '../../utils/commonStyles';

export const Button = props => {
  return (
    <TouchableOpacity
      style={[Styles.Button, props.style, {backgroundColor: props.color} ]}
      onPress={() => props.onPress()}>
      {!props?.loading ? (
        <Text style={Styles.TextButton}>{props.buttonName}</Text>
      ) : (
        <ButtonLoader />
      )}
    </TouchableOpacity>
  );
};


export const BackButton = props => {
  return (
    <TouchableOpacity style={[Styles.BackImgView, props.style]} onPress={() => props.onPress()}>
      <Image source={images.BackImg} style={commonStyle.ImageStyle} />
    </TouchableOpacity>
  )
}

export const MenuButton = props => {
  return (
    <TouchableOpacity style={[Styles.BackImgView, props.style]} onPress={() => props.onPress()}>
      <Image source={images.Menu} style={commonStyle.ImageStyle} />
    </TouchableOpacity>
  )
}

