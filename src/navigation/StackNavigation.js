import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '../Screen/Welcome';
import SignUpScreen from '../Screen/SignUp';
import LoginScreen from '../Screen/Login';
import VerificationCode from '../Screen/VerificationCode';
import RessetPassword from '../Screen/RessetPassword';
import PhoneRegistration from '../Screen/PhoneRegistration';
import DrawerNavigation from './DrawerNavigation';
import Contact from '../Screen/Contact';
import Setting from '../Screen/Setting';
import ChangePassword from '../Screen/ChangePassword';
import Authatication from '../Screen/AuthScreen';
import FoodDetail from '../Screen/FoodDetail';
import Category from '../Screen/Category';
import Filter from '../Screen/Filter';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="AuthScreen">
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name='AuthScreen' component={Authatication} />
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
    </Stack.Navigator>
  );
};

export default StackNavigation;
