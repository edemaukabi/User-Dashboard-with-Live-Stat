import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex items-center justify-center relative">
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <AiOutlineSearch size={"1rem"} />
        </div>
        <input
          className="bg-gullGrayLighter block w-full pl-10 pr-3 
            py-2 rounded-md placeholder-gray-500 focus:outline-none focus:placeholder-gray-400
            focus:rounded sm:text-sm transition duration-150 ease-in-out"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
    </div>
  );
};
