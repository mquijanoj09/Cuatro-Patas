"use server";

import { supabase } from "@/utils/supabase";

export async function createClient(formData: FormData) {
  const numero = Number(formData.get("number"));
  const nombre = formData.get("name") as string;
  const direccion = formData.get("address") as string;
  const telefono = Number(formData.get("phone"));
  const email = formData.get("email") as string;
  const mascota = formData.get("pet") as string;
  const raza = formData.get("breed") as string;
  const { error } = await supabase
    .from("clientes")
    .insert([{ numero, nombre, direccion, telefono, email, mascota, raza }]);
  if (error) {
    console.error(error);
    return;
  }
}
