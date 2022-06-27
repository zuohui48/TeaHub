import 'react-native-url-polyfill/auto'
import Account from './Account'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Timer from './Timer'
import Leaderboard from './Leaderboard'
import Statistics from './Statistics'

const Stack  = createStackNavigator();

export function MainScreenStack() {
    return ( 
        <Stack.Navigator
        screenOptions={ {
          header : () => null
        }}>
        <Stack.Screen
          name = "Account"
          component = {Account}
        />
        <Stack.Screen
          name = "Timer"
          component = {Timer}
        />
        <Stack.Screen
          name = "Leaderboard"
          component = {Leaderboard}
        />
        <Stack.Screen
          name = "Statistics"
          component = {Statistics}
        />
      </Stack.Navigator>


    )
}