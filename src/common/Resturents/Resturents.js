import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from './style';
import { images } from '../../utils/image';
import { commonStyle } from '../../utils/commonStyles';
import { vs } from 'react-native-size-matters';

const Resturents = props => {
    return (
        <>
            <TouchableOpacity style={[styles.mainView, Platform.OS === 'ios' && styles.iosShadow]}>
                <Image source={props.backgroundImg} style={styles.backgroundImg} />
                <View style={[commonStyle.f_D_R, { alignItems: 'center' }]} >
                    <Text style={styles.itemName}>{props.restaurantName} </Text>
                    <Image style={commonStyle.imageStyle} source={props.verified} />
                </View>
                <View style={[commonStyle.f_D_R]}>
                    <Image
                        style={styles.deliveryIcon}
                        source={props.deliveryIcon}
                    />
                    <Text style={[styles.delivery, { marginRight: 20 }]}>
                        {props.deliveryOption}
                    </Text>
                    <Image style={styles.deliveryIcon} source={props.timeIcon} />
                    <Text style={styles.delivery}>{props.deliveryTime}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: vs(10) }}>
                    <View style={styles.box}>
                        <Text style={styles.food}>{props.burger}</Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.food}>{props.chicken}</Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.food}>{props.fastFood}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <View style={styles.ratingHeaderView}>
                <TouchableOpacity style={styles.priceTagView} onPress={props.onPress}>
                    <Text style={styles.reviewTxt}>{props.rating}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.heartIconView}>
                    <Image source={images.HeartIcon} style={commonStyle.imageStyle} />
                </TouchableOpacity>
            </View>
        </>
    )
}

export default Resturents;