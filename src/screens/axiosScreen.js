import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Http from '../utils/Http'
const axiosScreen = ({ navigation }) => {
    return (
        <View>
           <Http />
        </View>
    )
}

export default axiosScreen

const styles = StyleSheet.create({})
