'use client'

import { ShoppingCartContext } from "@/context"
import { useContext } from "react"
import Link from "next/link";
import OrderCard from "@/components/OrderCard";
import ProductDetailSide from "@/components/ProductDetailSide";

export default function Cart() {
    const { cartProducts, handleCheckout, handleDelete, total, isCartProducts, closeCheckoutSideMenu } = useContext(ShoppingCartContext);
    closeCheckoutSideMenu()

    return (
        <>
        <section className="mt-2 w-full sm:w-3/4 lg:w-2/4">
          <div className="flex items-center relative justify-center mb-4">
            <h1 className="text-center text-2xl">Shopping Cart</h1>
          </div>
          {cartProducts?.length ? (
            <div className="px-2 flex-1">
              {cartProducts?.map((product) => (
                <OrderCard key={product.id} {...product} handleDelete={handleDelete} />
              ))}
              <div className="pr-2 pl-4">
                <p className="flex items-center justify-between pr-2 mt-3 mb-3 text-lg">
                  <span>Total :</span>
                  <span className="text-lime-400 text-lg font-medium">${total.toFixed(2)}</span>
                </p>
                <div className="flex justify-center mb-4">
                  <Link className="w-full" href={`${!isCartProducts ? "javascript:void(0)" : "/my-orders/last"}`}>
                    <button type="button" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:text-black dark:bg-white dark:hover:bg-blue-700 dark:hover:text-white focus:outline-none dark:focus:ring-blue-800" onClick={handleCheckout}>
                      Checkout
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-xl text-center px-4">You have no products in the cart at this moment.</div>
          )}
        </section>
          <ProductDetailSide />
      </>
    )
}