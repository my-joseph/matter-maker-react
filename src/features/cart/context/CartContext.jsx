import { createContext, use, useContext } from "react";
import { useState } from "react";

export const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItem, setCartItem] = useState([]);
  const addToCart = (productId) => {
    const existingProduct = cartItem.find((item) => item.id == productId);
    if (existingProduct) {
      setCartItem(
        cartItem.map((item) =>
          item.id === existingProduct.id
            ? { id: item.id, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCartItem([...cartItem, { id: productId, quantity: 1 }]);
    }
  };

  return (
    <CartContext.Provider value={{ cartItem, setCartItem, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  return context;
}
