import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import styles from '../../Styles/Stylesheet'

import { Context } from '../../App'

const DashboardScreen = () => {

    const context = useContext(Context)

    const {
        userName
    } = context

    return (
        <View style={styles.container}> 
            <Text style={styles.headingText}>
                Hi {userName},
                {' '}
                <Text>
                You are logged In!!!
                </Text>
            </Text>
        </View>
    )
}

export default DashboardScreen
