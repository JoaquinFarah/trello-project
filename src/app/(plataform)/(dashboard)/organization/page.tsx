import { createClient } from "@/app/utils/supabase/server";

import { WorkSpace } from "../_components/WorkSpace";
import { Form } from "../_components/Form";
import { FaRegStar } from "react-icons/fa6";

// import heroIMG from "/hero.png"
import Image from "next/image";

export interface ResponseProp {
  "Get all workspaces": GetAllWorkspace[];
}

export interface GetAllWorkspace {
  created_at: Date;
  id: string;
  title: string;
  user_id: string;
}

export default async function OrganizationPage() {
  const supabase = createClient();

  const { data } = await supabase.auth.getUser();
  if (!data.user) {
    console.log("User not found");
    return;
  }
  const { id, email } = data.user;

  console.log(id);

  const response: ResponseProp = await fetch(
    `http://localhost:3000/api/workspace/workspaces/${id}`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
    });

  return (
    <div className="p-10">
      <div className="flex items-center pb-5">
        <Image
          src="/hero.png"
          alt="Image hero"
          height={500}
          width={500}
          className="rounded-full w-[2rem] h-[2rem] md:w-[5rem] md:h-[5rem]"
        />
        <h2 className="text-3xl md:text-8xl font-bold uppercase">
          Work
          <span className="title-stroke">Space</span>
        </h2>
      </div>
      <hr />
      <div className="py-4 flex items-center gap-2"></div>
      <Form />
      <div className="flex flex-wrap pt-4 justify-center">
        {response["Get all workspaces"].map((workspace, index) => (
          <WorkSpace
            key={workspace.id}
            title={workspace.title}
            id={workspace.id}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
