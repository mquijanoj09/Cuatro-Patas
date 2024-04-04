import { SearchBar } from "@/components";
import TableItems from "@/components/TableItems";
import { Item } from "@/types";
import React from "react";

const infoTabla = [
  { title: "Costo en stock", value: "$ 3.145.000" },
  { title: "Proveedores", value: "4" },
  { title: "Ganancia estimada", value: "$ 2.432.000" },
  { title: "Sin stock", value: "1" },
  { title: "Stock bajo", value: "4" },
  { title: "En stock", value: "9" },
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
];

export default function Productos() {
  return (
    <div className="w-full m-20">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl">Productos</h1>
        <h5 className="text-xs">5 artículos registrados</h5>
      </div>
      <SearchBar bottonText="Producto" placeholderText="Artículo o código" />
      <div className="bg-white bg-opacity-50 w-full mt-5 p-7 flex gap-7 rounded-xl flex-col">
        <ul className="flex w-full gap-20 items-center">
          {infoTabla.map((item) => (
            <li key={item.title} className="flex flex-col items-center">
              <h5>{item.value}</h5>
              <h5>{item.title}</h5>
            </li>
          ))}
        </ul>
        <TableItems items={items} />
      </div>
    </div>
  );
}
