"use client";
import { SearchSvg } from "@/icons";
import { ButtonPlus } from ".";
import Input from "./ui/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Client, Product } from "@/types";

interface Props {
  bottonText: string;
  placeholderText?: string;
  noSearchInput?: boolean;
  noSearchBar?: boolean;
  products: Product[];
  clients: Client[];
}

const schema = yup.object({
  search: yup.string(),
});

export default function SearchBar({
  bottonText,
  placeholderText,
  noSearchInput,
  noSearchBar,
  products,
  clients,
}: Props) {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <div
      className={`w-full bg-white flex justify-between p-4 mt-8 rounded-xl ${
        noSearchBar && "hidden"
      }`}
    >
      <form
        onSubmit={handleSubmit((data) => {
          if ((data.search = "")) return;

          reset();
        })}
        className={`flex justify-between relative w-1/3 ${
          noSearchInput && "invisible"
        }`}
      >
        <Input
          inputText={placeholderText || ""}
          inputType="text"
          label="search"
          register={register}
        />
        <div className="absolute right-0 p-3 flex gap-5 items-center">
          <button
            type="button"
            onClick={() => setValue("search", "", { shouldValidate: true })}
            className="text-gray-300 text-sm"
          >
            Borrar
          </button>
          <button
            type="submit"
            onClick={handleSubmit((data) => {
              reset();
            })}
          >
            <SearchSvg />
          </button>
        </div>
      </form>
      <ButtonPlus title={bottonText} products={products} clients={clients}>
        {bottonText}
      </ButtonPlus>
    </div>
  );
}
