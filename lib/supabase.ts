import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://twodmcqhumnjbatjaegy.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR3b2RtY3FodW1uamJhdGphZWd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM0Nzk0ODMsImV4cCI6MTk2OTA1NTQ4M30.rfEZdywrbQv0gODmjusG3k95alC5WmkcaAYJn0YR5xQ'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  localStorage: AsyncStorage as any,
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: false,
});