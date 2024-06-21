import { createClient } from "@/app/utils/supabase/server";
import { NavbarComponent } from "@/components/Navbar";
import { redirect } from 'next/navigation'


const DashboardLayout = async({children}: {
    children: React.ReactNode;
}) => {
    // const supabase = createClient()
    // const { data, error } = await supabase.auth.getUser()
    // if (error || !data?.user) {
    //   redirect('/login')
    // }
    return (
        <div className="h-full">
            <NavbarComponent />
            {children}
        </div>
    )
}

export default DashboardLayout;