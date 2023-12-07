'use client'

import Image from 'next/image'
import CardProduct from '@/components/CardProduct';
import ProductDetailSide from '@/components/ProductDetailSide';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { Suspense, useContext, useState } from 'react';
import { ShoppingCartContext } from '@/context';
import ProductList from '@/components/ProductList';
import Loading from './loading';
import useGetProducts from '@/hooks/useGetProducts';
import SearchBar from '@/components/SearchBar';

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

        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} loadingProducts={loadingProducts} />
   
     
            <ProductList products={searchedProducts} loading={loadingProducts} searchValue={searchValue} />

         {/* <section className="grid gap-8 grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-lg mt-4 min-h-96">
            {searchedProducts?.map(product => (
              <CardProduct key={product.id} {...product} />
            ))}
          </section>  */}
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
