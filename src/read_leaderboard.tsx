import { supabase } from '../lib/supabase'
import { useState, useEffect } from "react";


export default async function readLeaderboard() {
    const user = supabase.auth.user();
    const [results, setResults] = useState([]);
  
    async function getResult() {
      //setLoading(true);
      const user = supabase.auth.user();
      const { data, error, status } = await supabase
        .from("points")
        .select(`username, pts`)
        .eq("user_id", user.id)
        .order('pts', {ascending: true});
  
      const newData = Array.from(data);
      setResults(newData);
    }
    useEffect(() => {
    getResult();
  }, []);

  }
