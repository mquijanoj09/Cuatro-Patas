import React from "react";
import { SearchBar } from ".";

interface Props {
  pageTitle: string;
  subHeading?: string;
  bottonText: string;
  placeholderText: string;
  noSubHeading?: boolean;
  noSearchInput?: boolean;
  noSearchBar?: boolean;
  children?: React.ReactNode;
}

export default function PageHeader({
  pageTitle,
  subHeading,
  bottonText,
  placeholderText,
  noSubHeading,
  noSearchInput,
  noSearchBar,
  children,
}: Props) {
  return (
    <div className="w-full m-20">
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
      />
      {children}
    </div>
  );
}
