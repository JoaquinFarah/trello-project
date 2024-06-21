'use server'

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export type State = {
    errors?: {
        title?: string[];
    },
    message?: string | null;
}


export async function createCard(formData: FormData) {
        const title= formData.get('title') as string;
        const description= formData.get('description') as string;
        const id = formData.get('organizationId') as string;
        const list_id = formData.get('listId') as string;
    try {
        await fetch(`http://localhost:3000/api/card/list/${list_id}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ title, description, list_id }),
        })
        
    } catch (error) {
        console.log(error)
    }

    revalidatePath(`/organization/${id}`);
    redirect(`/organization/${id}`);

  }