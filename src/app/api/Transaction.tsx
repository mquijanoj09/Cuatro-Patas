"use server";
import { supabase } from "@/utils/supabase";
import { revalidatePath } from "next/cache";
export async function createTransaction(formData: FormData) {
  const nombre = formData.get("name") as string;
  const precio = Number(formData.get("price"));
  const proveedor = formData.get("supplier") as string;
  const fecha = formData.get("date") as string;
  const descripcion = formData.get("description") as string;

  const { error } = await supabase
    .from("transacciones")
    .insert([{ nombre, precio, proveedor, fecha, descripcion }]);
  if (error) {
    console.error(error);
    return;
  }
  revalidatePath("/transacciones");
}

export async function deleteTransaction(id: number) {
  const { error } = await supabase.from("transacciones").delete().match({ id });
  if (error) {
    console.error(error);
    return;
  }
  revalidatePath("/transacciones");
}
