import { Button } from '@nextui-org/react';
import { IoMedalOutline } from 'react-icons/io5';
import Link from 'next/link';
import { createClient } from "@/app/utils/supabase/server";
import { redirect } from 'next/navigation'


export default async function MarketingPage() {

  // const supabase = createClient()
  // const { data, error } = await supabase.auth.getUser()
  // if (error || data?.user) {
  //   redirect('/organization')
  // }
  return (
    
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col">
        <div className='mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase'>
          <IoMedalOutline className='h-6 w-6 mr-2'/>
          No 1 task management
        </div>
        <h1 className='text-3xl md:text-6xl text-center text-neutral-800 mb-6'>
          Trellofy helps team move
        </h1>
        <div className='text-3xl md:text-6xl bg-gradient-to-r from-[#e6770b] to-[#ffd500] text-white px-4 p-2 rounded-md pb-4 w-fit'>
          work forward
        </div>
      </div>
      <div className='text-sm md:text-xl text-neutral-400 max-w-xs md:max-w-2xl mt-4 text-center'>
        Collaborate, manage projects, and reach new productivity peaks. From rises to the home office, the way your team works is unique  accomplish it all with TRELLOFY.
      </div>
      <div className='text-sm md:text-xl text-neutral-400 max-w-xs md:max-w-2xl mt-4 text-center'>
      TRELLOFY is a user-friendly project management tool that helps you organize tasks visually. You create boards for projects, lists for stages or categories, and cards for individual tasks. It allows collaboration with team members, offers labels for categorization, and integrates with other tools for enhanced productivity. Trello also features automation to streamline your workflow.
      </div>
      <Link href='../login' className='mt-6'>
        <Button color='secondary'>Get TRELLOFY for free</Button>
      </Link>
      <div className='text-sm md:text-xl text-neutral-400 max-w-xs md:max-w-2xl mt-4'>
        Just LogIn or SignUp and start managing your tasks.
      </div>
      
    </div>
  );
}
