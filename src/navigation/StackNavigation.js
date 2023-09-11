import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from '../Screen/Welcome';
import SignUpScreen from '../Screen/SignUp';
import LoginScreen from '../Screen/Login';
import VerificationCode from '../Screen/VerificationCode';
import RessetPassword from '../Screen/RessetPassword';
import PhoneRegistration from '../Screen/PhoneRegistration';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}
            initialRouteName="WelcomeScreen">
            <Stack.Screen name='WelcomeScreen' component={Welcome} />
            <Stack.Screen name='SignUp' component={SignUpScreen} />
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Verification' component={VerificationCode} />
            <Stack.Screen name='RessetPassword' component={RessetPassword} />
            <Stack.Screen name='PhoneRegistration' component={PhoneRegistration} />
        </Stack.Navigator>
    )
}

export default StackNavigation;