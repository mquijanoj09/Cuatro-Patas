"use client";
import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import Input from "../Input";
import Button from "../Button";
import { XmarkSvg } from "@/icons";
import { createOrder } from "../server/Order";

const schema = yup.object({
  code: yup.string().required("El código es requerido"),
  date: yup.string().required("La fecha es requerida"),
  supplier: yup.string().required("El proveedor es requerido"),
  quantity: yup
    .string()
    .required("La cantidad es requerida")
    .matches(/^[0-9]+$/, "La altura solo debe contener números"),
  price: yup
    .string()
    .required("El precio es requerido")
    .matches(/^[0-9]+$/, "La altura solo debe contener números"),
  status: yup.string().required("El estado es requerido"),
});

interface Props {
  title: string;
}

export default function CreateOrder({ title }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form
      action={createOrder}
      onSubmit={handleSubmit((data) => {
        const formData = new FormData();
        formData.append("code", data.code);
        formData.append("date", data.date);
        formData.append("supplier", data.supplier);
        formData.append("quantity", data.quantity);
        formData.append("price", data.price);
        formData.append("status", data.status);
        createOrder(formData);
        reset();
      })}
      className="absolute z-50 transform flex flex-col gap-5 w-1/3 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-white p-8 rounded-xl drop-shadow-2xl"
    >
      <button className="absolute -top-2 -right-2 p-1 rounded-full border border-main bg-white">
        <XmarkSvg />
      </button>
      <h2 className="text-2xl font-semibold">Crear {title}</h2>
      <div className="grid grid-cols-2 gap-5">
        <Input
          label="code"
          inputText="Código"
          inputType="text"
          error={errors.code}
          register={register}
        />
        <Input
          label="date"
          inputText="Fecha"
          inputType="date"
          error={errors.date}
          register={register}
        />
        <Input
          label="supplier"
          inputText="Proveedor"
          inputType="text"
          error={errors.supplier}
          register={register}
        />
        <Input
          label="quantity"
          inputText="Cantidad"
          inputType="number"
          error={errors.quantity}
          register={register}
        />
        <Input
          label="price"
          inputText="Precio"
          inputType="number"
          error={errors.price}
          register={register}
        />
        <div className="relative flex w-full h-full flex-col items-center">
          <select
            className="w-full h-12 px-3 placeholder-gray-300 border rounded-lg focus:outline-main"
            {...register("status")}
          >
            <option value="" disabled selected className="text-gray-300">
              Estado
            </option>
            <option value="Pendiente">Pendiente</option>
            <option value="Pagado">Pagado</option>
          </select>
          {errors.status && (
            <p className="absolute -bottom-4 text-[9px] text-red-600">
              {errors.status?.message}
            </p>
          )}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Button type="submit">Crear</Button>
      </div>
    </form>
  );
}
