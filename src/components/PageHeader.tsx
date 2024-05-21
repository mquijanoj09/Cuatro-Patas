import { SearchBar } from ".";
import React from "react";
import { Client, Product } from "@/types";

interface Props {
  pageTitle: string;
  subHeading?: string;
  bottonText: string;
  placeholderText?: string;
  noSubHeading?: boolean;
  noSearchInput?: boolean;
  noSearchBar?: boolean;
  children?: React.ReactNode;
  products?: Product[];
  clients?: Client[];
}

export default async function PageHeader({
  pageTitle,
  subHeading,
  bottonText,
  placeholderText,
  noSubHeading,
  noSearchInput,
  noSearchBar,
  children,
  products,
  clients,
}: Props) {
  return (
    <div className="w-full m-20 pl-32 pb-5">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl">{pageTitle}</h1>
        <h5 className={`text-xs h-4 ${noSubHeading && "invisible"}`}>
          {subHeading}
        </h5>
      </div>
      <SearchBar
        bottonText={bottonText}
        placeholderText={placeholderText}
        noSearchInput={noSearchInput}
        noSearchBar={noSearchBar}
        products={products || []}
        clients={clients || []}
      />
      {children}
    </div>
  );
}
