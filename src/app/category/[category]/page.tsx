'use client'

import { ShoppingCartContext } from "@/context"
import { useContext } from "react"
import CardProduct from "@/components/CardProduct"
import ProductDetailSide from "@/components/ProductDetailSide"
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid"

export default function Category({ params }: { params: { category: string } }) {
    const { products, searchedProducts, searchValue, onSearchValue } = useContext(ShoppingCartContext)
    const category = params.category
    const categoryName = category?.replace('-', ' ').replace('mens', "men's");
    const filteredByCategory = category ? 
    searchedProducts?.filter((product: TProduct) => product.category === categoryName) : 
    searchedProducts;

    return (
      <>
        <main className="flex flex-col items-center justify-between">
          <div className="flex items-center relative justify-center mt-2 mb-3">
              <h1 className="text-center text-2xl capitalize">{categoryName}</h1>
          </div>

          <div className="flex justify-center items-center">
        <form className="w-80 mb-7">

    <label
      htmlFor="default-search"
      className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
    >
      Search
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
        {/* <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg> */}
      </div>
      {/* <input
        type="search"
        id="default-search"
        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search Mockups, Logos..."
        required=""
      /> */}

  <input
          type="text"
          placeholder="Search for a product..."
          className="block w-full px-4 ps-10 py-1.5 pl-5 border rounded-lg bg-transparent border-gray-300 placeholder-gray-400  text-white focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
          value={searchValue} 
          onChange={onSearchValue}
      />
      {/* <button
        type="submit"
        className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Search
      </button> */}
    </div>
  </form>

      </div>
              <section className="grid gap-8 grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-lg mt-4 min-h-96">
                {filteredByCategory?.map((product: TProduct) => (
                  <CardProduct key={product.id} {...product} />
                ))}
              </section>
            {/* {openModal && (
            <ProductModal>
              <ProductDetail />
            </ProductModal>
          )} */}
        </main>
        <ProductDetailSide />
      </>    
    )
}