'use server'

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation";

export async function deleteWorkSpace(id: string){
    try {
        await fetch(`http://localhost:3000/api/workspace/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
            },
        })
        
    } catch (error) {
       console.log(error)
    }
    revalidatePath(`/organization`);
    redirect(`/organization`);

}