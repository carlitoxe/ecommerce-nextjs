'use client'

import { useContext } from "react"
import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/20/solid"
import { ShoppingCartContext } from "@/context"
import OrderCard from "@/components/OrderCard"
import ProductDetailSide from "@/components/ProductDetailSide";

export default function LastOrder() {
    const { orders } = useContext(ShoppingCartContext)
    const order = orders[orders.length - 1];
    return (
        <>
        <div className='flex items-center relative justify-center w-full ssm:px-0 sm:w-3/4 md:w-3/5 lg:w-3/6 mt-2 mb-5'>
          <Link href={'/my-orders'} className='absolute left-0 hover:text-blue-500'>
            <ChevronLeftIcon className='w-8 h-8'/>
          </Link>
          <h1 className='text-center text-2xl'>My Order</h1>
        </div>
        <section className={`flex flex-col bg-black rounded-lg z-10 px-2 w-full sm:px-0 sm:w-3/4 md:w-3/5 lg:w-3/6`}>
        <div className="h-screen">
          <div className="px-2">
            <p className="border-b border-gray-400 pb-1">Order Placed: {order?.date}</p>
          </div>
          {order ? 
          <>
            {order?.products?.map((product: CartItemType) => (
              <OrderCard key={product.id} {...product} />
            ))} 
            <div className="flex justify-between items-center px-2 mt-2 text-lg">
              <p>Items: <span className="font-medium">{order.totalProducts}</span></p>
              <p>Total: <span className="text-lime-400 font-medium">${order?.totalPrice.toFixed(2)}</span></p>
            </div>
            
          </>
        : <p className="text-center">Order Not Found</p>}
          
        </div>

    </section>

    <ProductDetailSide />

      </>
    )
}