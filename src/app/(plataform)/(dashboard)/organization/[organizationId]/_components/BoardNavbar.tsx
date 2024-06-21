'use client'

import React from 'react'
import { ButtonDelete } from './ButtonDelete'

export const BoardNavbar = ({id}: {id: string}) => {
  return (
    <div className='flex justify-between p-5'>
        <h2 className='text-white font-semibold'>Project Name</h2>
        <ButtonDelete id={id}/>
    </div>
  )
}
