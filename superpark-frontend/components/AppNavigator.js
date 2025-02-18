import React, { createContext, useContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { useAuth } from '../context/AuthContext';

import DrawerScreens from './DrawerScreens';

import Greeter from '../screens/Greeter';

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
                        <Stack.Screen name="Greeter" component={Greeter} />
                    )
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;