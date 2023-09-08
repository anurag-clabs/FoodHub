import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SighUp from '../component/SignUp/SignUpScreen'
import WelcomScreen from '../component/WelcomScreen/WelcomeScreen';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}
            initialRouteName="AuthScreen">
            <Stack.Screen name='WelcomeScreen' component={WelcomScreen} />
            <Stack.Screen name='SignUp' component={SighUp} />
        </Stack.Navigator>
    )
}

export default StackNavigation;