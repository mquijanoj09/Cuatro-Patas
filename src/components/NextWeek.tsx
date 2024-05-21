import MoneyItem from "@/types/MoneyItem";
import React from "react";
import MoneyItems from "./MoneyItems";

interface Props {
  nextWeekItems: MoneyItem[];
}

export default function NextWeek({ nextWeekItems }: Props) {
  return (
    <div className="bg-white bg-opacity-50 p-6 rounded-xl gap-5 flex items-center justify-start flex-col overflow-y-scroll">
      <div className="flex items-center justify-center gap-2">
        <div className="rounded-full w-2 h-2 bg-green-500" />
        <h2 className="text-xl font-semibold">Próxima semana</h2>
      </div>
      {nextWeekItems.length === 0 && (
        <p className="text-center text-gray-500 flex-1 flex items-center">
          No hay nada para la próxima semana
        </p>
      )}
      {nextWeekItems.map((nextWeekItem: MoneyItem) => (
        <MoneyItems key={nextWeekItem.id} item={nextWeekItem} />
      ))}
    </div>
  );
}
