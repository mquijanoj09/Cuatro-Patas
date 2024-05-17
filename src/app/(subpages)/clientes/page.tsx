import {
  ClientsTable,
  PageHeader,
  PaginationComp,
  TableInfo,
} from "@/components";
import { supabase } from "@/utils/supabase";
import React from "react";

const infoTabla = [
  { title: "No.", width: "w-1/12" },
  { title: "Nombre", width: "w-2/12" },
  { title: "Dirección", width: "w-2/12" },
  { title: "Teléfono", width: "w-2/12" },
  { title: "E-mail", width: "w-2/12" },
  { title: "Mascota", width: "w-1/12" },
  { title: "Raza", width: "w-1/12" },
];

export const dynamic = "force-dynamic";
export default async function Clientes() {
  const { data: clients } = await supabase.from("clientes").select("*");
  const clientsPerPage = clients ? clients.slice(0, 5) : [];
  if (!clients) return null;
  const numClients = clients.length;
  return (
    <PageHeader
      pageTitle="Clientes"
      subHeading={`${numClients} ${
        numClients === 1 ? "cliente registrado" : "clientes registrados"
      }`}
      bottonText="Cliente"
      placeholderText="Nombre"
    >
      <div className="bg-white bg-opacity-50 w-full mt-5 p-6 flex rounded-xl flex-col">
        <TableInfo infoTabla={infoTabla} />
        <ClientsTable clients={clientsPerPage} />
      </div>
      <PaginationComp />
    </PageHeader>
  );
}
