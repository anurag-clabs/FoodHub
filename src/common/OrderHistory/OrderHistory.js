import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './Styles';
import { images } from '../../utils/image';
import { Font } from '../../utils/Fonts';
import { commonStyle } from '../../utils/commonStyles';
import { colors } from '../../utils/colors';
import { SmallButton } from '../Button/Button';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const OrderHistory = props => {
    const navigation = useNavigation()
    return (
        <View style={[styles.MainView]}>
            <View style={styles.topView}>
                <View style={styles.imageView}>
                    <Image source={props.RestaurantImage} />
                </View>
                <View style={styles.ResturentItemView}>
                    <Text style={styles.ItemTxt}>{props.OrderDate}  •  {props.Items}</Text>
                    <View style={styles.ResturentNameView}>
                        <Text style={styles.ResturentNameTxt}>{props.RestaurantName} </Text>
                        <Image source={images.Verified} style={commonStyle.ImageStyle} />
                    </View>
                    <Text style={styles.deliveryStatus}>
                        <Icon name="circle" size={9} color={colors.green} />  Order Delivered</Text>
                </View>
                <View >
                    <Text style={styles.orderNumberTxt}>{props.OrderPrice}</Text>
                </View>
            </View>
            <View style={[commonStyle.rowSpace, commonStyle.mH15, commonStyle.mV15]}>
                <SmallButton
                    style={commonStyle.blackShadow}
                    color={colors.white}
                    buttonName='Rate'
                    Txtcolor={colors.black}
                    onPress={() => navigation.navigate('Reviews')}
                />
                <SmallButton
                    style={commonStyle.orangeShadow}
                    color={colors.orange}
                    buttonName='Re-Order'
                    Txtcolor={colors.white}
                />
            </View>
        </View>
    )
}

export default OrderHistory;