import { View, Text, SafeAreaView, ImageBackground, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { commonStyle } from '../../utils/commonStyles';
import { images } from '../../utils/image';
import { styles } from './Style';
import { useNavigation } from '@react-navigation/native';
import { BackButton } from '../../common/Button/Button';
import FavoritesFoodItem from '../../common/FoodItem/FavoritesFoodItem';
import { s } from 'react-native-size-matters';
import { FoodData } from '../../common/Data/Data';

const CategoryScreen = () => {

    const navigation = useNavigation();

    const renderItem = () => {
        return FoodData.map((item, index) => (
            <View key={index}>
                <FavoritesFoodItem
                    ItemImg={item.ItemImg}
                    Price={item.Price}
                    Rating={item.Rating}
                    FoodName={item.FoodName}
                    FoodDescription={item.FoodDescription}
                    onPress={() => navigation.navigate('Reviews')}
                />
            </View>
        ))
    }

    return (
        <SafeAreaView style={commonStyle.constainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ImageBackground source={images.BackGraundPizzaImg} style={styles.BackgroundImg} />
                <View style={[styles.BackImgView]}>
                    <BackButton
                        onPress={() => navigation.goBack()}
                    />
                    <Text style={styles.header1}>Fast{'\n'}<Text style={styles.header2}>Food</Text></Text>
                    <Text style={styles.types}>80 type of pizza</Text>
                </View>
                <View style={[commonStyle.rowSpace, commonStyle.m_20,]}>
                    <View style={commonStyle.flexRow}>
                        <Text style={styles.shortbyTxt}>Short by: </Text>
                        <TouchableOpacity style={[commonStyle.rowCenter,]}>
                            <Text style={[styles.popularDropdown]}> Popular </Text>
                            <Text>&#x2304;</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.filetBtn}>
                        <Image style={styles.filter} source={images.filter} />
                    </TouchableOpacity>
                </View>
                <View style={[commonStyle.mT20, commonStyle.pH10]}>
                    {renderItem()}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default CategoryScreen;