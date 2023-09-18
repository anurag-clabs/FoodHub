import { View, Text, Image } from 'react-native'
import React from 'react'
import { commonStyle } from '../../utils/commonStyles';
import { BackButton, MenuButton } from '../Button/Button';
import { styles } from './style';
import { s } from 'react-native-size-matters';
import { images } from '../../utils/image';

export const Header = props => {
    return (
        <View style={[commonStyle.m_20, styles.HeaderView]}>
            <BackButton
                onPress={() => props.onPress()}
            />
            <Text style={styles.Text}>{props.Text}</Text>
            {props?.HeaderImg ? <View >
                <Image source={props.HeaderImg} style={props.HeaderImgstyle} />
            </View> : <View style={{marginHorizontal: s(20)}}/>}
        </View>
    )
};

export const MenuHeader = props => {
    return (
        <View style={[commonStyle.m_20, styles.HeaderView]}>
            <MenuButton
                onPress={() => props.onPress()}
            />
            <View>
                <View style={styles.TextHeader}>
                    <Text style={styles.Deliver}>{props.Deliver}</Text>
                    <Image style={styles.HeaderAero} source={images.HeaderAero} />
                </View>
                <Text style={styles.HeaderAddress}>{props.DeliveryAddress}</Text>
            </View>
            <View >
                <Image source={props.HeaderImg} style={props.HeaderImgstyle} />
            </View>
        </View>
    )
};

