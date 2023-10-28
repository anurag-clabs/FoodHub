import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { commonStyle } from '../../utils/commonStyles';
import { Header } from '../../common/Header/Header';
import { styles } from './style';
import { images } from '../../utils/image';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/FontAwesome6';
import { colors } from '../../utils/colors';
import { ApplyButton, Button } from '../../common/Button/Button';
import { useNavigation } from '@react-navigation/native';

const CartScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={commonStyle.constainer}>
            <Header
                Text='Cart'
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={[commonStyle.rowSpace, commonStyle.m_20, commonStyle.mV20]}>
                    <Image source={images.ChickenHawaiian} style={styles.ItemImg} />
                    <View style={[commonStyle.mH15, styles.ItemTxt]}>
                        <Text style={styles.itemName}>Red n hot pizza</Text>
                        <Text style={styles.itemDescription}>Spicy chicken, beef</Text>
                        <Text style={styles.itemPrice}>$15.30</Text>
                    </View>
                    <View style={{ alignItems: 'flex-end' }}>
                        <Icon2 name="close" size={20} color={colors.orange} />
                        <View style={[commonStyle.rowCenter, commonStyle.mT20]}>
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
                <View style={[commonStyle.rowSpace, commonStyle.m_20,]}>
                    <Image source={images.GreekSalad} style={styles.ItemImg} />
                    <View style={[commonStyle.mH15, styles.ItemTxt]}>
                        <Text style={styles.itemName}>Greek Salad</Text>
                        <Text style={styles.itemDescription}>with baked salmon</Text>
                        <Text style={styles.itemPrice}>$12.00</Text>
                    </View>
                    <View style={{ alignItems: 'flex-end' }}>
                        <Icon2 name="close" size={20} color={colors.orange} />
                        <View style={[commonStyle.rowCenter, commonStyle.mT20]}>
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
                <View style={[commonStyle.rowCenter, commonStyle.m_20, styles.textBarView, commonStyle.mV20]}>
                    <TextInput
                        placeholder='Promo Code'
                        style={styles.textInputBar}
                        placeholderTextColor={colors.lightGrey}
                    />
                    <ApplyButton
                        color={colors.orange}
                        Txtcolor={colors.white}
                        buttonName='Apply'
                    />
                </View>
                <View style={commonStyle.mB30}>
                    <View style={[commonStyle.rowSpace, commonStyle.m_20,]}>
                        <Text style={styles.subTotalTxt}>Subtotal</Text>
                        <View style={[commonStyle.rowCenter]}>
                            <Text style={styles.subTotalTxt}>$27.30 </Text>
                            <Text style={styles.itemNo}>USD</Text>
                        </View>
                    </View>
                    <View style={[styles.devider, commonStyle.m_20]} />
                    <View style={[commonStyle.rowSpace, commonStyle.m_20,]}>
                        <Text style={styles.subTotalTxt}>Tax and Fees</Text>
                        <View style={[commonStyle.rowCenter]}>
                            <Text style={styles.subTotalTxt}>$5.30 </Text>
                            <Text style={styles.itemNo}>USD</Text>
                        </View>
                    </View>
                    <View style={[styles.devider, commonStyle.m_20]} />
                    <View style={[commonStyle.rowSpace, commonStyle.m_20,]}>
                        <Text style={styles.subTotalTxt}>Delivery</Text>
                        <View style={[commonStyle.rowCenter]}>
                            <Text style={styles.subTotalTxt}>$1.00 </Text>
                            <Text style={styles.itemNo}>USD</Text>
                        </View>
                    </View>
                    <View style={[styles.devider, commonStyle.m_20]} />
                    <View style={[commonStyle.rowSpace, commonStyle.m_20,]}>
                        <View style={[commonStyle.rowCenter]}>
                            <Text style={styles.subTotalTxt}>Total </Text>
                            <Text style={styles.itemNo}>(2 Items)</Text>
                        </View>
                        <View style={[commonStyle.rowCenter]}>
                            <Text style={styles.subTotalTxt}>$33.60 </Text>
                            <Text style={styles.itemNo}>USD</Text>
                        </View>
                    </View>
                </View>
                
                <Button
                    style={styles.bottomButton}
                    color={colors.orange}
                    buttonName="GO TO PAYMENT"
                    onPress={() => navigation.navigate('PaymentMethod')}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

export default CartScreen;