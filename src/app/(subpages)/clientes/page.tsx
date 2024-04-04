import { SearchBar } from "@/components";
import React from "react";

const infoTabla = [
  { title: "No." },
  { title: "Nombre" },
  { title: "Dirección" },
  { title: "Teléfono" },
  { title: "E-mail" },
  { title: "Mascota" },
  { title: "Raza" },
  { title: "Cumpleaños" },
  { title: "Ref" },
];

export default function Clientes() {
  return (
    <div className="w-full m-20">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl">Clientes</h1>
        <h5 className="text-xs">0 clientes registrados</h5>
      </div>
      <SearchBar bottonText="Cliente" placeholderText="Nombre" />

      <div className="bg-white bg-opacity-50 w-full mt-5 p-7 flex gap-7 rounded-xl flex-col">
        <ul className="flex w-full justify-between items-center">
          {infoTabla.map((item) => (
            <h5 key={item.title}>{item.title}</h5>
          ))}
        </ul>
        {/* <TableItems items={items} /> */}
      </div>
    </div>
  );
}
