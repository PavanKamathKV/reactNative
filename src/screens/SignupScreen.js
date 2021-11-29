import React, { useState, useEffect } from 'react'
import { Image, TextInput, View, Text, TouchableOpacity } from 'react-native'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import TextComponent from '../commonComponents/Text';

import styles from '../../Styles/Stylesheet'

const SignupScreen = ({ navigation}) => {
    const [passwordVisibility, setPasswordVisibility] = useState(true)
    const [enteredPassword, setEnteredPassword] = useState('')
   
    const validateLogin  = () => {
        if(enteredPassword.length < 6){
            alert("Please enter valid Login Credentials")
        }  
        else{
            alert("Successfully Registered!")
            navigation.navigate('Axios')
        }  
    }

    return (
        <View >
        <View style={styles.container}>
                {/* <Image style={styles.logo}
                source={{uri: "https://loons.co.in/img/logo.gif"}}
                /> */}
                {/* <Text style={styles.headingText}>
                    Boiler Plate for React Native
                </Text> */}
                <TextComponent text="Boiler Plate for React Native"/>

            </View>

            <View style={styles.loginContainer}>
                <TextInput
                style={styles.textInput}
                placeholder="Enter Email or Phone Number"
            
                />
            
                <View style={styles.passwordTextbox}>
                    <TextInput
                    secureTextEntry={passwordVisibility}
                    style={styles.textBox}
                    placeholder="Enter Password"
                    value={enteredPassword}
                    onChangeText={(text) => setEnteredPassword(text)}
                    />
                    
        
                    <TouchableOpacity
                    onPress={() => setPasswordVisibility(!passwordVisibility)}>
                        {passwordVisibility?<FontAwesome5Icon name="eye" size={25} color= "#080808"></FontAwesome5Icon>: <FontAwesome5Icon name="eye-slash" size={25} color="#080808"></FontAwesome5Icon>}
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.container}>
                <TouchableOpacity 
                style={styles.loginbtn}
                // onPress={() => navigation.navigate('Dashboard')}
                

                onPress={() => validateLogin()}
                >
                    <Text style={styles.loginText}>
                        Register
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignupScreen