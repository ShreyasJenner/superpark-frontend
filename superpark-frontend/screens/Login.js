import * as React from 'react';
import {View} from "react-native";
import { Button } from 'react-native';
import { useAuth } from '../context/AuthContext'

const LoginScreen = () => {
    const {setAuth} = useAuth();

    return (
        <View>
            <Button title='Login' onPress={() => setAuth(true)} />
        </View>
    )
};

export default LoginScreen;