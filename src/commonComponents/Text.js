import React from 'react'
import { Text, View, Image } from 'react-native'
import styles from '../../Styles/Stylesheet'

const TextComponent = ({text}) => {
    return (
        <View>

            <View style={styles.container}>
            <Image style={styles.logo}
                source={{uri: "https://loons.co.in/img/logo.gif"}}
            />
            <Text style={styles.textComponent}>{text}</Text>

            </View>  
        </View> 
    )
}

export default TextComponent

