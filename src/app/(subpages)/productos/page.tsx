import {
  PageHeader,
  PaginationComp,
  TableInfo,
  ProductsTable,
  TableResume,
} from "@/components";
import { formatPrice } from "@/utils/price";
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

export const dynamic = "force-dynamic";
export default async function Productos() {
  const { data: products } = await supabase.from("productos").select("*");
  const productsPerPage = products ? products.slice(0, 5) : [];
  if (!products) return null;
  const numProducts = products.length;
  const stockCostValue = products.reduce(
    (acc, product) => acc + product.stock * product.precio,
    0
  );
  const differentProviders = new Set(
    products.map((product) => product.proveedor)
  ).size;
  const estimatedProfitValue = products.reduce(
    (acc, product) => acc + product.precio * product.stock * 1.2,
    0
  );
  const productsOutOfStock = products.filter(
    (product) => product.stock === 0
  ).length;
  const productsFewStock = products.filter(
    (product) => product.stock > 0 && product.stock <= 3
  ).length;
  const productsGoodStock = products.filter(
    (product) => product.stock > 3
  ).length;
  const resumenTabla = [
    { title: "Costo en stock", value: `$${formatPrice(stockCostValue)}` },
    { title: "Proveedores", value: `${differentProviders}` },
    {
      title: "Ganancia estimada",
      value: `$${formatPrice(estimatedProfitValue)}`,
    },
    {
      title: "Sin stock",
      value: `${productsOutOfStock}`,
      button: true,
      buttonColor: "bg-red-500",
    },
    {
      title: "Stock bajo",
      value: `${productsFewStock}`,
      button: true,
      buttonColor: "bg-yellow-500",
    },
    {
      title: "En stock",
      value: `${productsGoodStock}`,
      button: true,
      buttonColor: "bg-green-500",
    },
  ];

  return (
    <PageHeader
      pageTitle="Productos"
      subHeading={`${numProducts} ${
        numProducts === 1 ? "producto registrado" : "productos registrados"
      }`}
      bottonText="Producto"
      placeholderText="Artículo o código"
    >
      <div className="bg-white bg-opacity-50 w-full mt-5 p-6 flex rounded-xl flex-col">
        <TableResume resumenTabla={resumenTabla} />
        <TableInfo infoTabla={infoTabla} />
        <ProductsTable products={productsPerPage} />
      </div>
      <PaginationComp />
    </PageHeader>
  );
}
