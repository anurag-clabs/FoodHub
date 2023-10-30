import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './style';
import { images } from '../../utils/image';
import { commonStyle } from '../../utils/commonStyles';
import { ApplyButton } from '../../common/Button/Button';
import { colors } from '../../utils/colors';

const FilterScreen = ({ onclick }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onclick} style={styles.closeImg}>
        <Image source={images.Close} style={styles.closeIcon} />
      </TouchableOpacity>
      <View style={commonStyle.m_20}>
        <Text style={styles.itemName}>Sort</Text>
        <View style={[styles.devider,]} />
        <TouchableOpacity style={[commonStyle.rowSpace, commonStyle.mV5]}>
          <Text style={styles.subTotalTxt}>Relevance</Text>
          <Image source={images.BlankDot} style={styles.blankImg} />
        </TouchableOpacity>
        <TouchableOpacity style={[commonStyle.rowSpace, commonStyle.mV5]}>
          <Text style={styles.subTotalTxt}>Rating: High To Low</Text>
          <Image source={images.FilledDot} style={styles.filledImg} />
        </TouchableOpacity>
        <TouchableOpacity style={[commonStyle.rowSpace, commonStyle.mV5]}>
          <Text style={styles.subTotalTxt}>Rating: Low To High</Text>
          <Image source={images.BlankDot} style={styles.blankImg} />
        </TouchableOpacity>
        <TouchableOpacity style={[commonStyle.rowSpace, commonStyle.mV5]}>
          <Text style={styles.subTotalTxt}>Delivery Time & Relevance</Text>
          <Image source={images.BlankDot} style={styles.blankImg} />
        </TouchableOpacity>
        <TouchableOpacity style={[commonStyle.rowSpace, commonStyle.mV5]}>
          <Text style={styles.subTotalTxt}>Cost: Low To High</Text>
          <Image source={images.BlankDot} style={styles.blankImg} />
        </TouchableOpacity>
        <TouchableOpacity style={[commonStyle.rowSpace, commonStyle.mV5]}>
          <Text style={styles.subTotalTxt}>Cost: High To Low</Text>
          <Image source={images.BlankDot} style={styles.blankImg} />
        </TouchableOpacity>
      </View>
      <View style={[styles.devider, commonStyle.m_20, commonStyle.mT10,]} />
      <View style={[commonStyle.rowSpace, commonStyle.m_20]}>
        <TouchableOpacity>
          <Text style={styles.cleanTxt}>Clear All</Text>
        </TouchableOpacity>
        <ApplyButton
          style={styles.applyButton}
          txtstyle={styles.Txtstyle}
          color={colors.orange}
          txtcolor={colors.white}
          buttonName='Apply'
        />
      </View>
    </View>
  )
}

export default FilterScreen;