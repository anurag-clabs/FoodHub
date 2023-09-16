import { View, Text, Image } from 'react-native'
import React from 'react'
import { commonStyle } from '../../utils/commonStyles';
import { BackButton } from '../Button/Button';
import { styles } from './style';
import { s } from 'react-native-size-matters';

export const Header = props => {
    return (
        <View style={[ commonStyle.m_20, styles.headerView]}>
            <BackButton
                onPress={() => props.onPress()}
            />
            <Text style={styles.text}>{props.Text}</Text>
            <View style={{marginLeft: s(20)}}>
                <Image source={props.HeaderImg} style={props.HeaderImgstyle}/>
            </View>
        </View>
    )
}

export default Header;