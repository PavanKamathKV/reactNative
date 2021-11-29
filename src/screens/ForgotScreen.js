import React from 'react'
import { TextInput, TouchableOpacity, Text, View } from 'react-native'
import styles from '../../Styles/Stylesheet'

const ForgotScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.headingText]}>
                Reset you Password
            </Text>
            <TextInput
                style={styles.resetText}
                placeholder="Enter Email ID"
            />
            <TouchableOpacity 
            style={styles.loginbtn}
            // onPress={() => navigation.navigate('Dashboard')}
            >
                <Text style={styles.loginText}>
                    Reset
                </Text>
            </TouchableOpacity>
    </View>
    )
}

export default ForgotScreen
