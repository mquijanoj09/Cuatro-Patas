"use server";
import { supabase } from "@/utils/supabase";
import { revalidatePath } from "next/cache";

export async function createProduct(formData: FormData) {
  const nombre = formData.get("name") as string;
  const precio = Number(formData.get("price"));
  const proveedor = formData.get("supplier") as string;
  const stock = Number(formData.get("stock"));
  const codigo = formData.get("codigo") as string;
  const { error } = await supabase
    .from("productos")
    .insert([{ nombre, precio, proveedor, stock, codigo }]);
  if (error) {
    console.error(error);
    return;
  }
  revalidatePath("/productos");
  revalidatePath("/estadisticas");
}

export async function deleteProduct(id: number) {
  const { error } = await supabase.from("productos").delete().match({ id });
  if (error) {
    console.error(error);
    return;
  }
  revalidatePath("/estadisticas");
  revalidatePath("/productos");
}
