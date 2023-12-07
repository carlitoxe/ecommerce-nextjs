'use client'

import { XCircleIcon } from "@heroicons/react/20/solid"
import { useContext } from "react"
import { ShoppingCartContext } from "@/context";
import { usePathname } from "next/navigation";
import OrderCard from "../OrderCard";
import Link from "next/link";

export default function CheckoutSideMenu() {
    const { isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts, handleCheckout, handleDelete, isCartProducts, total } = useContext(ShoppingCartContext);
    
    return (
        <aside className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} flex-col fixed right-0 border bg-black border-gray-500 rounded-lg top-[68px] w-[360px] h-[calc(100vh-68px)] z-10 overflow-y-scroll`}>
        <div className="flex justify-between items-center pt-4 px-4 pb-2">
            <h2 className="text-lg text-white">My Order</h2>
                <button 
                    // onClick={() => setOpenModal(false)}
                    onClick={closeCheckoutSideMenu} 
                    className="font-bold cursor-pointer"
                >
                    <XCircleIcon className="w-7 h-7 text-white hover:text-red-500"/>
                </button>
        </div>
        <div className="px-2 flex-1">
            {cartProducts?.map(product => (
                <OrderCard key={product.id} {...product} />
            ))}
        </div>
            <div className="pr-2 pl-4">
                <p className="flex items-center justify-between pr-2 mt-3 mb-3">
                    <span>Total :</span>
                    <span className="text-lime-400 text-lg font-medium">${total?.toFixed(2)}</span>
                </p>
                <div className="flex justify-center mb-4">
                <Link className='w-full' href={`${!isCartProducts ? 'javascript:void(0)' : '/my-orders/last'}`}>
                    <button 
                        type="button" 
                        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:text-black dark:bg-white dark:hover:bg-blue-700 dark:hover:text-white focus:outline-none dark:focus:ring-blue-800"
                        onClick={handleCheckout}
                    >
                        Checkout
                    </button>
                </Link>

                </div>
            </div>
    </aside>
    )
}