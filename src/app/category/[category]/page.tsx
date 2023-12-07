'use client'

import { ShoppingCartContext } from "@/context"
import { useContext } from "react"
import CardProduct from "@/components/CardProduct"
import ProductDetailSide from "@/components/ProductDetailSide"
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid"
import SearchBar from "@/components/SearchBar"
import ProductList from "@/components/ProductList"

export default function Category({ params }: { params: { category: string } }) {
    const { searchedProducts, searchValue, setSearchValue, loadingProducts } = useContext(ShoppingCartContext)
    // const products: TProduct[] = await useGetProducts();
    
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
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} loadingProducts={loadingProducts} />


      </div>
      <ProductList products={filteredByCategory} loading={loadingProducts} searchValue={searchValue} />
              {/* <section className="grid gap-8 grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-lg mt-4 min-h-96">
                {filteredByCategory?.map((product: TProduct) => (
                  <CardProduct key={product.id} {...product} />
                ))}
              </section> */}
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