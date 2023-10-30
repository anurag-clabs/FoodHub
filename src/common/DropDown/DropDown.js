import React from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import {View} from 'react-native';
import { commonStyle } from '../../utils/commonStyles';

export const DropDown = props => {
  return (
    <View style={commonStyle.Boxs}>
      <Dropdown
        style={[commonStyle.dropdown, props.isFocus && styles.focusColor]}
        placeholderStyle={commonStyle.BoxText}
        placeholder={props.placeholder}
        selectedTextStyle={commonStyle.BoxText}
        data={props.data ? props.data.length ? props.data : [{ label: `Not Available`, value: null }]
                : [{ label: 'Loading...', value: null }]
              }
        maxHeight={200}
        iconColor="blue"
        iconStyle={commonStyle.DownArrow}
        labelField="label"
        valueField="value"
        value={props.dropDownValue}
        disable={props.disable}
        onChange={props.onchangeFunction}
        itemTextStyle={{color: 'black'}}
      />
    </View>
  );
};
