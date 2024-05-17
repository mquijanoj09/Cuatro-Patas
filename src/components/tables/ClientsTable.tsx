import { Client } from "@/types";
import React from "react";

interface Props {
  clients: Client[];
}

export default function ClientsTable({ clients }: Props) {
  return (
    <div className="flex flex-col">
      {clients.map((client) => (
        <div
          key={client.id}
          className="flex justify-between items-center border-b border-lighter-main hover:bg-base p-6 font-semibold"
        >
          <div className="flex items-center justify-center w-1/12">
            {client.numero}
          </div>
          <div className="flex items-center justify-center w-2/12">
            {client.nombre}
          </div>
          <div className="flex items-center justify-center w-2/12">
            {client.direccion}
          </div>
          <div className="flex items-center justify-center w-2/12">
            {client.telefono}
          </div>
          <div className="flex items-center justify-center w-2/12">
            {client.email}
          </div>
          <div className="flex items-center justify-center w-1/12">
            {client.mascota}
          </div>
          <div className="flex items-center justify-center w-1/12">
            {client.raza}
          </div>
        </div>
      ))}
    </div>
  );
}
