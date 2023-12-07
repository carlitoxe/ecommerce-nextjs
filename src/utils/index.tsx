export const totalPrice = (cartProducts: CartItemType[]) => {
  const total = cartProducts?.reduce((sum, product) => sum + product.price * product.qty, 0);
  return total;
}


