"use client";
import { useEffect, useState } from "react";
import CreateProduct from "./create/CreateProduct";
import CreateClient from "./create/CreateClient";
import CreateOrder from "./create/CreateOrder";

interface Props {
  children: React.ReactNode;
  title: string;
}

export default function Button({ children, title }: Props) {
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
        className="bg-main rounded-xl w-40 px-5 flex justify-between items-center hover:bg-lighter-main"
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
          {title === "Producto" && <CreateProduct title={title} />}
          {title === "Cliente" && <CreateClient title={title} />}
          {title === "Pedido" && <CreateOrder title={title} />}
        </>
      )}
    </>
  );
}
