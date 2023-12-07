"use client";

import ProductDetailSide from "@/components/ProductDetailSide";
import { useContext } from "react";
import { ShoppingCartContext } from "@/context";
import ProductList from "@/components/ProductList";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  // const { searchedProducts } = useContext(ShoppingCartContext)
  const { searchedProducts, searchValue, setSearchValue, loadingProducts } = useContext(ShoppingCartContext);
  // const products: TProduct[] = await useGetProducts();

  return (
    <>
      <main className="flex flex-col items-center justify-between">
        <div className="flex items-center relative justify-center mt-2 mb-3">
          <h1 className="text-center text-2xl capitalize">All Products</h1>
        </div>

        <SearchBar 
          searchValue={searchValue} 
          setSearchValue={setSearchValue} 
          loadingProducts={loadingProducts} 
        />
        <ProductList 
          products={searchedProducts} 
          loading={loadingProducts} 
          searchValue={searchValue} 
        />
      </main>
      <ProductDetailSide />
    </>
  );
}
