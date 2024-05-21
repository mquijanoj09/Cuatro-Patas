"use client";
import { TrashSvg, XmarkSvg } from "@/icons";
import React, { useState } from "react";
import Button from "./ui/Button";
import { deleteProduct } from "../app/api/Product";
import { MoneyItem, Product } from "@/types";
import { deleteSell } from "@/app/api/Sell";
import { deleteTransaction } from "@/app/api/Transaction";
import { formatPrice } from "@/utils/price";

interface Props {
  product?: Product;
  item?: MoneyItem;
}

export default function Delete({ product, item }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  function handleSetIsOpen() {
    setIsOpen((prev) => !prev);
  }

  const transaction = item?.nombre;
  const sell = item?.cliente;

  return (
    <>
      {product ? (
        <button
          className="flex items-center justify-center w-1/12"
          onClick={handleSetIsOpen}
        >
          <TrashSvg />
        </button>
      ) : (
        <Button onClick={handleSetIsOpen}>Liquidar</Button>
      )}
      {isOpen && (
        <>
          <div
            className={`fixed right-0 top-0 z-40 h-full w-full cursor-pointer bg-black transition-opacity duration-[400ms] ${
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
            {product && (
              <>
                <h2 className="text-2xl font-semibold">Eliminar producto</h2>
                <p>
                  ¿Estás seguro de que deseas eliminar el producto{" "}
                  {product.codigo}?
                </p>
                <div className="flex gap-5">
                  <Button
                    className="bg-red-500 rounded-xl px-6 py-2 hover:bg-red-400 text-sm"
                    onClick={() => deleteProduct(product.id)}
                  >
                    Eliminar
                  </Button>
                  <Button onClick={handleSetIsOpen}>Cancelar</Button>
                </div>
              </>
            )}
            {item && (
              <>
                <h2 className="text-2xl font-semibold">
                  Liquidar {transaction && "Transacción"}
                  {sell && "Venta"}
                </h2>
                <p>
                  ¿Estás seguro de que deseas liquidar la transaction del{" "}
                  {item.fecha} por el precio de ${formatPrice(item.precio || 0)}
                  ?
                </p>
                <div className="flex gap-5">
                  <Button
                    className="bg-red-500 rounded-xl px-6 py-2 hover:bg-red-400 text-sm"
                    onClick={() =>
                      item.cliente
                        ? deleteSell(item.id)
                        : deleteTransaction(item.id)
                    }
                  >
                    Liquidar
                  </Button>
                  <Button onClick={handleSetIsOpen}>Cancelar</Button>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
}
