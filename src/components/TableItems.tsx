"use client";
import { formatPrice } from "@/utils/price";
import { Item } from "@/types";
import Image from "next/image";
import React, { useState } from "react";
import { TrashSvg, XmarkSvg } from "@/icons";
import ejemplo from "../../public/images/ejemplo.jpg";
import { deleteProduct } from "./ServerComponent";

interface Props {
  items: Item[];
}

export default function TableItems({ items }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  function handleSetIsOpen() {
    setIsOpen(!isOpen);
  }

  console.log(items);
  return (
    <div className="flex flex-col">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border-b border-lighter-main hover:bg-base p-6 font-semibold"
        >
          <div className="flex items-center justify-center w-1/12">
            {item.codigo}
          </div>
          <div className="flex items-center justify-center w-3/12">
            {item.nombre}
          </div>
          <div className="flex items-center justify-center w-1/12">
            <Image
              // src={item.imagen_url}
              // alt={item.nombre}
              src={ejemplo}
              alt="Ensayo"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <div className="flex items-center justify-center w-3/12">
            {item.proovedor}
          </div>
          <div className="flex items-center justify-center w-2/12">
            ${formatPrice(item.precio)}
          </div>
          <div className="flex items-center justify-center w-1/12">
            {item.stock}
          </div>
          <button
            onClick={handleSetIsOpen}
            className="flex items-center justify-center w-1/12 z-40"
          >
            <TrashSvg />
          </button>
          {isOpen && (
            <>
              <div
                className={`fixed right-0 top-0 z-50 h-full w-full cursor-pointer bg-black transition-opacity duration-[400ms] ${
                  isOpen ? "visible opacity-60" : "invisible opacity-0"
                }`}
                onClick={handleSetIsOpen}
              ></div>
              <div className="absolute z-50 transform flex flex-col gap-5 w-1/3 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-white p-8 rounded-xl drop-shadow-2xl">
                <button
                  className="absolute -top-2 -right-2 p-1 rounded-full border border-main bg-white"
                  onClick={handleSetIsOpen}
                >
                  <XmarkSvg />
                </button>
                <h2 className="text-2xl font-semibold">Eliminar producto</h2>
                <p>
                  ¿Estás seguro de que deseas eliminar el producto {item.codigo}
                  ?
                </p>
                <div className="flex gap-5">
                  <button
                    className="bg-red-600 rounded-xl w-20 p-2"
                    onClick={() => deleteProduct(item.id)}
                  >
                    Eliminar
                  </button>
                  <button
                    className="bg-lighter-main rounded-xl w-20 p-2"
                    onClick={handleSetIsOpen}
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
