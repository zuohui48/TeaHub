import { supabase } from '../lib/supabase'
import { useState, useEffect } from "react";
import { ApiError, Session } from "@supabase/supabase-js";

export default async function readLeaderboard( { session }: { session: Session }) {
    const user = supabase.auth.user();
    useEffect(() => {
      if (session) getProfile();
    }, [session]);
  
    async function getProfile() {
        const user = supabase.auth.user();
        if (!user) throw new Error("No user on the session!");
  
        let { data, error, status } = await supabase
          .from("profiles")
          .select(`username, fullname`)
          .eq("id", user.id)
          .single();
      }

    let { data : res, error} = await supabase
      .from('points')
      .select('username, pts')
      .order('pts', {ascending: true})
  
    if (error) {
      console.error(error)
      return
    }
    else { 
      return res
    }

  }
