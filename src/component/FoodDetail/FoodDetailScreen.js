import React from 'react';
import { View, Text, ImageBackground, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native';
import { images } from '../../utils/image';
import { styles } from './style';
import { commonStyle } from '../../utils/commonStyles';
import { BackButton, BagButton } from '../../common/Button/Button';
import { colors } from '../../utils/colors';
import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/FontAwesome6';

const FoodDetailScreen = () => {

    return (
        <SafeAreaView style={commonStyle.constainer}>
            <ScrollView>
            <View style={[commonStyle.m_20, styles.headerView]}>
                <ImageBackground source={images.McDonaldBack} style={styles.backgroundImg} imageStyle={{ borderRadius: 15 }} >
                    <View style={[commonStyle.rowSpace, styles.backImgView]}>
                        <BackButton />
                        <TouchableOpacity style={styles.heartIconView}>
                            <Image source={images.HeartIcon} style={commonStyle.imageStyle} />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
            <Text style={[commonStyle.m_20, commonStyle.v_10, styles.headerTxt]}>Ground Beef Tacos</Text>
            <View style={[commonStyle.rowCenter]}>
                <TouchableOpacity style={[styles.FavoritesreviewTxtView, commonStyle.m_20]} >
                    <Text style={styles.reviewTxt}>⭐ 4.5 (25+)</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.seeReviewTxt}>See Review</Text>
                </TouchableOpacity>
            </View>
            <View style={[commonStyle.rowSpace, commonStyle.mT10, commonStyle.m_20]}>
                <View style={[commonStyle.flexRow, styles.priceView,]}>
                    <Text style={styles.dolorSign}>$</Text>
                    <Text style={styles.priceTxt}>9.50</Text>
                </View>
                <View style={[commonStyle.rowCenter]}>
                    <TouchableOpacity>
                        <Icon name="minus-circle" size={30} color={colors.orange} style={commonStyle.orangeShadow} />
                    </TouchableOpacity>
                    <Text style={styles.itemName}>  02  </Text>
                    <TouchableOpacity>
                        <Icon1 name="circle-plus" size={30} color={colors.orange} style={commonStyle.orangeShadow} />
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={[commonStyle.m_20, commonStyle.mV15, styles.foodDetail]}>
                Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic –
                use fresh  chopped. Spices – chili powder, cumin, onion powder.
            </Text>
            <Text style={[commonStyle.m_20, commonStyle.v_10, styles.choiceTxt]}>
                Choice of Add On
            </Text>
            <View style={[commonStyle.rowSpace, commonStyle.m_20]}>
                <View style={[commonStyle.rowCenter]}>
                    <Image source={images.PepperJulienned} style={styles.ingredientImg} />
                    <Text style={styles.ingredientTxt}>Pepper  Julienned</Text>
                </View>
                <View style={[commonStyle.rowCenter]}>
                    <Text style={styles.ingredientPrice}>+$2.30</Text>
                    <TouchableOpacity>
                        <Image source={images.FilledDot} style={styles.filledImg} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[commonStyle.rowSpace, commonStyle.m_20]}>
                <View style={[commonStyle.rowCenter]}>
                    <Image source={images.BabySpinach} style={styles.ingredientImg} />
                    <Text style={styles.ingredientTxt}>Baby Spinach</Text>
                </View>
                <View style={[commonStyle.rowCenter]}>
                    <Text style={styles.ingredientPrice}>+$4.70</Text>
                    <TouchableOpacity>
                        <Image source={images.BlankDot} style={styles.blankImg} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[commonStyle.rowSpace, commonStyle.m_20]}>
                <View style={[commonStyle.rowCenter]}>
                    <Image source={images.Masroom} style={styles.ingredientImg} />
                    <Text style={styles.ingredientTxt}>Masroom</Text>
                </View>
                <View style={[commonStyle.rowCenter]}>
                    <Text style={styles.ingredientPrice}>+$2.50</Text>
                    <TouchableOpacity>
                        <Image source={images.BlankDot} style={styles.blankImg} />
                    </TouchableOpacity>
                </View>
            </View>
            <BagButton 
            style={[styles.btnView, commonStyle.orangeShadow]}
            color={colors.orange}
            buttonName='ADD TO CART'
            />
            </ScrollView>
        </SafeAreaView>
    )
}

export default FoodDetailScreen;