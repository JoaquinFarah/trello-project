'use server'

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export type State = {
    errors?: {
        title?: string[];
    },
    message?: string | null;
}


export async function createList(formData: FormData) {
        const title= formData.get('title') as string;
        const id = formData.get('organizationId') as string;
    try {
        await fetch(`http://localhost:3000/api/list/workspace/${id}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ title }),
        })
        
    } catch (error) {
        return {
            message: "Database Error"
        }
    }

    revalidatePath(`/organization/${id}`);
    redirect(`/organization/${id}`);

  }