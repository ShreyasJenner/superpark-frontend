import {use, useState} from 'react';
import {Platform, TextInput, Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import { useAuth } from '../context/AuthContext'

import UserTypes from '../constants/UserTypes';

// component for login container
const LoginContainer = () => {
    const { setAuth } = useAuth();

    const [focus, setFocus] = useState(false);
    const [usertype, SetUserType] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.loginSignContainer}>
            <Dropdown
            data={UserTypes}
            labelField="label"
            valueField="value"
            value={usertype}
            placeholder={!focus?'Select User Type':'...'}
            onFocus={() => setFocus(true)}
            onChange={item => {
                SetUserType(item.label);
                setFocus(false);
            }}

            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            containerStyle={styles.dropdownContainer}
            itemTextStyle={styles.itemTextStyle}
            />

            <TextInput 
            style={styles.input}
            placeholder='Enter Username'
            value={username}
            onChangeText={setUsername}
            />

            <TextInput
            style={styles.input}
            placeholder='Enter Password'
            value={password}
            onChangeText={setPassword}
            />

            <TouchableOpacity onPress={() => setAuth(true)} style={styles.buttonContainerStyle}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    );
}

// component for Sign Up container
const SignUpContainer = () => {
    const { setAuth } = useAuth();

    const [focus, setFocus] = useState(false);
    const [usertype, SetUserType] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.loginSignContainer}>
            <Dropdown
            data={UserTypes}
            labelField="label"
            valueField="value"
            value={usertype}
            placeholder={!focus?'Select User Type':'...'}
            onFocus={() => setFocus(true)}
            onChange={item => {
                SetUserType(item.label);
                setFocus(false);
            }}

            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            containerStyle={styles.dropdownContainer}
            itemTextStyle={styles.itemTextStyle}
            />

            <TextInput 
            style={styles.input}
            placeholder='Enter Username'
            value={username}
            onChangeText={setUsername}
            />

            <TextInput
            style={styles.input}
            placeholder='Enter Password'
            value={password}
            onChangeText={setPassword}
            />

            <TouchableOpacity onPress={() => setAuth(true)} style={styles.buttonContainerStyle}>
                <Text>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
}

// Component for Greeter Screen
const Greeter = () => {
    const [login, setLogin] = useState(true);

    return (

        <View style={styles.mainContainer}>

            <View style={styles.subContainerStyle}>
                <View style={styles.greeterContainerStyle}>
                    {/* Login Button */}
                    <TouchableOpacity onPress={() => setLogin(true)} style={styles.modeContainerStyle}>
                        <Text style={login?styles.underlinedText:null}>Login</Text>
                    </TouchableOpacity>

                    {/* Vertical Separator */}
                    <View style={styles.verticalSeparatorStyle}></View>

                    {/* Sign Up Button */}
                    <TouchableOpacity onPress={() => setLogin(false)} style={styles.modeContainerStyle}>
                        <Text style={!login?styles.underlinedText:null}>Sign Up</Text>
                    </TouchableOpacity>
                </View>  

                {login?<LoginContainer />:<SignUpContainer />}
            </View>  

        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    subContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: Platform.OS === 'web' ? '50%' : '70%',  // 70% for proper formatting on phone
        borderWidth: 2,
        borderColor: '#007BFF',
        borderRadius: 10,
    },
    greeterContainerStyle :{
        display: 'flex',
        flexDirection: 'row',
    },
    verticalSeparatorStyle: {
        height: '80%',
        width: '1px',
        marginTop: 10,
        backgroundColor: 'black',
    },
    modeContainerStyle: {
        width: '100px',
        margin: 20,
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        elevation: 3, // Shadow for Android
        shadowColor: "#000", // Shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    buttonContainerStyle: {
        backgroundColor: '#007BFF',
        width: '100px',
        margin: 10,
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        elevation: 3, // Shadow for Android
        shadowColor: "#000", // Shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    loginSignContainer: {
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dropdown: {
        width: '100%',
        backgroundColor: "#fff",
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: "#007BFF",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 3,
        marginBottom: 15,
    },
    placeholderStyle: {
        fontSize: 16,
        color: "#aaa",
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    dropdownContainer: {
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: 10,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    buttonTextStyle: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    itemTextStyle: {
        fontSize: 16,
        color: "#333",
    },
    input: {
        width: "100%", // Full-width input field
        backgroundColor: "#fff",
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 12,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#007BFF",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 3,
        color: "#333",
        marginBottom: 15,
    },
    underlinedText: {
        textDecorationLine: "underline", // Underline style when clicked
        fontWeight: 'bold',
        textDecorationStyle: "solid", // Optional: solid underline
    },
});

export default Greeter;