import { View, Text, Image } from 'react-native'
import React from 'react'
import { commonStyle } from '../../utils/commonStyles';
import { BackButton, MenuButton } from '../Button/Button';
import { styles } from './style';
import { images } from '../../utils/image';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

export const Header = props => {
    const navigation = useNavigation();
    const getUserDetail = useSelector(state => state?.GetUserDetail?.profileData);

    const shouldShowImage = props.showImage;
    return (
        <View style={[commonStyle.m_20, styles.HeaderView]}>
            <BackButton
                 onPress={() => navigation.goBack()}
            />
            <Text style={styles.Text}>{props.Text}</Text>
            {shouldShowImage && props?.HeaderImg ? <View >
                {props.profileImage && props.profileImage.length > 0 ? (
                    <Image source={{ uri: getUserDetail.image }} style={props.HeaderImgstyle} />
                ) : (
                    <Image source={images.HeaderImg} style={props.HeaderImgstyle} />
                )}
            </View> : <View style={commonStyle.m_20} />}
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
            <View>
                {props.profileImage && props.profileImage.length > 0 ? (
                    <Image source={{ uri: props.profileImage }} style={props.HeaderImgstyle} />
                ) : (
                    <Image source={props.HeaderImg} style={props.HeaderImgstyle} />
                )}
            </View>
        </View>
    )
};

