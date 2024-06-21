'use client'

import { useFormStatus } from "react-dom";
import { Button, Skeleton } from '@nextui-org/react';
import { deleteList } from "@/actions/delete-list";

interface WorkSpaceProps {
    title: string;
    id: string;
    index: number;
    workSpaceId: string;
}

export const WorkSpace = ({ title, id, index, workSpaceId }:WorkSpaceProps) => {

  const { pending } = useFormStatus();

  console.log(id)

  const backgrounds = [
    'bg-[#765898]',
    'bg-[#e6770b]',
    'bg-[#467d7f]',
    'bg-[#ffd500]',
  ];
  const backgroundClass = backgrounds[index % 4];
  return (
    <div
      className={`${backgroundClass} space-y-2 flex-col items-center gap-2 p-2 m-2 w-[15rem] hover:shadow-lg hover:scale-105 hover:border hover:border-black ease-in-out duration-300`}>
        <p className="font-semibold p-2">{!pending ? title: ''}</p>
        <p>{id}</p>
    <Button disabled={pending} className={`${pending ? 'bg-gray-500 ': 'bg-red-500'} text-white`} onClick={() => deleteList(id, workSpaceId)}>
        Delete
    </Button>
    </div>
  )
}

WorkSpace.Skeleton = function SkeletonWorkSpace() {
  return (
    <div>
      <Skeleton className="h-[5rem] w-[15rem] rounded-lg"/>
    </div>
  )
}