import React from "react";
import MoneyItems from "./MoneyItems";
import MoneyItem from "@/types/MoneyItem";

interface Props {
  lateItems: MoneyItem[];
}

export default function Late({ lateItems }: Props) {
  return (
    <div className="bg-white bg-opacity-50 p-6 rounded-xl gap-5 flex items-center justify-start flex-col overflow-y-hidden">
      <div className="flex items-center justify-center gap-2">
        <div className="rounded-full w-2 h-2 bg-red-500" />
        <h2 className="text-xl font-semibold">Atrasados</h2>
      </div>
      {lateItems.length === 0 && (
        <p className="text-center text-gray-500 flex-1 flex items-center">
          No hay nada atrasado
        </p>
      )}
      {lateItems.map((lateItem: MoneyItem) => (
        <MoneyItems key={lateItem.item.id} item={lateItem.item} />
      ))}
    </div>
  );
}
