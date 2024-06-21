'use client'

import React from 'react'
import { deleteWorkSpace } from '@/actions/delete-workspace';
import { Button } from '@nextui-org/react'
import { useFormStatus } from 'react-dom'

export const ButtonDelete = ({id}:{id: string;}) => {
    const {pending} = useFormStatus();
  return (
    <Button disabled={pending} className={`${pending ? 'bg-gray-500 ': 'bg-red-500'} text-white`} onClick={() => deleteWorkSpace(id)}>
        Delete
    </Button>
  )
}
