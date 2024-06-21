'use server'

import { createClient } from "@/app/utils/supabase/server";

export const getUser = async() => {
    const supabase = createClient();
    const { data } = await supabase.auth.getUser();
    if(data.user){
        return data.user
    }else{
        return null;
    }
}