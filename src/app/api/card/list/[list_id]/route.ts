import { createClient } from "@/app/utils/supabase/server";
import { NextResponse } from "next/server";
export async function POST(
  req: Request,
  { params }: { params: { list_id: string } }
) {
  const list_id = params.list_id;
  const supabase = createClient();

  const body = await req.json();
  const { title, description } = body;

  const { data: maxOrderData, error: maxOrderError } = await supabase
    .from("cards")
    .select("order")
    .eq("list_id", list_id)
    .order("order", { ascending: false })
    .limit(1);

  if (maxOrderError) {
    return NextResponse.json(
      { error: "Error retrieving max order" },
      { status: 500 }
    );
  }

  const maxOrder = maxOrderData.length > 0 ? maxOrderData[0].order : 0;

  if (!title) {
    return NextResponse.json({ error: "title is required" }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("cards")
    .insert([{ title, list_id, description, order: maxOrder + 1 }]);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return Response.json({ "card created": data }, { status: 201 });
}

export async function GET(
  req: Request,
  { params }: { params: { list_id: string } }
) {
  const supabase = createClient();
  const list_id = params.list_id;

  const { data, error } = await supabase
    .from("cards")
    .select("*")
    .eq("list_id", list_id);

  if (error) {
    return NextResponse.json(
      { error: "Error fetching cards" },
      { status: 500 }
    );
  }
  if (!data.length) {
    return Response.json("There are no cards in this list");
  }

  return Response.json({ "Get all cards": data });
}
