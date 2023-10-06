import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { commonStyle } from '../../utils/commonStyles';
import { styles } from './style';
import { images } from '../../utils/image';
import { colors } from '../../utils/colors';
import { useNavigation } from '@react-navigation/native';
import { FoodData } from '../Data/Data';

const FavoritesFoodItem = props => {
    const navigation = useNavigation();

    return (
        <>
            <TouchableOpacity
                style={[styles.MainView, Platform.OS === 'ios' && styles.IosShadow]}
                onPress={() => navigation.navigate('FoodDetail')}
            >
                <Image source={props.ItemImg} style={styles.BackgroundImg} />
                <TouchableOpacity style={[styles.FavoritesreviewTxtView, Platform.OS === 'ios' && styles.Favoritesreview]} onPress={props.onPress}>
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