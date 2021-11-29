import React,{useState} from 'react'
import { Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import axios from 'axios'

const Http = () => {
    const [loading, setloading] = useState(undefined)
    const getDataAsync =  () => {
        
        setloading(true);
      
             axios.get('https://jsonplaceholder.typicode.com/users/1').then(()=>{
                console.log(loading);
                setloading(false)
                console.log(loading);
            })
           loading? <ActivityIndicator/>:alert("API CALLED")
        
    }
    return (
        <View>
           
     
        </View>
    )
}

export default Http

