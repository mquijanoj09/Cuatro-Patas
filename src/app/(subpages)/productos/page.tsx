import { PageHeader, PaginationComp } from "@/components";
import TableItems from "@/components/TableItems";
import { Item } from "@/types";
import React from "react";

const infoTabla = [
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

const items: Item[] = [
  {
    id: 1,
    name: "Producto 1",
    price: 100000,
    supplier: "Proveedor 1",
    stock: 10,
    image: "",
  },
  {
    id: 2,
    name: "Producto 2",
    price: 100000,
    supplier: "Proveedor 1",
    stock: 10,
    image: "",
  },
  {
    id: 3,
    name: "Producto 3",
    price: 100000,
    supplier: "Proveedor 1",
    stock: 10,
    image: "",
  },
  {
    id: 4,
    name: "Producto 4",
    price: 100000,
    supplier: "Proveedor 1",
    stock: 10,
    image: "",
  },
  {
    id: 5,
    name: "Producto 5",
    price: 100000,
    supplier: "Proveedor 1",
    stock: 10,
    image: "",
  },
  {
    id: 6,
    name: "Producto 6",
    price: 100000,
    supplier: "Proveedor 1",
    stock: 10,
    image: "",
  },
];

export default function Productos() {
  const numProducts = items.length;

  return (
    <PageHeader
      pageTitle="Productos"
      subHeading={`${numProducts} productos registrados`}
      bottonText="Producto"
      placeholderText="Artículo o código"
    >
      <div className="bg-white bg-opacity-50 w-full mt-5 p-6 flex gap-6 rounded-xl flex-col">
        <ul className="flex w-full xl:gap-20 md:gap-12 gap-7 items-center">
          {infoTabla.map((item) => (
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
        <TableItems items={items} />
      </div>
      <PaginationComp />
    </PageHeader>
  );
}
