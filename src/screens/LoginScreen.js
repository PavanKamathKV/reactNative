import React, { useContext, useState } from 'react'
import { Text, TextInput, TouchableOpacity, View , ActivityIndicator} from 'react-native'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { Context } from '../../App';
import styles from '../../Styles/Stylesheet'
import TextComponent from '../commonComponents/Text';
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
const context = useContext(Context)
const [passwordVisibility, setPasswordVisibility] = useState(true)
const [enteredPassword, setEnteredPassword] = useState('')
const [isLoading, setLoading] = useState(false)

const getDataAsync =  () => {
        
        setLoading(true);
      
             axios.get('https://jsonplaceholder.typicode.com/users/1').then(()=>{
                console.log(isLoading);
                setLoading(false)
                console.log(isLoading);
            })
           isLoading? (
        <View style={{flex:1}}>   
           <ActivityIndicator />
        </View>
        ):alert("API CALLED")   
    }

const validateLogin  = () => {
    if(context.userName.length<5 && enteredPassword.length<6){
        alert("Enter Valid Login Credentials")
    }
    else if(context.userName.length<5){
        alert("Enter Valid Login Credentials")
    }
    else if(enteredPassword.length < 6){
        alert("Enter Valid Login Credentials")
    }
    else{
        // alert("Login Successful!")
        getDataAsync()
        navigation.navigate('Dashboard')}
    }


    return (
        <View>
            <View style={styles.container}>
            
                {/* <Image style={styles.logo}
                source={{uri: "https://loons.co.in/img/logo.gif"}}
                /> */}
                {/* <Text style={styles.headingText}>
                    Boiler Plate for React Native
                </Text> */}
                <TextComponent text="Boiler Plate for React Native"/>
            </View>

            {/* <View style={{ alignItems: 'center'}}>
                <Text style={{fontSize:30, color: 'blue'}}>Login</Text>
            </View> */}

            <View style={styles.loginContainer}>
                <TextInput
                style={styles.textInput}
                placeholder="Enter Email or Phone Number"
                value={context.userName}
                onChangeText={(name) => context.setUserName(name)}
                />
            
                <View style={styles.passwordTextbox}>
                    <TextInput
                    secureTextEntry={passwordVisibility}
                    style={styles.textBox}
                    placeholder="Enter Password"
                    value={enteredPassword}
                    onChangeText = {text => setEnteredPassword(text)}
                    />
        
                    <TouchableOpacity
                    // style={styles.touchableBtn}
                    onPress={() => setPasswordVisibility(!passwordVisibility)}>
                        {passwordVisibility?<FontAwesome5Icon name="eye" size={25} color= "#080808"></FontAwesome5Icon>: <FontAwesome5Icon name="eye-slash" size={25} color="#080808"></FontAwesome5Icon>}
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.container}>
                <TouchableOpacity 
                style={styles.loginbtn}
                onPress={() => validateLogin()}
                >
                    <Text style={styles.loginText}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.centerAlign}>
                <Text style={styles.text}>
                    Forgot Password?
                    {' '}
                        <Text style={{color: 'blue'}}
                        onPress={() => navigation.navigate("ForgotPassword")}>
                            Click here to Reset
                        </Text>
                </Text>
            </View> 
        </View>
    )
}

export default LoginScreen
