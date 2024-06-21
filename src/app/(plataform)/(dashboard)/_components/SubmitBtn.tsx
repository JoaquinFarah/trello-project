'use client'

import { Button } from "@nextui-org/react"
import { useFormStatus } from "react-dom"

export const SubmitBtn = () => {
    const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className={`${pending ? 'bg-gray-500' :'bg-black '} text-white`}>Submit</Button>
    
  )
}
