"use client";
import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { XmarkSvg } from "@/icons";
import { createTransaction } from "@/app/api/Transaction";

const schema = yup.object({
  name: yup.string().required("El nombre es requerido"),
  supplier: yup.string().required("El proveedor es requerido"),
  date: yup.string().required("La fecha es requerida"),
  price: yup
    .string()
    .required("El precio es requerido")
    .matches(/^[0-9]+$/, "La altura solo debe contener números"),
  description: yup.string().required("La descripción es requerida"),
});

interface Props {
  title: string;
  handleSetIsOpen: () => void;
}

export default function CreateTransaction({ title, handleSetIsOpen }: Props) {
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
      action={createTransaction}
      onSubmit={handleSubmit((data) => {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("supplier", data.supplier);
        formData.append("date", data.date);
        formData.append("price", data.price);
        formData.append("description", data.description);
        handleSetIsOpen();
        createTransaction(formData);
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
        <Input
          label="name"
          inputText="Título"
          inputType="text"
          error={errors.name}
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
