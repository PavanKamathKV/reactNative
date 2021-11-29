import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

import LoginScreen from './src/screens/LoginScreen';
import ForgotScreen from './src/screens/ForgotScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import SignupScreen from './src/screens/SignupScreen';
import axiosScreen from './src/screens/axiosScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export const Context = React.createContext(null)

const LoginCredendial = () => {

  const contextInitialState = {
    userName: null
  };

  const [user, setUser] = useState(contextInitialState);

  function setUserName(userName) {
    const newState = { ...user, userName };
    setUser(newState);
  }


  const contextSetters = {
    setUserName
  }

  return (
    <Context.Provider value={{ ...user, ...contextSetters }}>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotScreen} options={{title: "Reset Password"}}/>
      </Stack.Navigator>
    </Context.Provider>

  )
}


// ---------------------------------

const SignupCredendial = () => {

  // const contextInitialState = {
  //   userName: null
  // };

  // const [user, setUser] = useState(contextInitialState);

  // function setUserName(userName) {
  //   const newState = { ...user, userName };
  //   setUser(newState);
  // }


  // const contextSetters = {
  //   setUserName
  // }
  // value={{ ...user, ...contextSetters }}
  return (
    <Context.Provider value={{}}>
      <Stack.Navigator>
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Axios" component={axiosScreen} />

        {/* <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotScreen} /> */}
      </Stack.Navigator>
    </Context.Provider>

  )
}


// ------------------------------------
  
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'SignIn') {
              iconName = focused
                ? 'sign-in-alt'
                : 'sign-in-alt';
            } else if (route.name === 'SignUp') {
              iconName = focused ? 'user-plus' : 'user-plus';
            }

            return <FontAwesome5Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="SignIn" component={LoginCredendial}  options={{headerShown: false}}/>
        <Tab.Screen name="SignUp" component={SignupCredendial} options={{headerShown: false}}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App

