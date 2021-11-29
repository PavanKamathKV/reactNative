import React from 'react'
import { StyleSheet, View } from 'react-native'

const TextInput = () => {
    return (
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
    )
}

export default TextInput

const styles = StyleSheet.create({})
