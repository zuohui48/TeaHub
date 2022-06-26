import 'react-native-url-polyfill/auto'
import { useState, useEffect } from 'react'
import { supabase } from './lib/supabase'
import Auth from './components/Auth'
import Account from './components/Account'
import { Session } from '@supabase/supabase-js'
import React from 'react'
import { View, Text, Image, ScrollView, StyleSheet, Dimensions, ImageBackgroundBase, ImageBackground, Modal } from "react-native";
import { Svg, Path } from "react-native-svg";
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Leaderboard from './components/Leaderboard'

 
const Stack = createStackNavigator();

export default function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={ {
          header : () => null
        }}>
        <Stack.Screen
          name = "Auth"
          component = {Auth}
        />
        <Stack.Screen
          name = "Account"
          component = {Account}
        />
        <Stack.Screen 
          name ="Leaderboard" 
          component = {Leaderboard}
          options = {{
          headerShown: false,
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
        }

