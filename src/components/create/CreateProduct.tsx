"use client";
import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import Input from "../Input";
import Button from "../Button";
import { XmarkSvg } from "@/icons";
import { createProduct } from "../server/Product";

const schema = yup.object({
  name: yup.string().required("El nombre es requerido"),
  price: yup
    .string()
    .required("El precio es requerido")
    .matches(/^[0-9]+$/, "La altura solo debe contener números"),
  supplier: yup.string().required("El proveedor es requerido"),
  stock: yup
    .string()
    .required("El stock  es requerido")
    .matches(/^[0-9]+$/, "La altura solo debe contener números"),
  image: yup.mixed().required("La imagen es requerida"),
  codigo: yup.string().required("El código es requerido"),
});

interface Props {
  title: string;
}

export default function CreateProduct({ title }: Props) {
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
      action={createProduct}
      onSubmit={handleSubmit((data) => {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("price", data.price);
        formData.append("supplier", data.supplier);
        formData.append("stock", data.stock);
        formData.append("codigo", data.codigo);
        // formData.append("image", data.image[0]);
        createProduct(formData);
        reset();
      })}
      className="absolute z-50 transform flex flex-col gap-5 w-1/3 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-white p-8 rounded-xl drop-shadow-2xl"
    >
      <button className="absolute -top-2 -right-2 p-1 rounded-full border border-main bg-white">
        <XmarkSvg />
      </button>
      <h2 className="text-2xl font-semibold">Crear {title}</h2>
      <div className="flex gap-5">
        <div className="w-1/2">
          <Input
            inputText="Imagen"
            inputType="file"
            label="image"
            register={register}
            className="w-full h-full px-3 placeholder-gray-300 border rounded-lg focus:outline-main"
            // error={errors.image} // This line is not working
          />
        </div>
        <div className="flex flex-col gap-5 flex-1">
          <Input
            inputText="Stock"
            inputType="number"
            label="stock"
            register={register}
            error={errors.stock}
          />
          <Input
            inputText="Precio"
            inputType="number"
            label="price"
            register={register}
            error={errors.price}
          />
        </div>
      </div>
      <Input
        inputText="Nombre"
        inputType="text"
        label="name"
        register={register}
        error={errors.name}
      />
      <Input
        inputText="Proveedor"
        inputType="text"
        label="supplier"
        register={register}
        error={errors.supplier}
      />
      <Input
        inputText="Código"
        inputType="text"
        label="codigo"
        register={register}
        error={errors.codigo}
      />
      <div className="flex items-center justify-center">
        <Button type="submit">Crear</Button>
      </div>
    </form>
  );
}
