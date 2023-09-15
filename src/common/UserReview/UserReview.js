import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { images } from '../../utils/image'
import { commonStyle } from '../../utils/commonStyles'
import { ms, s, vs } from 'react-native-size-matters'
import { Font } from '../../utils/Fonts'
import { colors } from '../../utils/colors'

const UserReview = props => {
    return (
        <View style={styles.userView}>
            <View style={styles.userHeaderView}>
                <View style={styles.userImgView}>
                    <Image source={props.UserImage} style={styles.userImg} />
                    <View style={styles.reviewCount}>
                        <Text style={styles.reviewCountTxt}>{props.Rating}</Text>
                    </View>
                </View>
                <View style={styles.usernameView}>
                    <Text style={styles.userName}>{props.UserName}</Text>
                    <Text style={styles.date}>{props.Date}</Text>
                </View>
                <TouchableOpacity>
                    <Image source={props.MoreImage} style={commonStyle.imageStyle} />
                </TouchableOpacity>
            </View>
            <Text style={styles.reviewDescription}>{props.ReviewDescription}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    userView: {
        marginHorizontal: s(20),
        marginVertical: vs(10),
    },
    reviewDescription: {
        width: '95%',
        fontSize: 17,
        fontFamily: Font.sofiaProMedium,
    },
    userHeaderView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userName: {
        fontFamily: Font.sofiaProMedium,
        color: colors.black,
        fontSize: 15
    },
    date: {
        fontFamily: Font.sofiaProMedium
    },
    usernameView: {
        height: vs(55),
        width: s(190),
        marginHorizontal: s(10), 
        marginRight: 50,
    },
    reviewCount: {
        height: ms(18),
        width: ms(19),
        resizeMode: 'contain',
        borderRadius: ms(12) / 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.yellow,
        shadowOpacity: 1,
        shadowRadius: 4,
        shadowColor: colors.yellow,
        shadowOffset: { width: -2, height: 5 },
        elevation: 10,
        position: 'absolute',
        right: 0,
        bottom: 15
    },
    reviewCountTxt: {
        fontFamily: Font.sofiaProMedium,
        color: colors.white,
        fontSize: 10,
    },
    userImgView: {
        height: ms(55),
        width: ms(55),
        borderRadius: ms(55) / 2,
    },
    userImg: {
        height: ms(45),
        width: ms(55),
        resizeMode: 'contain',
        borderRadius: ms(45) / 2,
    },
})

export default UserReview;