import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { ms, s, vs } from "react-native-size-matters";
import { colors } from "../../utils/colors";
import { Font } from "../../utils/Fonts";

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
  

const styles = StyleSheet.create({
  input: {
    width: s(280),
    color: colors.black,
    fontFamily: Font.SofiaProMedium,
    padding: 12,
    height: vs(55)
  },
})