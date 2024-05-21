import MoneyItem from "@/types/MoneyItem";
import React from "react";
import MoneyItems from "./MoneyItems";

interface Props {
  todayItems: MoneyItem[];
}

export default function Today({ todayItems }: Props) {
  return (
    <div className="bg-white bg-opacity-50 p-6 rounded-xl gap-5 flex items-center justify-start flex-col overflow-y-scroll">
      <div className="flex items-center justify-center gap-2">
        <div className="rounded-full w-2 h-2 bg-yellow-500" />
        <h2 className="text-xl font-semibold">Vence hoy</h2>
      </div>
      {todayItems.length === 0 && (
        <p className="text-center text-gray-500 flex-1 flex items-center">
          No hay nada para hoy
        </p>
      )}
      {todayItems.map((todayItems: MoneyItem) => (
        <MoneyItems key={todayItems.id} item={todayItems} />
      ))}
    </div>
  );
}
