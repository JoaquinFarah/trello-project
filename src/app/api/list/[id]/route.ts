import { createClient } from "@/app/utils/supabase/server";
import { NextResponse } from "next/server";

export async function PUT(req: Request, { params }: { params: { id: string } }) {
    const supabase = createClient();
    const id = params.id;
    
    const body = await req.json();
    const {title} = body;
   
  
    const { error } = await supabase
      .from("lists")
      .update([{title}])
      .eq("id", id);
  
    if (error) {
      return NextResponse.json(
        { error: "Error updating title " },
        { status: 500 }
      );
    }
  
    return NextResponse.json({ message:"title updated correctly"});
  }
  export async function DELETE(
    req: Request,
    { params }: { params: { id: string } }
  ) {
    const supabase = createClient();
    const id = params.id;
  
  
    const {  error } = await supabase
      .from("lists")
      .delete({ count: "exact" })
      .eq("id", id);
  
    if (error) {
      return NextResponse.json(
        { error: "Error deleting list " },
        { status: 500 }
      );
    }
  
    return NextResponse.json({ message:"list deleted successfully" });
  }