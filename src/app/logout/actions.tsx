'use server'

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { createClient } from "@/app/utils/supabase/server";

export async function logout() {
    const supabase = createClient()
  
    const { error } = await supabase.auth.signOut();
  
    if (error) {
      redirect('/error')
    }
  
    revalidatePath('/', 'layout')
    redirect('/')
  }