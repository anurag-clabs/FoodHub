import React from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import {View} from 'react-native';
import { commonStyle } from '../../utils/commonStyles';
import { styles } from './style';

export const DropDown = props => {
  return (
    <View style={commonStyle.Boxs}>
      <Dropdown
        style={[commonStyle.dropdown, props.isFocus && styles.focusColor]}
        placeholderStyle={commonStyle.BoxText}
        placeholder={props.placeholder}
        selectedTextStyle={styles.boxText}
        data={props.data ? props.data.length ? props.data : [{ label: `Not Available`, value: null }]
                : [{ label: 'Loading...', value: null }]
              }
        maxHeight={200}
        iconStyle={styles.downArrow}
        labelField="label"
        valueField="value"
        value={props.dropDownValue}
        disable={props.disable}
        onChange={props.onchangeFunction}
        itemTextStyle={styles.boxText}
      />
    </View>
  );
};
