import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { commonStyle } from '../../utils/commonStyles';
import { styles } from './style';
import { images } from '../../utils/image';
import { colors } from '../../utils/colors';
import { useNavigation } from '@react-navigation/native';

const FavoritesFoodItem = props => {
    return (
        <>
            <TouchableOpacity style={[styles.MainView, {shadowOpacity: 0.2}]}>
                <Image source={props.ItemImg} style={styles.BackgroundImg} />
                <TouchableOpacity style={styles.FavoritesreviewTxtView} onPress={props.onPress}>
                <Text style={styles.ReviewTxt}>{props.Rating}</Text>
            </TouchableOpacity>
                <View style={styles.ItemNameView}>
                    <Text style={styles.ItemName}>{props.FoodName}</Text>
                    <Text style={styles.ItemDescription}>{props.FoodDescription}</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.FavoritespriceHeaderView}>
                <View style={styles.PriceTagView}>
                    <Text style={{ color: colors.orange }}>$</Text>
                    <Text style={styles.PriceTagTxt}>{props.Price}</Text>
                </View>
                <TouchableOpacity style={styles.HeartIconView}>
                    <Image source={images.HeartIcon} style={commonStyle.ImageStyle} />
                </TouchableOpacity>
            </View>
           
        </>
    )
}

export default FavoritesFoodItem;