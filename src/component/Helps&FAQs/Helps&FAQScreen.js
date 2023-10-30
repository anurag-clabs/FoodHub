import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native';
import { commonStyle } from '../../utils/commonStyles';
import { Header } from '../../common/Header/Header';
import { useNavigation } from '@react-navigation/native';
import { styles } from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../utils/colors';
import { images } from '../../utils/image';

const HelpsFAQScreen = () => {
    const navigation = useNavigation();
    const [isExpanded1, setIsExpanded1] = useState(false);
    const [isExpanded2, setIsExpanded2] = useState(false);
    const [isExpanded3, setIsExpanded3] = useState(false);
    const [isExpanded4, setIsExpanded4] = useState(false);

    const toggleExpansion = (sectionNumber) => {
        if (sectionNumber === 1) {
            setIsExpanded1(!isExpanded1);
        } else if (sectionNumber === 2) {
            setIsExpanded2(!isExpanded2);
        } else if (sectionNumber === 3) {
            setIsExpanded3(!isExpanded3);
        } else if (sectionNumber === 4) {
            setIsExpanded4(!isExpanded4);
        }
    };

    return (
        <SafeAreaView style={commonStyle.constainer}>
            <Header
                text='Helps & FAQs'
            />
            <View style={styles.header}>
                <Text style={styles.headerText}>Helps & FAQs</Text>
                <Text style={styles.description}>Didn't find the answer you were looking for? Contact our support center!</Text>
                <TouchableOpacity style={[commonStyle.flexRow, commonStyle.mT10]} onPress={() => navigation.navigate('Contact')}>
                    <Icon name="support-agent" size={30} color={colors.orange} />
                    <Text style={styles.contectBtn}>  Contact Us</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[commonStyle.flexRow, commonStyle.mT10]}>
                    <Icon1 name="file-document-outline" size={30} color={colors.orange} />
                    <Text style={styles.contectBtn}>  Terms of Service</Text>
                </TouchableOpacity>
                <View style={[styles.textInputStyleView, commonStyle.mV20]}>
                    <Image style={styles.search} source={images.search} />
                    <TextInput
                        placeholder="Search Terms of Service"
                        style={styles.textInputBar}
                    />
                </View>
                <View style={[commonStyle.rowSpace, styles.termsView, commonStyle.mB10]}>
                    <Text style={styles.conditionTxt}>
                        How do I change my password ?
                    </Text>
                    <TouchableOpacity onPress={() => toggleExpansion(1)}>
                        <Text style={styles.conditionTxt}>
                            {isExpanded1 ? '▲' : '▼'}
                        </Text>
                    </TouchableOpacity>
                </View>
                {isExpanded1 && (
                    <View style={[styles.termsDataView, commonStyle.mB10]}>
                        <Text style={styles.conditionDataTxt}>
                            To change your password, procced to menu and select a profile. Then retype your currect password and click cinfirm password.
                        </Text>
                    </View>
                )}
                <View style={[commonStyle.rowSpace, styles.termsView, commonStyle.mB10]}>
                    <Text style={styles.conditionTxt}>
                        How to change my profile status ?
                    </Text>
                    <TouchableOpacity onPress={() => toggleExpansion(2)}>
                        <Text style={styles.conditionTxt}>
                            {isExpanded2 ? '▲' : '▼'}
                        </Text>
                    </TouchableOpacity>
                </View>
                {isExpanded2 && (
                    <View style={[styles.termsDataView, commonStyle.mB10]}>
                        <Text style={styles.conditionDataTxt}>
                            This is some additional information that can be expanded or collapsed.
                        </Text>
                    </View>
                )}
                <View style={[commonStyle.rowSpace, styles.termsView, commonStyle.mB10]}>
                    <Text style={styles.conditionTxt}>
                        How to change my language ?
                    </Text>
                    <TouchableOpacity onPress={() => toggleExpansion(3)}>
                        <Text style={styles.conditionTxt}>
                            {isExpanded3 ? '▲' : '▼'}
                        </Text>
                    </TouchableOpacity>
                </View>
                {isExpanded3 && (
                    <View style={[styles.termsDataView, commonStyle.mB10]}>
                        <Text style={styles.conditionDataTxt}>
                            This is some additional information that can be expanded or collapsed.
                        </Text>
                    </View>
                )}
                <View style={[commonStyle.rowSpace, styles.termsView, commonStyle.mB10]}>
                    <Text style={styles.conditionTxt}>
                        How to export contacts ?
                    </Text>
                    <TouchableOpacity onPress={() => toggleExpansion(4)}>
                        <Text style={styles.conditionTxt}>
                            {isExpanded4 ? '▲' : '▼'}
                        </Text>
                    </TouchableOpacity>
                </View>
                {isExpanded4 && (
                    <View style={[styles.termsDataView, commonStyle.mB10]}>
                        <Text style={styles.conditionDataTxt}>
                            This is some additional information that can be expanded or collapsed.
                        </Text>
                    </View>
                )}
            </View>
        </SafeAreaView>
    )
}

export default HelpsFAQScreen;
