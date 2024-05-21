import { formatPrice } from "@/utils/price";
import React from "react";

interface Props {
  estimatedProfitValue: number;
  stockCostValue: number;
  clientsNumber: number;
  ordersNumber: number;
}

export default function Stats({
  estimatedProfitValue,
  stockCostValue,
  clientsNumber,
  ordersNumber,
}: Props) {
  const margin = estimatedProfitValue
    ? `${Math.round(
        ((estimatedProfitValue - stockCostValue) / stockCostValue) * 100
      )}%`
    : "0%";
  return (
    <div className="border-r border-main w-1/3 p-5 flex gap-12 flex-col justify-between">
      <h2 className="text-xl font-semibold">Estadísticas</h2>
      <div className="flex gap-8 flex-col justify-between text-lg">
        <div className="flex gap-5 flex-col justify-between border-b border-main pb-8">
          <p className="text-gray-500">Costo en stock</p>
          <p className="text-main text-xl">$ {formatPrice(stockCostValue)}</p>
        </div>

        <div className="flex gap-5 flex-col justify-between border-b border-main pb-8">
          <p className="text-gray-500">Ganancia estimada</p>
          <p className="text-main text-xl">
            $ {formatPrice(estimatedProfitValue)}
          </p>
        </div>
        <div className="flex gap-5 flex-col justify-between border-b border-main pb-8">
          <p className="text-gray-500">Margen de ganancia bruto</p>
          <p className="text-main text-xl">{margin}</p>
        </div>
        <div className="flex gap-5 flex-col justify-between border-b border-main pb-8">
          <p className="text-gray-500">Clientes registrados</p>
          <p className="text-main text-xl">{clientsNumber} clientes</p>
        </div>
        <div className="flex gap-5 flex-col justify-between">
          <p className="text-gray-500">Pedidos abiertos</p>
          <p className="text-main text-xl">{ordersNumber} pedidos</p>
        </div>
      </div>
    </div>
  );
}
