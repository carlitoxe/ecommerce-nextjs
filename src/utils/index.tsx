import { usePathname } from "next/navigation";
import { useLocation } from "react-router-dom"

export const totalPrice = cartProducts => {
  const total = cartProducts?.reduce((sum, product) => sum + product.price * product.qty, 0);
  return total;
}

export const ScrollToTop = () => {
    const pathname = usePathname();
    
    // Automatically scrolls to top whenever pathname changes
    useEffect(() => {
      window.scrollTo((0, 0), 0);
    }, [pathname]);

    return null;
}


