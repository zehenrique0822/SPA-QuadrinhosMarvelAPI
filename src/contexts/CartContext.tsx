import React, { createContext, useState } from "react";
import { ComicType } from "../types/ComicType";

// Types de itens do contexto
export type CartContextState = {
  cart: any;
  totalValue: number;
  cartCount: number;
  cartValue: number;
  addCart: Function;
  removeFromCart: Function;
  changeItemAmount: Function;
};
// Valores padrões de itens do contexto
const contextDefaultValues: CartContextState = {
  cart: {
    id: 0,
    title: '',
    thumbnail: {
      path: '',
      extension: ''
    },
    price: 0,
    raro: false,
    amount: 0
  },
  totalValue: 0,
  cartCount: 0,
  cartValue: 0,
  addCart: () => { },
  removeFromCart: () => { },
  changeItemAmount: () => { }
};

export const CartContext = createContext<CartContextState>(
  contextDefaultValues
);

export const CartProvider: React.FC = ({ children }: any) => {
  const [cart, setCart] = useState<any>([]);
  const [totalValue, setTotalValue] = useState<number>((contextDefaultValues.totalValue));
  const [cartCount, setCartCount] = useState<number>((contextDefaultValues.cartCount));
  const [cartValue, setCartValue] = useState<number>((contextDefaultValues.cartCount));

  // Função para adicionar item ao carrinho e caso já esteja adicionado aumentar a quantidade
  const addCart = (item: any, cart: any) => {
    setCart((old: any) => {
      let quantity = 0;
      if (old[item.id]) {
        quantity = old[item.id].amount
      }
      return {
        ...old,
        [item.id]: {
          amount: quantity + 1,
          item
        }
      }
    })
  }
// Função para remover item do carrinho
  const removeFromCart = (cartId: any) => {
    setCart((old: any) => {
      const newCart: any = {}
      Object.keys(old).forEach(id => {
        if (id !== cartId) {
          newCart[id] = old[id]
        }
      })
      return newCart
    })
  }
// Função para alterar quantidade de item no carrinho
  const changeItemAmount = (key: any, newQty: any) => {
    setCart((old: any) => {
      old[key].amount = newQty
      const newCart = {
        ...old,
      }
      return newCart
    })
  }  
  return (
    <CartContext.Provider
      value={{
        cart,
        totalValue,
        cartCount,
        cartValue,
        addCart,
        removeFromCart,
        changeItemAmount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};