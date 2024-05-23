import { Stat } from "@/types";
import { formatPrice } from "@/utils/price";
import React from "react";

interface Props {
  stats: Stat[];
}

export default function FacturationTable({ stats }: Props) {
  console.log(stats);
  const bestMonth = stats.reduce((acc, stat) => {
    return acc.ventas > stat.ventas ? acc : stat;
  });
  const worstMonth = stats.reduce((acc, stat) => {
    return acc.ventas < stat.ventas ? acc : stat;
  });
  return (
    <div className="flex flex-col">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`flex justify-between items-center border-b border-lighter-main hover:bg-base p-6 font-semibold ${
            bestMonth.mes === stat.mes && "text-green-500"
          } ${worstMonth.mes === stat.mes && "text-red-500"}`}
        >
          <div className="flex items-center justify-center w-4/12">
            {stat.mes}
          </div>
          <div className="flex items-center justify-center w-4/12">
            $ {formatPrice(stat.ventas)}
          </div>
          <div className="flex items-center justify-center w-4/12">
            $ {formatPrice(stat.ganancias)}
          </div>
        </div>
      ))}
    </div>
  );
}
