import 'react-native-url-polyfill/auto'
import { useState, useEffect } from 'react'
import { supabase } from './lib/supabase'

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { MainScreenStack } from './components/MainStack'
import { AuthScreenStack } from './components/AuthStack'


const Stack = createStackNavigator();

export default function App() {
  const [session, setSession] = useState(false)

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <NavigationContainer>
      {session ? <MainScreenStack /> : <AuthScreenStack />}
    </NavigationContainer>
  )
}
