"use client";
import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { XmarkSvg } from "@/icons";
import { createSell } from "@/app/api/Sell";
import { Client, Product } from "@/types";

const schema = yup.object({
  product: yup.string().required("El producto es requerido"),
  date: yup.string().required("La fecha es requerida"),
  client: yup.string().required("El cliente es requerido"),
  quantity: yup
    .string()
    .matches(/^[0-9]+$/, "La cantidad debe ser un número")
    .required("La cantidad es requerida"),
  price: yup
    .string()
    .matches(/^[0-9]+$/, "La cantidad debe ser un número")
    .required("El precio es requerido"),
  description: yup.string().required("La descripción es requerida"),
});

interface Props {
  title: string;
  products: Product[];
  clients: Client[];
  handleSetIsOpen: () => void;
}

export default function CreateSell({
  title,
  products,
  clients,
  handleSetIsOpen,
}: Props) {
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
      action={createSell}
      onSubmit={handleSubmit((data) => {
        const formData = new FormData();
        formData.append("product", data.product);
        formData.append("date", data.date);
        formData.append("client", data.client);
        formData.append("quantity", data.quantity);
        formData.append("price", data.price);
        formData.append("description", data.description);
        handleSetIsOpen();
        createSell(formData);
        reset();
      })}
      className="absolute z-50 transform flex flex-col gap-5 w-1/3 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-white p-8 rounded-xl drop-shadow-2xl"
    >
      <button
        className="absolute -top-2 -right-2 p-1 rounded-full border border-main bg-white"
        onClick={handleSetIsOpen}
      >
        <XmarkSvg />
      </button>
      <h2 className="text-2xl font-semibold">Crear {title}</h2>
      <div className="grid grid-cols-2 gap-5">
        <div className="relative flex w-full h-full flex-col items-center">
          <select
            className="w-full h-12 px-3 placeholder-gray-300 border rounded-lg focus:outline-main"
            {...register("product")}
          >
            <option value="" disabled selected className="text-gray-300">
              Producto
            </option>
            {products.map((product) => (
              <option key={product.id} value={product.id}>
                {product.nombre}
              </option>
            ))}
          </select>
          {errors.product && (
            <p className="absolute -bottom-4 text-[9px] text-red-600">
              {errors.product?.message}
            </p>
          )}
        </div>
        <Input
          label="date"
          inputText="Fecha"
          inputType="date"
          error={errors.date}
          register={register}
        />
        <div className="relative flex w-full h-full flex-col items-center">
          <select
            className="w-full h-12 px-3 placeholder-gray-300 border rounded-lg focus:outline-main"
            {...register("client")}
          >
            <option value="" disabled selected className="text-gray-300">
              Clientes
            </option>
            {clients.map((client) => (
              <option key={client.id} value={client.id}>
                {client.nombre}
              </option>
            ))}
          </select>
          {errors.client && (
            <p className="absolute -bottom-4 text-[9px] text-red-600">
              {errors.client?.message}
            </p>
          )}
        </div>
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
        <Input
          label="description"
          inputText="Descripción"
          inputType="text"
          error={errors.description}
          register={register}
        />
      </div>
      <div className="flex items-center justify-center">
        <Button type="submit">Crear</Button>
      </div>
    </form>
  );
}
