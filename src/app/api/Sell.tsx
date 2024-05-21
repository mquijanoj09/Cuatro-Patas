"use server";

import { supabase } from "@/utils/supabase";
import { revalidatePath } from "next/cache";

export async function createSell(formData: FormData) {
  const producto = formData.get("product") as string;
  const fecha = formData.get("date") as string;
  const cliente = formData.get("client") as string;
  const cantidad = Number(formData.get("quantity"));
  const precio = Number(formData.get("price"));
  const descripcion = formData.get("description") as string;
  const { error } = await supabase
    .from("ventas")
    .insert([{ producto, fecha, cliente, cantidad, precio, descripcion }]);
  if (error) {
    console.error(error);
    return;
  }
  revalidatePath("/ventas");
}
