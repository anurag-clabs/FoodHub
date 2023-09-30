import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { styles } from './style';
import { images } from '../../utils/image';
import { commonStyle } from '../../utils/commonStyles';
import { s } from 'react-native-size-matters';

const Resturents = props => {
    return (
        <>
            <TouchableOpacity style={[styles.mainView, Platform.OS === 'ios' && styles.IosShadow]}>
                <Image source={props.BackgroundImg} style={styles.BackgroundImg} />
                <View style={[commonStyle.f_D_R, { alignItems: 'center' }]} >
                    <Text style={styles.itemName}>{props.RestaurantName} </Text>
                    <Image style={commonStyle.ImageStyle} source={props.Verified} />
                </View>
                <View style={[commonStyle.f_D_R]}>
                    <Image
                        style={styles.DeliveryIcon}
                        source={props.DeliveryIcon}
                    />
                    <Text style={[styles.Delivery, { marginRight: 20 }]}>
                        {props.DeliveryOption}
                    </Text>
                    <Image style={styles.DeliveryIcon} source={props.TimeIcon} />
                    <Text style={styles.Delivery}>{props.DeliveryTime}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: s(10) }}>
                    <View style={styles.Box}>
                        <Text style={styles.Food}>{props.Burger}</Text>
                    </View>
                    <View style={styles.Box}>
                        <Text style={styles.Food}>{props.Chicken}</Text>
                    </View>
                    <View style={styles.Box}>
                        <Text style={styles.Food}>{props.FastFood}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <View style={styles.ratingHeaderView}>
                <TouchableOpacity style={styles.priceTagView} onPress={props.onPress}>
                    <Text style={styles.reviewTxt}>{props.Rating}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.HeartIconView}>
                    <Image source={images.HeartIcon} style={commonStyle.ImageStyle} />
                </TouchableOpacity>
            </View>
        </>
    )
}

export default Resturents;