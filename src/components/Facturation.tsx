"use client";
import React from "react";
import FacturationTable from "./tables/FacturationTable";
import TableInfo from "./TableInfo";
import { Stat } from "@/types";
import { Chart } from "react-google-charts";

const infoTabla = [
  { title: "Mes", width: "w-4/12" },
  { title: "Facturación", width: "w-4/12" },
  { title: "Ventas", width: "w-4/12" },
  { title: "Ganancias", width: "w-4/12" },
];

interface Props {
  stats: Stat[];
}

const chartOptions = {
  title: "Mes vs Facturación",
  hAxis: {
    title: "Meses",
  },
  vAxis: {
    title: "Facturación",
  },
  colors: ["#93D4DA"],
};

const chartData = [
  ["Mes", "Facturación"],
  ["Enero", 1000],
  ["Febrero", 1200],
  ["Marzo", 1300],
  ["Abril", 1400],
];

export default function Facturation({ stats }: Props) {
  return (
    <div className="w-2/3 p-5 flex gap-12 flex-col">
      <h2 className="text-xl font-semibold">Facturación</h2>
      <Chart chartType="ColumnChart" data={chartData} options={chartOptions} />
      <div>
        <TableInfo infoTabla={infoTabla} />
        <FacturationTable stats={stats} />
        <div className="w-full flex gap-10 mt-8 items-center justify-center">
          <div className="flex items-center justify-center gap-2">
            <div className="rounded-full w-2 h-2  bg-green-500"></div>
            <p className="text-green-500">Mejor mes</p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="rounded-full w-2 h-2 bg-red-500"></div>
            <p className="text-red-500">Peor mes</p>
          </div>
        </div>
      </div>
    </div>
  );
}
