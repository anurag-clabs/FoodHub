import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {BlackButtonLoader, ButtonLoader} from '../Loader/Loder';
import {images} from '../../utils/image';
import {commonStyle} from '../../utils/commonStyles';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {colors} from '../../utils/colors';
import {useNavigation} from '@react-navigation/native';

export const Button = props => {
  return (
    <TouchableOpacity
      style={[styles.Button, props.style, {backgroundColor: props.color}]}
      onPress={props.onPress}
      disabled={props.loading}>
      {!props?.loading ? (
        <Text style={styles.TextButton}>{props.buttonName}</Text>
      ) : (
        <ButtonLoader />
      )}
    </TouchableOpacity>
  );
};

export const SocialButton = props => {
  return (
    <View style={[styles.iconView, styles.iconBtn, props.shadowStyle]}>
      <TouchableOpacity style={[commonStyle.rowCenter]} onPress={props.onPress}>
        <Image source={props.image} style={styles.iconImg} />
        {!props?.loading ? (
          <Text style={styles.iconTxt}>{props.buttonName}</Text>
        ) : (
          <BlackButtonLoader />
        )}
      </TouchableOpacity>
    </View>
  );
};

export const BagButton = props => {
  return (
    <TouchableOpacity
      style={[styles.BagButton, props.style, {backgroundColor: props.color}]}
      onPress={() => props.onPress()}>
      <View style={styles.bagImgView}>
        <Icon name="bag-shopping" size={20} color={colors.orange} />
      </View>
      {!props?.loading ? (
        <Text style={styles.TextButton}>{props.buttonName}</Text>
      ) : (
        <ButtonLoader />
      )}
    </TouchableOpacity>
  );
};

export const TitleHeader = ({onPress, title, source}) => {
  return (
    <View style={commonStyle.mT10}>
      <TouchableOpacity style={styles.menuView} onPress={onPress}>
        <Image source={source} style={styles.menuIcon} />
      </TouchableOpacity>
      <Text style={styles.menuTitle}>{title}</Text>
    </View>
  );
};

export const BackButton = props => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[styles.BackImgView, props.style]}
      onPress={() => navigation.goBack()}>
      <Image source={images.BackImg} style={commonStyle.imageStyle} />
    </TouchableOpacity>
  );
};

export const MenuButton = props => {
  return (
    <TouchableOpacity
      style={[styles.BackImgView, props.style]}
      onPress={() => props.onPress()}>
      <Image source={images.Menu} style={commonStyle.imageStyle} />
    </TouchableOpacity>
  );
};

export const SmallButton = props => {
  return (
    <TouchableOpacity
      style={[styles.buttonView, props.style, {backgroundColor: props.color}]}
      onPress={() => props.onPress()}>
      <Text style={[styles.ButtonTxt, {color: props.txtcolor}]}>
        {props.buttonName}
      </Text>
    </TouchableOpacity>
  );
};

export const ApplyButton = props => {
  return (
    <TouchableOpacity
      style={[
        styles.applyButtonView,
        props.style,
        {backgroundColor: props.color},
      ]}
      onPress={() => props.onPress()}>
      <Text
        style={[styles.ButtonTxt2, props.txtstyle, {color: props.txtcolor}]}>
        {props.buttonName}
      </Text>
    </TouchableOpacity>
  );
};
