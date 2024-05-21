"use server";

import { supabase } from "@/utils/supabase";
import { revalidatePath } from "next/cache";

export async function createOrder(formData: FormData) {
  const codigo = formData.get("code") as string;
  const fecha = formData.get("date") as string;
  const proveedor = formData.get("supplier") as string;
  const cantidad = Number(formData.get("quantity"));
  const precio = Number(formData.get("price"));
  const estado = formData.get("status") as string;
  const { error } = await supabase
    .from("pedidos")
    .insert([{ codigo, fecha, proveedor, cantidad, precio, estado }]);
  if (error) {
    console.error(error);
    return;
  }
  revalidatePath("/pedidos");
}
