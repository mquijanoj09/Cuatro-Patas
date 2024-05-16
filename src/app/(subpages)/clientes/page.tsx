import { PageHeader, TableInfo } from "@/components";
import React from "react";

const infoTabla = [
  { title: "No.", width: "w-1/12" },
  { title: "Nombre", width: "w-1/12" },
  { title: "Dirección", width: "w-1/12" },
  { title: "Teléfono", width: "w-1/12" },
  { title: "E-mail", width: "w-1/12" },
  { title: "Mascota", width: "w-1/12" },
  { title: "Raza", width: "w-1/12" },
  { title: "Cumpleaños", width: "w-1/12" },
  { title: "Ref", width: "w-1/12" },
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
        <TableInfo infoTabla={infoTabla} />
        {/* <TableItems items={items} /> */}
      </div>
    </PageHeader>
  );
}
