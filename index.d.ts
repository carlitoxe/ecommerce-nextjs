type TProductId = number
type Url = string
type rating = {
    rate: number
    count: number
}

type TProduct = {
    id: TProductId
    title: string
    price: number
    description: string
    category?: string
    image: Url
    rating?: rating
}

type CartItemType = TProduct & { qty: number }

type TOrder = {
    id: string
    date: string
    products: TProduct[]
    totalProducts: number
    totalPrice: number
}

type ContextState = {
    count: number
    cartCount: number
    setCount: Function
    setProductToShow: Function
    openProductDetail: Function
    closeProductDetail: MouseEventHandler<HTMLButtonElement>
    setCartProducts: Function
    openCheckoutSideMenu: Function
    addProductsToCard: MouseEventHandler<HTMLButtonElement>
    searchedProducts: TProduct[]
    searchValue: string
    setSearchValue: Function
    loadingProducts: boolean
    cartProducts: CartItemType[]
    orders: TOrders[]
    setOrders: Function
    handleCheckout: MouseEventHandler<HTMLButtonElement>
    handleDelete: MouseEventHandler<HTMLButtonElement>  
    total: number
    isCartProducts: boolean
    closeCheckoutSideMenu: MouseEventHandler<HTMLButtonElement>
    isCheckoutSideMenuOpen: boolean
    productToShow: TProduct
    isProductDetailOpen: boolean
}