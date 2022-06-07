import 'react-native-url-polyfill/auto'
import { useState, useEffect } from 'react'
import { supabase } from './lib/supabase'
import Auth from './components/Auth'
import Account from './components/Account'
import { Session } from '@supabase/supabase-js'
import React from 'react'
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from "react-native";
import { Svg, Path } from "react-native-svg";

export default function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <View style = {styles.body}>
      <Image
        style = {styles.logo} 
        source = {require("./images/logo.png")}/>
      {session && session.user ? <Account key={session.user.id} session={session} /> : <Auth />}
      </View>
  )
  }

const styles = StyleSheet.create({
  body: {
    backgroudColor: "#ffe4c4",
    display: "flex",
    flexDirection: "vertical",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    textAlign: "center"
  },
  logo: {
    width: 200,
    height: 150,
  },
});