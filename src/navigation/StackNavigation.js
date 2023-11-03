import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddresseTextInput from '../common/Addresses/AddresseTextInput';
import Welcome from '../screens/Welcome';
import Authatication from '../screens/AuthScreen';
import Filter from '../screens/Filter';
import FoodDetail from '../screens/FoodDetail';
import PhoneRegistration from '../screens/PhoneRegistration';
import RessetPassword from '../screens/RessetPassword';
import SignUpScreen from '../screens/SignUp';
import LoginScreen from '../screens/Login';
import VerificationCode from '../screens/VerificationCode';
import Contact from '../screens/Contact';
import DrawerNavigation from './DrawerNavigation';
import Setting from '../screens/Setting';
import ChangePassword from '../screens/ChangePassword';
import Category from '../screens/Category';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="AuthScreen">
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="AuthScreen" component={Authatication} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Verification" component={VerificationCode} />
      <Stack.Screen name="RessetPassword" component={RessetPassword} />
      <Stack.Screen name="PhoneRegistration" component={PhoneRegistration} />
      <Stack.Screen name="Drawer" component={DrawerNavigation} />
      <Stack.Screen name="Contact" component={Contact} />
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="FoodDetail" component={FoodDetail} />
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="Filter" component={Filter} />
      <Stack.Screen name="AddresseTextInput" component={AddresseTextInput} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
