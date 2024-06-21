import { getList } from "@/actions/get-list";
import { WorkSpace } from "./_components/WorkSpace";
import { ListForm } from "./_components/ListForm";
import { CardForm } from './_components/CardForm';
import { getCard } from "@/actions/get-card";

interface WorkSpaceProps {
  params: {
    organizationId: string;
  };
}

export interface ResponseProp {
  "Get all list": GetAllList[];
}

export interface GetAllList {
  created_at: Date;
  id: string;
  title: string;
}

export default async function OrganizationIdPage({ params }: WorkSpaceProps) {
  const response: ResponseProp = await getList(params.organizationId);
  // const cardResponse = await getCard()

  return (
    <div className="p-10 flex flex-col">
     <div>
     <ListForm />
      <div className="flex flex-wrap pt-4 justify-center">
        {response["Get all list"]?.length > 0 ? (
          response["Get all list"].map((workspace, index) => (
            <WorkSpace
              key={workspace.id}
              title={workspace.title}
              id={workspace.id}
              index={index}
              workSpaceId= {params.organizationId}
            />
          ))
        ) : (
          <p>List not found</p>
        )}
     </div>
      <div>
        <CardForm />
      </div>
      </div>
    </div>
  );
}
