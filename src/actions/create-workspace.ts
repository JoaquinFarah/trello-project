'use server'

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

export type State = {
    errors?: {
        title?: string[];
    },
    message?: string | null;
}

const CreateWorkSpae = z.object({
    title: z.string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string",
    }).min(3, {
        message: "Minimum length of 3 letters is required"
    }).max(20, { 
        message: "Must be 20 or fewer characters long" 
    }).trim(),
})

export async function create(prevState: State, formData: FormData) {

    const validatedFields = CreateWorkSpae.safeParse({
        title: formData.get('title')
    });

    if(!validatedFields.success){
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Missing fields."
        }
    }

    const { title } = validatedFields.data;

    try {
        await fetch(`http://localhost:3000/api/workspace/workspaces/58de8aa0-3a3b-4e6d-bd11-0e47716bde39`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ title }),
        })

        {message:'hola'}
        prevState.message = 'Holaaaa'
        
    } catch (error) {
        return {
            message: "Database Error"
        }
    }
    
    revalidatePath(`/organization`);
    redirect(`/organization`);

  }