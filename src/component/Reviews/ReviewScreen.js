import { View, Text, SafeAreaView, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import { commonStyle } from '../../utils/commonStyles';
import Header from '../../common/Header/Header';
import { TextInputText } from '../../common/TextInputComponent/TextInputComponent';
import { styles } from './style';
import { images } from '../../utils/image';
import { Font } from '../../utils/Fonts';
import { colors } from '../../utils/colors';
import { useNavigation } from '@react-navigation/native';
import { s } from 'react-native-size-matters';
import UserReview from '../../common/UserReview/UserReview';

const reviewsData = [
    {
        id: '1',
        UserImage: images.User1,
        Rating: '5.0',
        UserName: 'Alyce Lambo',
        Date: '25/06/2020',
        MoreImage: images.MoreDot,
        ReviewDescription:
            'Really convenient and the points system helps benefit loyalty. Some mild glitches here and there, but nothing too egregious. Obviously needs to roll out to more remote.',
    },
    {
        id: '2',
        UserImage: images.User2,
        Rating: '4.5',
        UserName: 'Gonela Solom',
        Date: '22/06/2020',
        MoreImage: images.MoreDot,
        ReviewDescription:
            "Been a life saver for keeping our sanity during the pandemic, although they could improve some of their ui and how they handle specials as it often is unclear how to use them or everything is sold out so fast it feels a bit bait and switch. Still I'd be stir crazy and losing track of days without so...",
    },
    {
        id: '3',
        UserImage: images.User3,
        Rating: '3.5',
        UserName: 'Brian C',
        Date: '21/06/2020',
        MoreImage: images.MoreDot,
        ReviewDescription:
            'Got an intro offer of 50% off first order that did not work..... I have scaled the app to find a contact us button but only a spend with us button available.',
    },
    {
        id: '4',
        UserImage: images.User4,
        Rating: '3.0',
        UserName: 'Helsmar E',
        Date: '20/06/2020',
        MoreImage: images.MoreDot,
        ReviewDescription:
            'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis. Amet minim mollit non deserunt ullamco est sit.',
    },
];


const ReviewScreen = () => {

    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <UserReview
            UserImage={item.UserImage}
            Rating={item.Rating}
            UserName={item.UserName}
            Date={item.Date}
            MoreImage={item.MoreImage}
            ReviewDescription={item.ReviewDescription}
        />
    );

    return (
        <SafeAreaView style={commonStyle.constainer}>
            <Header
                Text='Reviews'
                onPress={() => navigation.goBack()}
            />
            <View style={styles.ReaviewTxtView}>
                <TouchableOpacity >
                    <Image source={images.UserProfile} style={styles.imageStyle} />
                </TouchableOpacity>
                <TextInputText
                    style={styles.textInputStyle}
                    placeHolder='Write Your Review...'
                />
            </View>
            <FlatList
                data={reviewsData}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    )
}

export default ReviewScreen;