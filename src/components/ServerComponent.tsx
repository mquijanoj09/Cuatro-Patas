"use server";

import { supabase } from "@/utils/supabase";

export async function createProduct(formData: FormData) {
  const nombre = formData.get("name") as string;
  const precio = Number(formData.get("price"));
  const proovedor = formData.get("supplier") as string;
  const stock = Number(formData.get("stock"));
  const imagen_url = formData.get("image") as string;
  const codigo = formData.get("codigo") as string;
  const { error } = await supabase
    .from("productos")
    .insert([{ nombre, precio, proovedor, stock, imagen_url, codigo }]);
  if (error) {
    console.error(error);
    return;
  }
}

export async function deleteProduct(id: number) {
  const { error } = await supabase.from("productos").delete().match({ id });
  if (error) {
    console.error(error);
    return;
  }
}
