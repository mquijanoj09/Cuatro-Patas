"use client";
import { ArrowDownSvg, ArrowUpSvg, XmarkSvg } from "@/icons";
import Image from "next/image";
import React, { useState } from "react";

export default function User() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleSetIsOpen = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleSetIsProfileOpen = () => {
    setIsProfileOpen((prevIsProfileOpen) => !prevIsProfileOpen);
  };

  function handleCloseProfile() {
    setIsProfileOpen(false);
    setIsOpen(false);
  }

  return (
    <>
      <div className="flex flex-col absolute right-0 m-12">
        <div
          className={`p-8 bg-white rounded-full  flex gap-3 items-center justify-between ${
            isOpen && "rounded-br-none"
          }`}
        >
          <Image src={""} alt="user foto" />
          <div>
            <h4 className="text-sm">Maria Camila Guzmán</h4>
            <h5 className="text-xs">cuatropatasgalletas@gmail.com</h5>
          </div>
          <button onClick={handleSetIsOpen} className="p-2">
            {isOpen ? <ArrowUpSvg /> : <ArrowDownSvg />}
          </button>
        </div>
        {isOpen && (
          <div className="flex flex-col gap-1 bg-white p-2 rounded-xl rounded-tr-none right-0 items-center justify-between w-fit absolute text-sm top-24">
            <button
              className="hover:bg-lighter-main w-full p-2 border rounded-xl bg-white border-main"
              onClick={handleSetIsProfileOpen}
            >
              Perfil
            </button>
          </div>
        )}
      </div>
      {isProfileOpen && (
        <>
          <div
            className={`fixed right-0 top-0 z-40 h-full w-full cursor-pointer bg-black transition-opacity duration-[400ms] ${
              isOpen ? "visible opacity-60" : "invisible opacity-0"
            }`}
            onClick={handleCloseProfile}
          ></div>
          <div className="absolute items-center justify-center z-50 transform flex flex-col gap-5 w-1/4 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-lighter-main p-8 rounded-xl drop-shadow-2xl">
            <button
              onClick={handleCloseProfile}
              className="absolute -top-2 -right-2 p-1 rounded-full border border-white bg-lighter-main"
            >
              <XmarkSvg />
            </button>
            <Image src={""} alt="user foto" />
            <div className="text-center flex flex-col gap-2">
              <h4 className="text-sm font-semibold">Maria Camila Guzmán</h4>
              <h5 className="text-xs">cuatropataspaletas@gmail.com</h5>
              <h5 className="text-xs">3117982008</h5>
            </div>
            <div className="bg-base rounded-xl p-2">
              <h4 className="text-sm font-semibold">Dirección:</h4>
              <h5 className="text-xs">
                CRA 64c # 48-56, torres de suramericana 2
              </h5>
            </div>
          </div>
        </>
      )}
    </>
  );
}
