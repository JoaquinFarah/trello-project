'use server'

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation";

export async function deleteList(id: string, workSpaceId:string ){
    console.log(id, 'desde deleteeeeeeeeeeeeeeeeeeeeeeee')
    try {
        await fetch(`http://localhost:3000/api/list/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
            },
        })
        
    } catch (error) {
       console.log(error)
    }
    revalidatePath(`/organization/${workSpaceId}`);
    redirect(`/organization/${workSpaceId}`);

}