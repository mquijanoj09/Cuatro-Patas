import { ClientsSvg, CoinsSvg, GridSvg, MoneySvg, StatsSvg } from "@/icons";
import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <nav className="bg-main w-1/12 h-[100dvh] flex items-center justify-between flex-col py-20 px-4">
      <Link
        href={"/productos"}
        className="p-4 flex flex-col text-xs items-center hover:bg-lighter-main rounded-xl w-full"
      >
        <GridSvg />
        <h5>Productos</h5>
      </Link>
      <Link
        href={""}
        className="p-4 flex flex-col text-xs items-center hover:bg-lighter-main rounded-xl w-full"
      >
        <GridSvg />
        <h5>Pedidos</h5>
      </Link>
      <Link
        href={"/clientes"}
        className="p-4 flex flex-col text-xs items-center hover:bg-lighter-main rounded-xl w-full"
      >
        <ClientsSvg />
        <h5>Clientes</h5>
      </Link>
      <Link
        href={""}
        className="p-4 flex flex-col text-xs items-center hover:bg-lighter-main rounded-xl w-full"
      >
        <MoneySvg />
        <h5>Transacciones</h5>
      </Link>
      <Link
        href={""}
        className="p-4 flex flex-col text-xs items-center hover:bg-lighter-main rounded-xl w-full"
      >
        <StatsSvg />
        <h5>Estadísticas</h5>
      </Link>
      <Link
        href={""}
        className="p-4 flex flex-col text-xs items-center hover:bg-lighter-main rounded-xl w-full"
      >
        <CoinsSvg />
        <h5>Ventas</h5>
      </Link>
    </nav>
  );
}
