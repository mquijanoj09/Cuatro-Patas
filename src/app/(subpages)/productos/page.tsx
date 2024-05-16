import {
  PageHeader,
  PaginationComp,
  TableInfo,
  TableItems,
} from "@/components";
import { supabase } from "@/utils/supabase";
import React from "react";

const infoTabla = [
  { title: "Código", width: "w-1/12" },
  { title: "Nombre", width: "w-3/12" },
  { title: "Imagen", width: "w-1/12" },
  { title: "Proveedor", width: "w-3/12" },
  { title: "Precio", width: "w-2/12" },
  { title: "Stock", width: "w-1/12" },
  { title: "Eliminar", width: "w-1/12" },
];

const resumenTabla = [
  { title: "Costo en stock", value: "$ 3.145.000" },
  { title: "Proveedores", value: "4" },
  { title: "Ganancia estimada", value: "$ 2.432.000" },
  { title: "Sin stock", value: "1", button: true, buttonColor: "bg-red-500" },
  {
    title: "Stock bajo",
    value: "4",
    button: true,
    buttonColor: "bg-yellow-500",
  },
  { title: "En stock", value: "9", button: true, buttonColor: "bg-green-500" },
];

export const dynamic = "force-dynamic";
export default async function Productos() {
  const { data: products } = await supabase.from("productos").select("*");
  const productsPerPage = products ? products.slice(0, 5) : [];
  if (!products) return null;
  const numProducts = products.length;

  return (
    <PageHeader
      pageTitle="Productos"
      subHeading={`${numProducts} productos registrados`}
      bottonText="Producto"
      placeholderText="Artículo o código"
    >
      <div className="bg-white bg-opacity-50 w-full mt-5 p-6 flex rounded-xl flex-col">
        <ul className="flex w-full justify-between mb-5 px-5">
          {resumenTabla.map((item) => (
            <li key={item.title} className="flex flex-col items-center">
              <h5>{item.value}</h5>
              <div className="flex gap-2">
                {item.button && (
                  <div
                    className={`rounded-full p-1 my-2 ${item.buttonColor}`}
                  />
                )}
                <h5 className="min-w-fit">{item.title}</h5>
              </div>
            </li>
          ))}
        </ul>
        <TableInfo infoTabla={infoTabla} />
        <TableItems items={productsPerPage} />
      </div>
      <PaginationComp />
    </PageHeader>
  );
}
