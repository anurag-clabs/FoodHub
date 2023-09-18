import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { commonStyle } from '../../utils/commonStyles';
import { styles } from './style';
import { images } from '../../utils/image';
import { colors } from '../../utils/colors';
import { useNavigation } from '@react-navigation/native';

const FoodItem = props => {
    return (
        <>
            <TouchableOpacity style={[styles.mainView]}>
                <Image source={props.ItemImg} style={styles.FoodBackgroundImg} />
                <TouchableOpacity style={styles.reviewTxtView} onPress={props.onPress}>
                    <Text style={styles.reviewTxt}>{props.Rating}</Text>
                </TouchableOpacity>
                <View style={styles.itemNameView}>
                    <Text style={styles.itemName}>{props.FoodName}</Text>
                    <Text style={styles.itemDescription}>{props.FoodDescription}</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.ratingHeaderView}>
                <View style={styles.priceHeaderView}>
                    <View style={styles.priceTagView}>
                        <Text style={{ color: colors.orange }}>$</Text>
                        <Text style={styles.priceTagTxt}>{props.Price}</Text>
                    </View>
                    <TouchableOpacity style={styles.HeartIconView}>
                        <Image source={images.HeartIcon} style={commonStyle.imageStyle} />
                    </TouchableOpacity>
                </View>
                
            </View>
        </>
    )
}

export default FoodItem