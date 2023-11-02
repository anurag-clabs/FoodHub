import { View, Text, Image } from 'react-native'
import React from 'react'
import { commonStyle } from '../../utils/commonStyles';
import { BackButton, MenuButton } from '../Button/Button';
import { styles } from './style';
import { images } from '../../utils/image';
import { useSelector } from 'react-redux';

export const Header = props => {
    const getUserDetail = useSelector(state => state?.GetUserDetail?.profileData);
    const shouldShowImage = props.showImage;
    const imageSource = shouldShowImage && getUserDetail?.image
        ? { uri: getUserDetail?.image }
        : images.ProfileImage;
    return (
        <View style={[commonStyle.m_20, styles.HeaderView]}>
            <BackButton />
            <Text style={styles.Text}>{props.text}</Text>
            {shouldShowImage ? (
                <Image source={imageSource} style={commonStyle.headerImg} />
            ) : (
                <View style={commonStyle.m_20} />
            )}
        </View>
    )
};

export const MenuHeader = props => {
    const getUserDetail = useSelector(state => state?.GetUserDetail?.profileData);
    const shouldShowImage = props.showImage;
    const imageSource = shouldShowImage && getUserDetail?.image
        ? { uri: getUserDetail?.image }
        : images.ProfileImage;
    return (
        <View style={[commonStyle.m_20, styles.HeaderView]}>
            <MenuButton
                onPress={() => props.onPress()}
            />
            <View style={commonStyle.alignCenter}>
                <View style={styles.TextHeader}>
                    <Text style={styles.Deliver}>{props.deliver}</Text>
                    <Image style={styles.HeaderAero} source={images.HeaderAero} />
                </View>
                <Text style={styles.HeaderAddress}>{getUserDetail.location || 'No Address Added'}</Text>
            </View>
            <View>
                <Image source={imageSource} style={commonStyle.headerImg} />
            </View>
        </View>
    )
};

