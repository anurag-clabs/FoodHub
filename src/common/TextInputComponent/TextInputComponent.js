import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { ms, s, vs } from "react-native-size-matters";
import { colors } from "../../utils/colors";
import { Font } from "../../utils/Fonts";
import { commonStyle } from "../../utils/commonStyles";

export const TextInputText = props => {
    return (
      <TextInput
        style={[styles.input, props.style]}
        value={props.value}
        onChangeText={props.onChangeText}
        placeholder={props.placeHolder}
        secureTextEntry={props.secureTextEntry}
      />
    );
  };

export const CommonTextInput = props => {
    return (
      <TextInput
        style={[commonStyle.textInputStyle, props.style]}
        value={props.value}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType}
        maxLength={props.maxLength}
      />
    );
  };
  

const styles = StyleSheet.create({
  input: {
    width: s(280),
    color: colors.black,
    fontFamily: Font.SofiaProMedium,
    padding: 12,
    height: vs(55)
  },
})