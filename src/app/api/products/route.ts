import { supabase } from "@/utils/supabase";

export async function POST(req: Request) {
  const data = await req.json();
  const { error } = await supabase.from("products").insert([data]);
  if (error) {
    return {
      status: 500,
      body: error.message,
    };
  }
  return {
    status: 200,
    body: "Product created",
  };
}
