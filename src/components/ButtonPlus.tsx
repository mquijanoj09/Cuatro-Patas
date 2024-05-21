"use client";
import { useEffect, useState } from "react";
import CreateProduct from "./create/CreateProduct";
import CreateClient from "./create/CreateClient";
import CreateOrder from "./create/CreateOrder";
import CreateSell from "./create/CreateSell";
import { Client, Product, Supplier } from "@/types";
import { CreateTransaction } from ".";

interface Props {
  children: React.ReactNode;
  title: string;
  products: Product[];
  clients: Client[];
}

export default function Button({ children, title, products, clients }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  function handleSetIsOpen() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [isOpen]);

  return (
    <>
      <button
        className="bg-main rounded-xl w-fit gap-3 px-5 flex justify-between items-center hover:bg-lighter-main"
        onClick={() => {
          handleSetIsOpen();
        }}
      >
        <div>+</div>
        {children}
      </button>
      {isOpen && (
        <>
          <div
            className={`fixed right-0 top-0 z-40 h-full w-full cursor-pointer bg-black transition-opacity duration-[400ms] ${
              isOpen ? "visible opacity-60" : "invisible opacity-0"
            }`}
            onClick={handleSetIsOpen}
          ></div>
          {title === "Producto" && (
            <CreateProduct title={title} handleSetIsOpen={handleSetIsOpen} />
          )}
          {title === "Cliente" && (
            <CreateClient title={title} handleSetIsOpen={handleSetIsOpen} />
          )}
          {title === "Pedido" && (
            <CreateOrder title={title} handleSetIsOpen={handleSetIsOpen} />
          )}
          {title === "Cuenta por pagar" && (
            <CreateTransaction
              title={title}
              handleSetIsOpen={handleSetIsOpen}
            />
          )}
          {title === "Cuenta por cobrar" && (
            <CreateSell
              title={title}
              products={products}
              clients={clients}
              handleSetIsOpen={handleSetIsOpen}
            />
          )}
        </>
      )}
    </>
  );
}
