import { SearchSvg } from "@/icons";
import { ButtonPlus } from ".";

interface Props {
  bottonText?: string;
  placeholderText?: string;
  noSearchInput?: boolean;
  noSearchBar?: boolean;
}

export default function SearchBar({
  bottonText,
  placeholderText,
  noSearchInput,
  noSearchBar,
}: Props) {
  return (
    <div
      className={`w-full bg-white flex justify-between p-4 mt-8 rounded-xl ${
        noSearchBar && "invisible"
      }`}
    >
      <div
        className={`flex justify-between relative w-1/3 ${
          noSearchInput && "invisible"
        }`}
      >
        <input
          type="text"
          className="w-full h-12 px-3 placeholder-gray-300 border rounded-lg focus:outline-main"
          placeholder={placeholderText}
        />
        <div className="absolute right-0 p-3">
          <SearchSvg />
        </div>
      </div>
      <ButtonPlus>{bottonText}</ButtonPlus>
    </div>
  );
}
