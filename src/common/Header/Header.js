import { View, Text } from 'react-native'
import React from 'react'
import { commonStyle } from '../../utils/commonStyles';
import { BackButton } from '../Button/Button';
import { styles } from './style';

export const Header = props => {
    return (
        <View style={[ commonStyle.m_20, styles.headerView]}>
            <BackButton
                onPress={() => props.onPress()}
            />
            <Text style={styles.text}>{props.Text}</Text>
            <View style={commonStyle.m_20}/>
        </View>
    )
}

export default Header;