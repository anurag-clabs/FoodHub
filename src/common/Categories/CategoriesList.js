import React, { useState } from 'react';
import { Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { styles } from './styles';
import { colors } from '../../utils/colors';
import { commonStyle } from '../../utils/commonStyles';
import { useSelector } from 'react-redux';

const CategoriesList = () => {
    const [selectedFood, setSelectedFood] = useState(null);
    const categories = useSelector(state => state?.GetCatecories?.categoriesGet);

    const renderCategories = ({ item, index }) => {
        const itemStyle = [
            styles.boxElevation,
            selectedFood === index && styles.selectedBoxElevation,
        ];
        const nameStyle = [
            styles.name,
            selectedFood === index && { color: colors.white },
        ];

        return (
            <TouchableOpacity
                onPress={() => setSelectedFood(index)}
                key={index._id}
                style={[itemStyle, commonStyle.mV25]}
            >
                <Image style={styles.image} source={{ uri: item?.image[0] }} />
                <Text style={nameStyle} numberOfLines={2}>{item.name}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <FlatList
            contentContainerStyle={commonStyle.pH10}
            data={categories}
            keyExtractor={item => item._id}
            renderItem={renderCategories}
            horizontal
            showsHorizontalScrollIndicator={false}
        />
    )
}

export default CategoriesList;