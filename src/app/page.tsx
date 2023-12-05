
import Image from 'next/image'
import CardProduct from '@/components/CardProduct';
import ProductDetailSide from '@/components/ProductDetailSide';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { Suspense, useContext } from 'react';
import { ShoppingCartContext } from '@/context';
import ProductList from '@/components/ProductList';
import Loading from './loading';

async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  return res.json();
}

export default async function Home() {
  // const { searchedProducts } = useContext(ShoppingCartContext)
  // const { searchedProducts, searchValue, onSearchValue, getProducts } = useContext(ShoppingCartContext)
  const products: TProduct[] = await getProducts();
  
  return (
    <>
      <main className="flex flex-col items-center justify-between">
      <div className="flex items-center relative justify-center mt-2 mb-3">
          <h1 className="text-center text-2xl capitalize">All Products</h1>
        </div>
   
        <Suspense fallback={<Loading />}>
          <ProductList products={products} />
        </Suspense>
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
