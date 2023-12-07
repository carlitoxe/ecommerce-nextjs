import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

type SearchBarType = {
  searchValue: string
  setSearchValue: Function
  loadingProducts: boolean
}

export default function SearchBar({ searchValue, setSearchValue, loadingProducts }: SearchBarType) {
  const onSearchValue = ({target}: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(target.value)
  }

  return (
    <form className="w-80 mb-7">
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
   
        </div>


        <input 
          type="text" 
          placeholder="Search for a product..." 
          className="block w-full px-4 ps-10 py-1.5 pl-5 border rounded-lg bg-transparent border-gray-300 placeholder-gray-400  text-white focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700" 
          value={searchValue} 
          onChange={onSearchValue} 
          disabled={loadingProducts}
        />
   
      </div>
    </form>
  );
}
