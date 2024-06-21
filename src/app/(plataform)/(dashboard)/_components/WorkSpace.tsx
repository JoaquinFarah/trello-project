'use client'

import { useFormStatus } from "react-dom";
import { Skeleton } from '@nextui-org/react';
import Link from "next/link";

interface WorkSpaceProps {
    title: string;
    id: string;
    index: number
}

export const WorkSpace = ({ title, id, index }:WorkSpaceProps) => {

  const { pending } = useFormStatus();

  const backgrounds = [
    'bg-[#765898]',
    'bg-[#e6770b]',
    'bg-[#467d7f]',
    'bg-[#ffd500]',
  ];
  const backgroundClass = backgrounds[index % 4];
  return (
    <Link 
      href={`/organization/${id}`} 
      className={`${backgroundClass} space-y-2 flex-col items-center gap-2 p-2 m-2 h-[6rem] w-[15rem] hover:shadow-lg hover:scale-105 hover:border hover:border-black ease-in-out duration-300`}>
        <p className="font-semibold p-2">{!pending ? title: 'Cargando....'}</p>
    </Link>
  )
}

WorkSpace.Skeleton = function SkeletonWorkSpace() {
  return (
    <div>
      <Skeleton className="h-[5rem] w-[15rem] rounded-lg"/>
    </div>
  )
}