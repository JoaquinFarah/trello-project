import { login, signup, } from './actions'
import React from "react";
import { IoMedalOutline } from 'react-icons/io5';
import { createClient } from "@/app/utils/supabase/server";
import { NavbarComponent } from "@/components/Navbar";
import { redirect } from 'next/navigation'



export default async function LoginPage() {
  
    // const supabase = createClient()
    // const { data, error } = await supabase.auth.getUser()
    // if (error || data?.user) {
    //   redirect('/organization')
    // }
  
  return (
  <div className="mx-auto max-w-fit p-20 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <form className=" max-w-md mx-auto">
      <div className='mb-4 flex items-center border shadow-sm p-5 bg-amber-100 text-amber-700 rounded-full uppercase'>
          <IoMedalOutline className='h-6 w-6 mr-2'/>
          No 1 task management -- <span className="text-xl ">trellofy</span> --          
      </div>
      <p className="text-justify text-gray-500">Login or Register and enjoy <span className="text-xl">TRELLOFY</span> forever <span className="text-xl">FREE!</span></p>
      <div className="relative z-0 w-full mb-5 mt-10 group">        
        <input type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
      </div>
      <div className="relative z-0 w-full mb-5 group">        
        <input type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
      </div>  
      <div className="mt-10 space-x-5 align-middle flex items-center justify-center"> 
        <button className="border-2  py-3 bg-[#765898] text-white p-1 rounded-xl px-10 align-middle" formAction={login} color='secondary'>Log in</button>
        <button className="border-2  py-3 bg-[#765898] text-white p-1 rounded-xl px-10 align-middle" formAction={signup} color= 'secondary'>Sign up</button>         
      </div>        
    </form>
  </div>
  );
}


