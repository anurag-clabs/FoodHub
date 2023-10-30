import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './styles';
import { commonStyle } from '../../utils/commonStyles';
import { SmallButton } from '../Button/Button';
import { colors } from '../../utils/colors';
import { Font } from '../../utils/Fonts';
import { images } from '../../utils/image';

const OrderDetail = props => {
  return (
    <View style={[styles.mainView]}>
      <View style={styles.topView}>
        <View style={styles.imageView}>
          <Image source={props.restaurantImage} />
        </View>
        <View style={styles.resturentItemView}>
          <Text style={styles.itemTxt}>{props.items}</Text>
          <View style={styles.resturentNameView}>
            <Text style={styles.resturentNameTxt}>{props.restaurantName} </Text>
            <Image source={images.Verified} style={commonStyle.imageStyle} />
          </View>
        </View>
        <View >
          <Text style={styles.orderNumberTxt}>{props.orderNumber}</Text>
        </View>
      </View>
      <View style={[commonStyle.flexRow, styles.deliveryStatusView]}>
        <View >
          <Text style={{ fontFamily: Font.SofiaProRegular }} >Estimated Arrival</Text>
          <View style={[commonStyle.flexRow,]}>
            <Text style={styles.timeTxt}>{props.estimateTime}</Text>
            <Text style={styles.minTxt}>min</Text>
          </View>
        </View>
        <View>
          <Text style={styles.statusTimeTxt}>Now</Text>
          <Text style={styles.statusTxt}>Food on the way</Text>
        </View>
      </View>
      <View style={[commonStyle.rowSpace, commonStyle.mH15, commonStyle.mV15]}>
        <SmallButton
          style={commonStyle.blackShadow}
          color={colors.white}
          buttonName='Cancel'
          txtcolor={colors.black}
        />
        <SmallButton
          style={commonStyle.orangeShadow}
          color={colors.orange}
          buttonName='Track Order'
          txtcolor={colors.white}
        />
      </View>
    </View>
  )
}

export default OrderDetail;