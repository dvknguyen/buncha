import { Card } from "@mui/material";
import { createContext, ReactNode, useContext, useState } from "react";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type CardItem = {
  id: number;
  quantity: number;
};
type ShoppingCartContext = {
  getItemQuantity: (id: number) => number;
  increaseCardQuantity: (id: number) => void;
  decreaseCardQuantity: (id: number) => void;
  removeFromCard: (id: number) => void;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cardItems, setCardItems] = useState<CardItem[]>([]);

  function getItemQuantity(id: number) {
    return cardItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCardQuantity(id: number) {
    setCardItems((cardItems) => {
      if (cardItems.find((item) => item.id === id) == null) {
        return [...cardItems, { id, quantity: 1 }];
      } else {
        return cardItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseCardQuantity(id: number) {
    setCardItems((curItems) => {
      if (curItems?.find((item) => item.id === id)?.quantity === 1) {
        return curItems.filter((item) => item.id !== id);
      } else {
        return curItems.map((item) => {
          if (item.id === id) {
            return { ...item, id: id, quantity: item.quantity - 1 };
          } else return item;
        });
      }
    });
    console.log(cardItems);
  }

  function removeFromCard(id: number) {
    setCardItems((curItems) => {
      return curItems?.filter((item) => item.id !== id);
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCardQuantity,
        decreaseCardQuantity,
        removeFromCard,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
