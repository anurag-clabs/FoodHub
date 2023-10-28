import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import { commonStyle } from '../../utils/commonStyles';
import { Header } from '../../common/Header/Header';
import { useNavigation } from '@react-navigation/native';
import Icon1 from 'react-native-vector-icons/FontAwesome6';
import { styles } from './style';
import { colors } from '../../utils/colors';
import { images } from '../../utils/image';
import { useState } from 'react';
import { Button } from '../../common/Button/Button';

const PaymentMethodScreen = () => {
    
 const PaymentMethods = [
    {
      id: 1,
      name: '**********4444',
      Image: images.Master,
      date: 'Expires 09/25',
    },
    {
      id: 2,
      name: '**********3343',
      Image: images.Visa,
      date: 'Expires 09/25',
      tintColor: colors.Blue
    },
  ];
    const [selectedMethod, setSelectedMethod] = useState(null);

    return (
        <SafeAreaView style={commonStyle.constainer}>
            <Header
                Text='Payment Method'
            />
            <View style={styles.header}>
                <Text style={styles.headerText}>Payments methods</Text>
                <Text style={styles.description}>choose desired payment type. We offer easy ways for payments on our app</Text>
            </View >
            {PaymentMethods.map((method) => (
                <TouchableOpacity
                    key={method.id}
                    style={[
                        styles.paymentMethod,
                        selectedMethod === method ? styles.selectedMethod : null,
                    ]}
                >
                    <Image style={[styles.methodImage, { tintColor: method.tintColor }]} source={method.Image} />
                    <View >
                        <Text style={[styles.methodName, { fontSize: method.fontsize, }]}>{method.name}</Text>
                        <Text style={styles.methodDate}>{method.date}</Text>
                    </View>
                </TouchableOpacity>
            ))}
            <Text style={styles.midTitle}>CURRENT METHOD</Text>
            <View style={styles.dataTxt}>
                <TouchableOpacity>
                    <View style={[commonStyle.rowCenter]}>
                        <Text style={styles.cashTxt}><Icon1 name="money-check-dollar" size={25} color={colors.orange} />  Cash on Delivery</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomImgView} >
                    <Image style={styles.bottomImg} source={images.OpenAero} />
                </TouchableOpacity>
            </View>
            <Button
                    style={styles.bottomButton}
                    color={colors.orange}
                    buttonName="CONFIRM PAYMENT"
                />
        </SafeAreaView>
    )
}

export default PaymentMethodScreen;