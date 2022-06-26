import 'react-native-url-polyfill/auto'
import { useState, useEffect } from 'react'
import { supabase } from './lib/supabase'
import Auth from './components/Auth'
import Account from './components/Account'
import { Session } from '@supabase/supabase-js'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Timer from './components/Timer'
import Leaderboard from './components/Leaderboard'
import Statistics from './components/Statistics'

const Stack = createStackNavigator();

export default function App() {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator
        /*screenOptions={ {
          header : () => null
        }}*/>
        <Stack.Screen
          name = "Auth"
          component = {Auth}
        />
        <Stack.Screen
          name = "Account"
          component = {Account}
        />
        <Stack.Screen
          name = "Timer"
          component = {Timer}
        />
        <Stack.Screen
          name = "LeaderBoard"
          component = {Leaderboard}
        />
        <Stack.Screen
          name = "Stastics"
          component = {Statistics}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
