import { getList } from "@/actions/get-list";
import { redirect } from "next/navigation";
import { BoardNavbar } from "./_components/BoardNavbar";


const BoardLayout = async({children, params}: {
    children: React.ReactNode,
    params:{ organizationId: string }
}) => {
     const isBoard = await getList(params.organizationId)
     if(isBoard.error){
        redirect('/organization')
     }
     console.log(isBoard)
    return (
        <div className="min-h-screen">
            <BoardNavbar id={params.organizationId} />
            <main>
                {children}
            </main>
        </div>
    )
}

export default BoardLayout;