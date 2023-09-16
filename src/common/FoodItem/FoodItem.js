import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { commonStyle } from '../../utils/commonStyles';
import { styles } from './style';
import { images } from '../../utils/image';
import { colors } from '../../utils/colors';

const FoodItem = props => {
    return (
        <View style={[commonStyle.m_20, styles.mainView]}>
            <ImageBackground source={props.backgroundImg} style={styles.BackgroundImg} imageStyle={{ borderRadius: 15 }}>
                <View style={styles.priceHeaderView}>
                    <View style={styles.priceTagView}>
                        <Text style={{ color: colors.orange }}>$</Text>
                        <Text style={styles.priceTagTxt}>{props.price}</Text>
                    </View>
                    <TouchableOpacity style={styles.HeartIconView}>
                        <Image source={images.HeartIcon} style={commonStyle.imageStyle} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.reviewTxtView} onPress={() => navigation.navigate('Reviews')}>
                    <Text style={styles.reviewTxt}>{props.rating}</Text>
                </TouchableOpacity>
            </ImageBackground>
            <View style={styles.itemNameView}>
                <Text style={styles.itemName}>{props.foodName}</Text>
                <Text style={styles.itemDescription}>{props.foodDescription}</Text>
            </View>
        </View>
    )
}

export default FoodItem