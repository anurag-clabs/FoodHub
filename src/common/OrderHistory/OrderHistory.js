import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './styles';
import { images } from '../../utils/image';
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
                    <Image source={props.restaurantImage} />
                </View>
                <View style={styles.ResturentItemView}>
                    <Text style={styles.ItemTxt}>{props.orderDate}  •  {props.items}</Text>
                    <View style={styles.ResturentNameView}>
                        <Text style={styles.ResturentNameTxt}>{props.restaurantName} </Text>
                        <Image source={images.Verified} style={commonStyle.imageStyle} />
                    </View>
                    <Text style={styles.deliveryStatus}>
                        <Icon name="circle" size={9} color={colors.green} />  Order Delivered</Text>
                </View>
                <View >
                    <Text style={styles.orderNumberTxt}>{props.orderPrice}</Text>
                </View>
            </View>
            <View style={[commonStyle.rowSpace, commonStyle.mH15, commonStyle.mV15]}>
                <SmallButton
                    style={commonStyle.blackShadow}
                    color={colors.white}
                    buttonName='Rate'
                    txtcolor={colors.black}
                    onPress={() => navigation.navigate('Reviews')}
                />
                <SmallButton
                    style={commonStyle.orangeShadow}
                    color={colors.orange}
                    buttonName='Re-Order'
                    txtcolor={colors.white}
                />
            </View>
        </View>
    )
}

export default OrderHistory;