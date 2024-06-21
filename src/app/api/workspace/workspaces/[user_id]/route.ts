import { createClient } from "@/app/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET(req: Request,{ params }: { params: { user_id: string } }) {

    const supabase = createClient();
    const user_id =  params.user_id;
    
    const {data, error} = await supabase.from("workspaces").select("*").eq("user_id", user_id);

    if (error) {
      return new Response(JSON.stringify({ error: 'Error fetching workspaces' }), { status: 500 });

    }
    return Response.json({ "Get all workspaces": data });
}
  
export async function POST(
  req: Request,
  { params }: { params: { user_id: string } }
) {
  const supabase = createClient();
  const user_id = params.user_id;
  const body = await req.json();
  const { title } = body;

  if (!title) {
    return NextResponse.json({ error: "title is required" }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("workspaces")
    .insert([{ title, user_id }]);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return Response.json({ "  Workspaces created": data }, { status: 201 });
}
