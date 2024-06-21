'use client'

import { create } from "@/actions/create-workspace"
import { Button, Input } from "@nextui-org/react"
import { useMemo, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { SubmitBtn } from "./SubmitBtn";

export const Form = () => {

    const initialState = { message: "", errors: {} };
    const [value, setValue] = useState<string>("");
    const [state, dispatch] = useFormState(create, initialState);
    const { pending, data  } = useFormStatus();

    const validateEmail = (value:string) => value.match(/\b\d{4,}\b/);
    const isInvalid = useMemo(() => {
      if (value === "") return false;
  
      return validateEmail(value) ? true : false;
    }, [value]);

    console.log(dispatch)

  return (
    <form action={dispatch} className="flex flex-col gap-4 md:w-1/4">
        <div className="flex flex-col">
            <Input
            id="title"
            name="title"
            label="Title"
            placeholder="Enter a board title"
            isDisabled={pending}
            isInvalid={isInvalid}
            errorMessage="Title is required"
            variant="bordered"
            color={isInvalid ? "danger" : "default"}
            labelPlacement="outside"
            onValueChange={setValue}
            fullWidth
            />
        {state?.errors?.title ? (
           <div>
            {
                state.errors.title.map((error:string, index) => (
                  <div className="font-regular relative mb-4 block w-full rounded-lg bg-red-500 p-4 text-base leading-5 text-white opacity-100" key={index}>
                  {error}
                </div>
                ))
            }
           </div>
        ): null}
        <SubmitBtn />
        </div>
    </form>
  )
}
