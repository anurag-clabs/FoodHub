import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Styles} from './Styles';
import {ButtonLoader} from '../Loader/Loder';

export const Button = props => {
  return (
    <TouchableOpacity
      style={[Styles.Button, {backgroundColor: props.color}]}
      onPress={() => props.emptyFildFunction()}>
      {!props?.loading ? (
        <Text style={Styles.TextButton}>{props.buttonName}</Text>
      ) : (
        <ButtonLoader />
      )}
    </TouchableOpacity>
  );
};
