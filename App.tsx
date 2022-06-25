import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './components/Home';
import Leaderboard from './components/Leaderboard';
import Statistics from './components/Statistics';
import Timer from './components/Timer';
import Auth from './components/Auth';
import Account from './components/Account';
import { Session } from '@supabase/supabase-js';
import { useState, useEffect } from 'react';
import { supabase } from './lib/supabase';
import LeaderboardButton from "./leaderboardbutton";

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
            {session && session.user ? <Account key={session.user.id} session={session} /> : <Auth />}
            <Stack.Navigator>
                <Stack.Screen
                    name = "Auth"
                    component = {Auth}
                />
                <Stack.Screen
                    name = "Account"
                    component = {Account}
                />
                <Stack.Screen 
                name = "Leaderboard" 
                component = {Leaderboard}
                options = {{
                    headerShown: false,
                }} />
                <Stack.Screen 
                name ="Timer" 
                component = {Timer}
                options = {{
                    headerShown: false,
                }} />
                <Stack.Screen 
                name = "Statistics" 
                component = {Statistics}
                options = {{
                    headerShown: false,
                }} />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}