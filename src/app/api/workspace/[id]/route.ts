import { createClient } from "@/app/utils/supabase/server";
import { count } from "console";
import { NextResponse } from "next/server";

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const supabase = createClient();
  const id = params.id;

  const body = await req.json();
  const { title } = body;

  const {  error } = await supabase
    .from("workspaces")
    .update([{ title }])
    .eq("id", id);

  if (error) {
    return NextResponse.json(
      { error: "Error updating title " },
      { status: 500 }
    );
  }

  return NextResponse.json({ message:"workspace updated successfully" });
}


export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const supabase = createClient();
  const id = params.id;


  const {  error } = await supabase
    .from("workspaces")
    .delete({ count: "exact" })
    .eq("id", id);

  if (error) {
    return NextResponse.json(
      { error: "Error deleting workspace " },
      { status: 500 }
    );
  }

  return NextResponse.json({message:"workspace deleted successfully" });
}
