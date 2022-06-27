import { supabase } from '../lib/supabase'
import { useState, useEffect } from "react";
import { ApiError, Session } from "@supabase/supabase-js";

export default async function getUsername( { session }: { session: Session }) {
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
  let { data: points } = await supabase
  .from('points')
  .select("username").eq('id', user.id)
  

}