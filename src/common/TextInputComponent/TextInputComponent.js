import React from "react";
import { TextInput } from "react-native";
import { commonStyle } from "../../utils/commonStyles";

export const TextInputText = props => {
    return (
      <TextInput
        style={[commonStyle.input, props.style]}
        value={props.value}
        onChangeText={props.onChangeText}
        placeholder={props.placeHolder}
        secureTextEntry={props.secureTextEntry}
      />
    );
  };
  