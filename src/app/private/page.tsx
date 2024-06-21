import { redirect } from 'next/navigation';
import { createClient } from '@/app/utils/supabase/server';
import Image from 'next/image';
import { Button } from '@nextui-org/react';
import { logout } from '../logout/actions';

export default async function PrivatePage() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  return (    
      <div style={{backgroundImage: "url('/hero.png')"}} className="bg-cover h-auto ">
        <p className="text-center border shadow-sm p-5 bg-amber-100 text-amber-700 rounded-full uppercase">Hello {data.user.email}! here you will find your profile data, pictures and will be your personal information stash</p>
        <div>          
            <form action={logout}>
              <Button color="secondary" href="/" variant="solid" type="submit">
                Logout
              </Button>
            </form>           
          <div className="grid mt-10 md:grid-cols-2 md:gap-6">
            <div className="relative px-36 z-0 w-full mb-5 group">
              <Image src="/art1.jpg" alt="error" width={400} height={400} className="shadow-cyan-950 shadow-2xl rounded-3xl"/>
              <p className="text-lg bg-slate-200 border-x-fuchsia-950 rounded-2xl text-center ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo recusandae pariatur, a minus deserunt doloremque quam dignissimos praesentium quo itaque nobis earum hic voluptatum et necessitatibus velit temporibus aliquam autem?</p>
            </div>
            <div className="relative px-36 z-0 w-full mb-5 group">
              <Image src="/art4.jpg" alt="error" width={400} height={400} className="shadow-cyan-950 shadow-2xl rounded-3xl"/>
              <p className="text-lg bg-slate-200 border-x-fuchsia-950 rounded-2xl text-center ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo recusandae pariatur, a minus deserunt doloremque quam dignissimos praesentium quo itaque nobis earum hic voluptatum et necessitatibus velit temporibus aliquam autem?</p>                
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative px-36 z-0 w-full mb-5 group">
              <Image src="/art3.jpg" alt="error" width={400} height={400} className="shadow-cyan-950 shadow-2xl rounded-3xl"/>
              <p className="text-lg bg-slate-200 border-x-fuchsia-950 rounded-2xl text-center ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo recusandae pariatur, a minus deserunt doloremque quam dignissimos praesentium quo itaque nobis earum hic voluptatum et necessitatibus velit temporibus aliquam autem?</p>
            </div>
            <div className="relative px-36 z-0 w-full mb-5 group">
              <Image src="/art2.jpg" alt="error" width={400} height={400} className="shadow-cyan-950 shadow-2xl rounded-3xl"/> 
              <p className="text-lg bg-slate-200 border-x-fuchsia-950 rounded-2xl text-center ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo recusandae pariatur, a minus deserunt doloremque quam dignissimos praesentium quo itaque nobis earum hic voluptatum et necessitatibus velit temporibus aliquam autem?</p>            
            </div>
          </div>
        </div>
      </div>      
  )
}