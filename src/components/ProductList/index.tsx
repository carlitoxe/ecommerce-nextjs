import { ShoppingCartContext } from "@/context"
import { useContext } from "react"
import CardProduct from "../CardProduct";

type ProductListType = {
    products: TProduct[]
    loading: boolean
    searchValue: string
}

export default function ProductList({ products, loading, searchValue }: ProductListType) {
    // const { searchedProducts } = useContext(ShoppingCartContext);
    return (
        !loading ? 
        products?.length ? 
        ( <section className="grid gap-8 grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-lg mt-4 min-h-96">
            {products?.map((product: TProduct) => (
            <CardProduct key={product.id} {...product} />
            ))}
        </section> ) 
        : <div className="text-lg">No results found for: <span className="font-medium italic">{searchValue}</span></div>
        : <div className="h-screen">Loading...</div>
    )
}