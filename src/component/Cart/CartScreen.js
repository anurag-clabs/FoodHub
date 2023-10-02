import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { commonStyle } from '../../utils/commonStyles';
import { Header } from '../../common/Header/Header';
import { CartData } from '../../common/Data/Data';
import { styles } from './Style';
import { images } from '../../utils/image';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/FontAwesome6';
import { colors } from '../../utils/colors';
import { s } from 'react-native-size-matters';

const CartScreen = Item => {
    return (
        <SafeAreaView style={commonStyle.SafeAreaView}>
            <Header
                Text='Cart'
            />
            <View style={[commonStyle.rowSpace, commonStyle.m_20, commonStyle.mV20]}>
                <Image source={images.ChickenHawaiian} style={styles.ItemImg} />
                <View style={[commonStyle.mH15, styles.ItemTxt]}>
                    <Text style={styles.itemName}>Red n hot pizza</Text>
                    <Text style={styles.itemDescription}>Spicy chicken, beef</Text>
                    <Text style={styles.itemPrice}>$15.30</Text>
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                    <Icon2 name="close" size={20} color={colors.orange} />
                    <View style={[commonStyle.rowCenter, { marginTop: s(20) }]}>
                        <TouchableOpacity>
                            <Icon name="minus-circle" size={25} color={colors.orange} style={commonStyle.orangeShadow} />
                            </TouchableOpacity>
                                <Text style={styles.itemName}>  02  </Text>
                                <TouchableOpacity>
                                    <Icon1 name="circle-plus" size={25} color={colors.orange} style={commonStyle.orangeShadow} />
                                </TouchableOpacity>
                            </View>
                    </View>
                </View>
        </SafeAreaView>
    )
}

export default CartScreen;