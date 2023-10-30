import React, { useState } from 'react';
import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native';
import { commonStyle } from '../../utils/commonStyles';
import { BackButton, Button } from '../../common/Button/Button';
import { styles } from './style';
import { images } from '../../utils/image';
import StarRating from 'react-native-star-rating-widget';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../utils/colors';

const ReviewResturentScreen = () => {

    const navigation = useNavigation();
    const [rating, setRating] = useState(0);

    const getRatingText = () => {
        if (rating === 5) {
            return 'Excellent';
        } else if (rating >= 4) {
            return 'Very Good';
        } else if (rating >= 3) {
            return 'Good';
        } else if (rating >= 2) {
            return 'Fair';
        } else if (rating >= 1) {
            return 'Bad';
        } else {
            return '';
        }
    };

    return (
        <SafeAreaView style={commonStyle.constainer}>
            <BackButton />
            <ScrollView showsHorizontalScrollIndicator={false} >
                <View style={styles.mainView}>
                    <View style={styles.ResturentLogoView}>
                        <Image source={images.PizzaHutLogo} style={styles.PizzaHutImage} />
                    </View>
                    <Text style={styles.QuestionTxt}>How was your last order from Pizza Hut ?</Text>
                    <Text style={styles.rateTxt}>{getRatingText()}</Text>
                    <StarRating rating={rating} onChange={setRating} starSize={40} starStyle={styles.ratingContainer} />
                    <TextInput
                        multiline={true}
                        numberOfLines={5}
                        placeholder='Write Review'
                        style={styles.textInputStyle}
                        
                    />
                </View>
                <Button
                    buttonName='SUBMIT'
                    color={colors.orange}
                    onPress={() => navigation.navigate('Reviews')}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

export default ReviewResturentScreen;