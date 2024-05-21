import React from "react";
import Button from "./ui/Button";
import { formatPrice } from "@/utils/price";
import { MoneyItem } from "@/types";

export default function MoneyItems({ item }: MoneyItem) {
  return (
    <div className="bg-white w-full rounded-xl p-3 flex flex-col gap-4 overflow-hidden">
      <div className="flex justify-between ">
        <div>
          <p className="text-lg mb-2">{item.producto}</p>
          <p className="text-xs">Descripción:</p>
          <p className="text-[10px]">{item.descripcion}</p>
        </div>
        <div className="text-red-500">
          <p>{`$ ${formatPrice(item.cantidad || 0)}`}</p>
          <p className="text-sm">{item.fecha}</p>
        </div>
      </div>
      <div className="w-full items-center flex justify-end">
        <Button>Liquidar</Button>
      </div>
    </div>
  );
}
