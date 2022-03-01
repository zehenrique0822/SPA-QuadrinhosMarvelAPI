import React, { createContext, useState } from "react";

export type CartContextState = {
    cart: string[];
    totalValue: number;
    cartCount: number;
    addCart: (name: string) => void;
  };

const contextDefaultValues: CartContextState = {
    cart: [],
    totalValue: 0,
    cartCount: 0,
    addCart: () => {}
  };
  
  export const CartContext = createContext<CartContextState>(
    contextDefaultValues
  );
  
  export const CartProvider: React.FC = ({ children }) => {
    const [cart, setCart] = useState<string[]>(contextDefaultValues.cart);
    const [totalValue, setTotalValue] = useState<number>((contextDefaultValues.totalValue));
    const [cartCount, setCartCount] = useState<number>((contextDefaultValues.cartCount));
  
    const addCart = (newCart: string) => setCart((cart) => [...cart, newCart]);
  
    return (
      <CartContext.Provider
        value={{
          cart,
          totalValue,
          cartCount,
          addCart
        }}
      >
        {children}
      </CartContext.Provider>
    );
  };
  

