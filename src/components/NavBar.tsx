"use client";
import {
  BoxSvg,
  ClientsSvg,
  CoinsSvg,
  GridSvg,
  MoneySvg,
  StatsSvg,
} from "@/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavBar() {
  const pathname = usePathname();
  const activePage = pathname.split("/")[1];

  return (
    <nav className="bg-main w-32 h-[100dvh] flex items-center justify-between flex-col py-[3%] px-4 ">
      <Link
        href={"/productos"}
        className={`p-4 flex flex-col text-xs items-center hover:bg-lighter-main rounded-xl w-full ${
          activePage === "productos" && "bg-lighter-main"
        }`}
      >
        <GridSvg />
        <h5>Productos</h5>
      </Link>
      <Link
        href={"/pedidos"}
        className={`p-4 flex flex-col text-xs items-center hover:bg-lighter-main rounded-xl w-full ${
          activePage === "pedidos" && "bg-lighter-main"
        }`}
      >
        <BoxSvg />
        <h5>Pedidos</h5>
      </Link>
      <Link
        href={"/clientes"}
        className={`p-4 flex flex-col text-xs items-center hover:bg-lighter-main rounded-xl w-full ${
          activePage === "clientes" && "bg-lighter-main"
        }`}
      >
        <ClientsSvg />
        <h5>Clientes</h5>
      </Link>
      <Link
        href={"/transacciones"}
        className={`p-4 flex flex-col text-xs items-center hover:bg-lighter-main rounded-xl w-full ${
          activePage === "transacciones" && "bg-lighter-main"
        }`}
      >
        <MoneySvg />
        <h5>Transacciones</h5>
      </Link>
      <Link
        href={"/estadisticas"}
        className={`p-4 flex flex-col text-xs items-center hover:bg-lighter-main rounded-xl w-full ${
          activePage === "estadisticas" && "bg-lighter-main"
        }`}
      >
        <StatsSvg />
        <h5>Estadísticas</h5>
      </Link>
      <Link
        href={"ventas"}
        className={`p-4 flex flex-col text-xs items-center hover:bg-lighter-main rounded-xl w-full ${
          activePage === "ventas" && "bg-lighter-main"
        }`}
      >
        <CoinsSvg />
        <h5>Ventas</h5>
      </Link>
    </nav>
  );
}
