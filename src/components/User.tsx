import { ArrowDownSvg } from "@/icons";
import Image from "next/image";
import React from "react";

export default function User() {
  return (
    <div className="absolute right-0 m-12 p-8 bg-white rounded-full flex gap-3 items-center justify-between">
      <Image src={""} alt="user foto" />
      <div>
        <h4 className="text-sm">Maria Camila Guzmán</h4>
        <h5 className="text-xs">cuatropatasgalletas@gmail.com</h5>
      </div>
      <ArrowDownSvg />
    </div>
  );
}
