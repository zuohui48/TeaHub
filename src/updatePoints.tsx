import { supabase } from '../lib/supabase'
import getUsername from './getUsername';

export default async function updatePoints({points}) {

    const user = supabase.auth.user();
    if (!user) throw new Error("No user on the session!");
    
    const updates = {
      id: user.id,
      pts: points,
      username: getUsername,
      created_at: new Date(),
    };

    let { error } = await supabase
      .from("points")
      .upsert(updates, { returning: "minimal" });

    if (error) {
      throw error;
    }  
  }
      



  