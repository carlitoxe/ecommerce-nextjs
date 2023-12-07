'use client'

import { createContext, useState, useEffect } from "react";
// import { apiUrl } from "../api"
import { totalPrice } from "../utils";
// import useGetProducts from "@/hooks/useGetProducts";

const defaultValue = {} as ContextState;

export const ShoppingCartContext = createContext(defaultValue);

export const ShoppingCartProvider = ({ children }: { children: React.ReactNode }) => {
    const [count, setCount] = useState(0);

    // Product Detail Modal Mode
    const [openModal, setOpenModal] = useState(false);
    
    // Product Detail Sidemenu Mode
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    // Checkout Sidemenu Mode
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

        // Get Products
        const [products, setProducts] = useState<TProduct[]>([]);
        const [loadingProducts, setLoadingProducts] = useState(true);
        // const products: TProduct[] = await useGetProducts();
    
        // async function getProducts() {
        //   const res = await fetch('https://fakestoreapi.com/products');
        //   if (!res.ok) {
        //     // This will activate the closest `error.js` Error Boundary
        //     throw new Error('Failed to fetch data')
        //   }
        //   return res.json();
        // }
    
        const getProducts = async () => {
          setLoadingProducts(true);
          return await fetch(`https://fakestoreapi.com/products`)
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error(err))
            .finally(() => setLoadingProducts(false))
        }
    
        useEffect(() => {
            getProducts();
            // setIsLoading(true);
            // fetch(`https://fakestoreapi.com/products`)
            //   .then(res => res.json())
            //   .then(data => setProducts(data))
            //   .catch(err => console.error(err))
            //   .finally(() => setIsLoading(false))
        }, [])
    
    // Prodduct Detail - Show Product (Info)
    const [productToShow, setProductToShow] = useState<TProduct | any>({});

    // Shopping Cart with Local Storage
      let cartString: string | null | false
      const localStorageIsAvailable = typeof localStorage !== 'undefined'

        cartString = localStorageIsAvailable && localStorage.getItem('cart')
        if (localStorageIsAvailable && !localStorage.getItem('cart')) { 
          localStorage.setItem('cart', JSON.stringify([]));
         }
      
    // const parsedCart: TProduct[] = JSON.parse(cartString)
    // console.log(localStorageCart);

    const [cartProducts, setCartProducts] = useState(JSON.parse(cartString || '[]'));
    // console.log(localStorageCart);
    // Local Storage - Cart

      useEffect(() => {
        if (localStorageIsAvailable) {
          localStorage.setItem('cart', JSON.stringify(cartProducts));
        }
      }, [cartProducts])

    const updateCartStorage = (cartProducts: TProduct[]) => {
      try {
        localStorageIsAvailable && localStorage.setItem('cart', JSON.stringify(cartProducts));
      } catch (err) {
        console.error(err)
      }
    }
    
    // Handling Shopping Cart
    const isCartProducts = cartProducts?.length !== 0;
    const total = totalPrice(cartProducts);
    
    const addProductsToCard = (e: Event, productData: CartItemType) => {
      e.stopPropagation();
      const isInCart = cartProducts.some((product: TProduct) => product.id === productData.id);
      // productData.qty = qty
      // console.log(productData);
      if (!isInCart) {
          // setCount(count + 1);
          productData.qty = 1;
          setCartProducts([...cartProducts, productData]);
      } else {
          const productToUpdate = cartProducts.find((product: TProduct) => product.id === productData.id);
          productToUpdate.qty += 1;
          // console.log(productToUpdate);
          // setCartProducts([...cartProducts, {...productData, qty}]);
        }
        updateCartStorage(cartProducts)
        setCount(count + 1)
      closeProductDetail();
      openCheckoutSideMenu();  
  }

  const totalQty = cartProducts?.reduce((sum: number, product: CartItemType) => sum + product.qty, 0);

     // ORDERS with Local Storage
     let orderString: string | null | false = localStorageIsAvailable && localStorage.getItem('orders');

     if (localStorageIsAvailable && !localStorage.getItem('orders')) {
       localStorage.setItem('orders', JSON.stringify([]));
     }

     const [orders, setOrders] = useState(JSON.parse(orderString || '[]'));

     useEffect(() => {
      if (localStorageIsAvailable) {
        localStorage.setItem('orders', JSON.stringify(orders)); 
      }
    }, [orders])
 
     const updateOrdersStorage = (orders: TOrder[]) => {
       try {
         localStorage.setItem('orders', JSON.stringify(orders));
       } catch (err) {
         console.error(err)
       }
     }
     
     const handleCheckout = () => {
       const date = new Date();
      if (isCartProducts) {
        const orderToAdd = {
          id: crypto.randomUUID(),
          date: date.toLocaleDateString(),
          products: cartProducts,
          totalProducts: totalQty,
          totalPrice: total,
        }
          setOrders([...orders, orderToAdd]);
          setCartProducts([]);
          updateCartStorage([])
          setCount(0);
          closeCheckoutSideMenu();
        } else {
          return
        }
        updateOrdersStorage(orders)
      // console.log(cartProducts);
    }
    const handleDelete = (e: Event, id: number) => { 
        e.stopPropagation();
        const cartUpdated = cartProducts.filter((product: CartItemType) => product.id !== id)
        setCartProducts(cartUpdated)
        updateCartStorage(cartUpdated)
        setCount(count - 1);
        // console.log(cartProducts);
    }

  const cartCount = cartProducts?.reduce((sum: number, product: CartItemType) => sum + product.qty, 0);

    // console.log('order', orders)
    
    // Search Products by title
      const [ searchValue, setSearchValue ] = useState('');

      // const onSearchValue = e => {
      //   setSearchValue(e.target.value)
      // }

      let searchedProducts = []
    
      if (searchValue) {
        searchedProducts = products.filter(product => product.title.toLowerCase().includes(searchValue.toLowerCase()))
      } else {
        searchedProducts = products;
      }

    return (
        <ShoppingCartContext.Provider 
        value={{ 
            count, 
            setCount,
            // openModal, 
            // setOpenModal,
            productToShow,
            setProductToShow,
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            orders,
            setOrders,
            // products,
            // setProducts,
            loadingProducts,
            searchValue,
            // onSearchValue,
            setSearchValue,
            searchedProducts,
            handleCheckout,
            handleDelete,
            isCartProducts,
            total,
            addProductsToCard,
            cartCount,
            // getProducts
        }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}