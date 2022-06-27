import 'react-native-url-polyfill/auto'
import Auth from './Auth'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const Stack  = createStackNavigator();

export function AuthScreenStack() {
    return ( 
        <Stack.Navigator
        screenOptions={ {
          header : () => null
        }}>
        <Stack.Screen
          name = "Auth"
          component = {Auth}
        />
      </Stack.Navigator>


    )
}