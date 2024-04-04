import { SearchSvg } from "@/icons";
import { Button } from ".";

interface Props {
  bottonText: string;
  placeholderText: string;
}

export default function SearchBar({ bottonText, placeholderText }: Props) {
  return (
    <div className="w-full bg-white flex justify-between p-4 mt-14 rounded-xl">
      <div className="flex justify-between relative w-1/3">
        <input
          type="text"
          className="w-full h-12 px-3 placeholder-lighter-main border rounded-lg focus:outline-main"
          placeholder={placeholderText}
        />
        <div className="absolute right-0 p-3">
          <SearchSvg />
        </div>
      </div>
    </div>
  );
}
