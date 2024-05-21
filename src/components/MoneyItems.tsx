"use client";
import React from "react";
import Button from "./ui/Button";
import { formatPrice } from "@/utils/price";
import { MoneyItem } from "@/types";
import { deleteSell } from "@/app/api/Sell";
import { deleteTransaction } from "@/app/api/Transaction";
import Delete from "./Delete";

interface Props {
  item: MoneyItem;
}

export default function MoneyItems({ item }: Props) {
  return (
    <div className="bg-white w-full rounded-xl p-3 flex flex-col gap-4 overflow-hidden">
      <div className="flex justify-between ">
        <div>
          <p className="text-lg mb-2">{item.producto}</p>
          <p className="text-xs">Descripción:</p>
          <p className="text-[10px]">{item.descripcion}</p>
        </div>
        <div className="text-red-500">
          <p>{`$ ${formatPrice(item.precio || 0)}`}</p>
          <p className="text-sm">{item.fecha}</p>
        </div>
      </div>
      <div className="w-full items-center flex justify-end">
        <Delete item={item} />
      </div>
    </div>
  );
}
