import CardProduct from "../CardProduct";
import SkeletonLoading from "../SkeletonLoading";

type ProductListType = {
    products: TProduct[]
    loading: boolean
    searchValue: string
}

export default function ProductList({ products, loading, searchValue }: ProductListType) {
    
    return (
        !loading ?   
        products.length ? 
        ( <section className="grid gap-8 grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-lg mt-4 min-h-96">
            {products?.map(product => (
            <CardProduct key={product.id} {...product} />
            ))}
        </section> ) 
        :  <div className="text-lg h-screen">
            No results found for: <span className="font-medium italic">{searchValue}</span>
            </div> 
        : <section className="grid gap-8 grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-lg mt-4 min-h-96">
            <SkeletonLoading qty={8} />
          </section>
        
    )
}