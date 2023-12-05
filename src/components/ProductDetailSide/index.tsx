'use client'

import { ShoppingCartContext } from "@/context"
import { XCircleIcon, ShoppingCartIcon } from "@heroicons/react/20/solid"
import { useContext } from "react"

export default function ProductDetailSide() {
    const { productToShow, isProductDetailOpen, addProductsToCard, closeProductDetail } = useContext(ShoppingCartContext)

    return (
        <aside key={productToShow.id} className={`${isProductDetailOpen ? 'flex' : 'hidden'} flex-col fixed right-0 border bg-black border-gray-500 rounded-lg top-[68px] w-[360px] h-[calc(100vh-68px)] z-10 overflow-y-auto`}>
        <div className="flex justify-between items-center pt-4 px-4 pb-2">
            <h2 className="text-lg text-white">Detail</h2>
                <button 
                    // onClick={() => setOpenModal(false)}
                    onClick={closeProductDetail} 
                    className="font-bold cursor-pointer"
                >
                    <XCircleIcon className="w-7 h-7 text-white hover:text-red-500"/>
                </button>
        </div>
        <figure className="h-2/4 flex justify-center px-2 mb-1">
            <img 
                src={productToShow.image} 
                alt='product image' 
                className="h-full object-cover rounded-lg" 
            />

        </figure>
        <div className="p-2 text-white text-center">
            <h1 className='text-xl font-bold'>
                {productToShow.title} 
            </h1>
            <p className='mt-1 text-lg'>
                Price: <span className="font-semibold text-lime-400">${productToShow.price}</span>
            </p>
            <div className="flex justify-center py-2">
                <button 
                    className="flex items-center justify-center px-6 py-2 text-sm transition ease-in-out duration-200 rounded-lg text-black bg-white hover:bg-blue-600 hover:text-white focus:outline-none font-medium"
                    onClick={(e) => addProductsToCard(e, productToShow)}
                >
                <ShoppingCartIcon className="h-4 w-4 mr-1" />    
                Add to Cart 
                </button>

            </div>
            <p className='mt-1 text-sm text-gray-300 text-light pb-4'>
                {productToShow.description} 
            </p>
        </div>
    
    </aside>
    )
}