import React, { createContext, useContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { useAuth } from '../context/AuthContext';
import DrawerScreens from './DrawerScreens';
import LoginScreen from '../screens/Login';

const Stack = createStackNavigator();

const AppNavigator = () => {
    const { auth } = useAuth();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                {
                    auth ? (
                        <Stack.Screen name="Drawer" component={DrawerScreens} />
                    ) : (
                        <Stack.Screen name="Auth" component={LoginScreen} />
                    )
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;