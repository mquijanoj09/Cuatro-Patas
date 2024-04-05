import { PageHeader } from "@/components";
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
    <PageHeader
      pageTitle="Clientes"
      subHeading="0 clientes registrados"
      bottonText="Cliente"
      placeholderText="Nombre"
    >
      <div className="bg-white bg-opacity-50 w-full mt-5 p-6 flex gap-6 rounded-xl flex-col">
        <ul className="flex w-full justify-between items-center">
          {infoTabla.map((item) => (
            <h5 key={item.title}>{item.title}</h5>
          ))}
        </ul>
        {/* <TableItems items={items} /> */}
      </div>
    </PageHeader>
  );
}
