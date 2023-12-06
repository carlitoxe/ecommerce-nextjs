import { ShoppingCartContext } from "@/context"
import { useContext } from "react"
import CardProduct from "../CardProduct";

export default function ProductList({ products, loading }) {
    // const { searchedProducts } = useContext(ShoppingCartContext);
    return (
        !loading ? <section className="grid gap-8 grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-lg mt-4 min-h-96">
            {products?.map(product => (
            <CardProduct key={product.id} {...product} />
            ))}
        </section> : <div className="h-screen">Loading...</div>
    )
}