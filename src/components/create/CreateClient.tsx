"use client";
import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { XmarkSvg } from "@/icons";
import { createClient } from "../../app/api/Client";

const schema = yup.object({
  name: yup.string().required("El nombre es requerido"),
  number: yup
    .string()
    .required("El número es requerido")
    .matches(/^[0-9]+$/, "El número solo debe contener números"),
  address: yup.string().required("La dirección es requerida"),
  phone: yup
    .string()
    .required("El teléfono es requerido")
    .matches(/^[0-9]+$/, "El teléfono solo debe contener números")
    .min(10, "El teléfono debe tener 10 dígitos")
    .max(10, "El teléfono debe tener 10 dígitos"),
  email: yup
    .string()
    .required("El email es requerido")
    .email("El email no es válido"),
  pet: yup.string().required("La mascota es requerida"),
  breed: yup.string().required("La raza es requerida"),
});

interface Props {
  title: string;
  handleSetIsOpen: () => void;
}

export default function CreateClient({ title, handleSetIsOpen }: Props) {
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
      action={createClient}
      onSubmit={handleSubmit((data) => {
        const formData = new FormData();
        formData.append("number", data.number);
        formData.append("name", data.name);
        formData.append("address", data.address);
        formData.append("phone", data.phone);
        formData.append("email", data.email);
        formData.append("pet", data.pet);
        formData.append("breed", data.breed);
        handleSetIsOpen();
        createClient(formData);
        reset();
      })}
      className="absolute z-50 transform flex flex-col gap-5 w-1/3 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-white p-8 rounded-xl drop-shadow-2xl"
    >
      <button className="absolute -top-2 -right-2 p-1 rounded-full border border-main bg-white">
        <XmarkSvg />
      </button>
      <h2 className="text-2xl font-semibold">Crear {title}</h2>
      <div className="grid grid-cols-2 gap-5">
        <div className="w-full col-span-2">
          <Input
            label="name"
            inputText="Nombre"
            inputType="text"
            error={errors.name}
            register={register}
          />
        </div>
        <Input
          label="number"
          inputText="Código"
          inputType="number"
          error={errors.number}
          register={register}
        />
        <Input
          label="address"
          inputText="Dirección"
          inputType="text"
          error={errors.address}
          register={register}
        />
        <Input
          label="phone"
          inputText="Teléfono"
          inputType="number"
          error={errors.phone}
          register={register}
        />
        <Input
          label="email"
          inputText="Email"
          inputType="email"
          error={errors.email}
          register={register}
        />
        <Input
          label="pet"
          inputText="Mascota"
          inputType="text"
          error={errors.pet}
          register={register}
        />
        <Input
          label="breed"
          inputText="Raza"
          inputType="text"
          error={errors.breed}
          register={register}
        />
      </div>
      <div className="flex items-center justify-center">
        <Button type="submit">Crear</Button>
      </div>
    </form>
  );
}
