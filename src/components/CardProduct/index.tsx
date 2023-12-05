'use client'

import Image from 'next/image';
import { ShoppingCartIcon } from '@heroicons/react/20/solid'
import { useContext } from 'react';
import { ShoppingCartContext } from '@/context';

export default function CardProduct({ id, title, price, category, image, description }) {
    const { count, 
        setCount, 
        setProductToShow, 
        openProductDetail,
        closeProductDetail,
        cartProducts, 
        setCartProducts,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        addProductsToCard
    } = useContext(ShoppingCartContext);
    
    const showProduct = (productDetail) => {
        // setOpenModal(state => !state)
        openProductDetail();
        setProductToShow(productDetail);
        closeCheckoutSideMenu();
    }

    return (
        <div 
        className='bg-black cursor-pointer w-56 h-78 text-white rounded-lg border border-slate-600 hover:border-slate-300 duration-200 delay-100'
        onClick={() => showProduct({id, title, price, category, image, description})}
    >
        <figure 
            className='relative mb-2 rounded-lg' 
        >
            <span className='absolute bottom-0 left-0 bg-gray-600 rounded-xl m-2 text-xs px-2 py-0.5 capitalize'>{category}</span>
            <Image className='h-56 object-cover rounded-t-lg'  width={222} height={220} src={image} alt='product image' />
            {/* <img className='w-full h-56 object-cover rounded-t-lg' src={image} alt={`${title} image`} /> */}
            {/* <button 
                className='absolute top-0 right-0 flex justify-center items-center bg-white rounded-full w-6 h-6 m-2 text-black p-1 font-medium hover:bg-blue-500 hover:text-white'
                onClick={() => setCount(count + 1)}
            >
                +
            </button> */}
        </figure>
        <p className="flex justify-between items-center px-3" >
            <span className="text-sm font-light truncate mr-2">{title}</span>
            <span className="font-medium">${price}</span>
        </p>
        <div className="flex justify-center items-center pb-3 mt-2">
            <button 
                className="flex items-center px-5 py-1.5 text-sm transition ease-in-out duration-200 rounded-lg bg-white text-black hover:bg-blue-600 hover:text-white focus:outline-none font-medium"
                onClick={(e) => addProductsToCard(e, {id, title, price, category, image, description})}
            >
            <ShoppingCartIcon className="h-4 w-4 mr-1" />    
            Add to Cart 
            </button>
        </div>
    </div>
    )
}