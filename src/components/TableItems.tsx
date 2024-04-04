"use client";
import { formatPrice } from "@/utils/price";
import { Item } from "@/types";
import Image from "next/image";
import React, { useState } from "react";
import { CheckedCircleSvg, CircleSvg, TrashSvg } from "@/icons";

interface Props {
  items: Item[];
}

export default function TableItems({ items }: Props) {
  const [selected, isSelected] = useState(false);

  function handleSetIsSelected() {
    isSelected(!selected);
    console.log("selected", selected);
  }

  return (
    <div className="flex flex-col border-t border-lighter-main">
      {items.map((item) => (
        <div
          onClick={handleSetIsSelected}
          key={item.id}
          className="flex justify-between items-center border-b border-lighter-main py-7 hover:bg-base px-7"
        >
          <div>{selected ? <CheckedCircleSvg /> : <CircleSvg />}</div>
          <Image src={item.image} alt={item.name} />
          <div className="text-lg font-semibold">{item.name}</div>
          <div>{item.stock}</div>
          <div>${formatPrice(item.price)}</div>
          <div>{item.supplier}</div>
          <div>
            <TrashSvg />
          </div>
        </div>
      ))}
    </div>
  );
}
