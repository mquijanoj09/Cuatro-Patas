"use client";
import { formatPrice } from "@/utils/price";
import { Product } from "@/types";
import Image from "next/image";
import React, { useState } from "react";
import { TrashSvg } from "@/icons";
import Delete from "../Delete";

interface Props {
  products: Product[];
}

export default function ProductsTables({ products }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState({} as Product);

  function handleSetIsOpen() {
    setIsOpen(!isOpen);
  }

  function handleSetActiveProduct(product: Product) {
    setActiveProduct(product);
    setIsOpen(!isOpen);
  }

  return (
    <div className="flex flex-col">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex justify-between items-center border-b border-lighter-main hover:bg-base p-6 font-semibold"
        >
          <div className="flex items-center justify-center w-1/12">
            {product.codigo}
          </div>
          <div className="flex items-center justify-center w-3/12">
            {product.nombre}
          </div>
          <div className="flex items-center justify-center w-1/12">
            <Image
              // src={product.imagen_url}
              // alt={product.nombre}
              src=""
              alt="Ensayo"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <div className="flex items-center justify-center w-3/12">
            {product.proveedor}
          </div>
          <div className="flex items-center justify-center w-2/12">
            ${formatPrice(product.precio)}
          </div>
          <div className="flex items-center justify-center w-1/12">
            {product.stock}
          </div>
          <button
            onClick={() => handleSetActiveProduct(product)}
            className="flex items-center justify-center w-1/12"
          >
            <TrashSvg />
          </button>
          {isOpen && (
            <Delete
              item={activeProduct}
              isOpen={isOpen}
              handleSetIsOpen={handleSetIsOpen}
            />
          )}
        </div>
      ))}
    </div>
  );
}
