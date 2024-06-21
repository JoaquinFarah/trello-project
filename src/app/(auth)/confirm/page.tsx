import React from 'react';
import { IoMedalOutline } from 'react-icons/io5';
import Link from 'next/link';

const Confirmation = () => {
  return (
    <div className="mx-auto max-w-fit p-20 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <form className=" max-w-md mx-auto">
      <div className='mb-4 flex items-center border shadow-sm p-5 bg-amber-100 text-amber-700 rounded-full uppercase'>
          <IoMedalOutline className='h-6 w-6 mr-2'/>
          No 1 task management -- <span className="text-xl ">trellofy</span> --          
      </div>
      <p className="text-center text-gray-500">Please go to your email and confirm registration. Then continue to the best work tool!</p>
      
      <div className="mt-10 space-x-5 align-middle flex items-center justify-center"> 
        <Link href="/login">
            <button className="border-2  py-3 bg-[#765898] text-white p-1 rounded-xl px-10 align-middle"  color='secondary'>Sure thing!</button>
        </Link>
      </div>        
    </form>
  </div>
  )
}

export default Confirmation