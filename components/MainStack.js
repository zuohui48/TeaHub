import 'react-native-url-polyfill/auto'
import Account from './Account'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Timer from './Timer'
import Leaderboard from './Leaderboard'
import Statistics from './Statistics'
import Friends from './Friends'
import OrderType from './OrderType'
import Settings from './Settings'
import Gacha from './Gacha'
import GroupOrder from './GroupOrder'

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
          name = "OrderType"
          component = {OrderType}
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
         <Stack.Screen
          name = "Settings"
          component = {Settings}
        />
        <Stack.Screen
          name = "Friends"
          component = {Friends}
        />
        <Stack.Screen
          name = "Gacha"
          component = {Gacha}
        />

        <Stack.Screen
          name = "GroupOrder"
          component = {GroupOrder}
        />
      </Stack.Navigator>


    )
}