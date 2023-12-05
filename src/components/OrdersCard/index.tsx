import { useContext } from "react"
import { CalendarDaysIcon, ShoppingBagIcon, CurrencyDollarIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
import { ShoppingCartContext } from "@/context"

export default function OrdersCard({ totalPrice, totalProducts, date }) {
    const { openProductDetail, closeCheckoutSideMenu, setProductToShow, cartProducts, setCartProducts, setCount, count } = useContext(ShoppingCartContext)

    return (
        <div 
            className="flex justify-between px-4 py-2 hover:bg-blue-900 rounded-lg duration-200 ease-in cursor-pointer border border-gray-500 w-full"
            // onClick={() => showProduct({id, title, image, price, description})}
         >
            <div className="w-full flex justify-between items-center">
                <div className="flex flex-col gap-0.5 text-sm justify-center">
                    <div className="flex gap-0.5 items-center">
                        <CalendarDaysIcon className="h-6 w-6" />
                        <span className="">{date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <ShoppingBagIcon className="w-6 h-6" />
                        <span>{totalProducts} Items</span>
                    </div>
                </div>
                <div className="flex items-center">
                    <CurrencyDollarIcon className="w-6 h-6" />
                    <span className="text-lime-400 text-lg font-medium">${totalPrice.toFixed(2)}</span>
                    <ChevronRightIcon className="h-6 w-6 ml-2" />
                </div>
            </div>
        </div>
    )
}