import { createContext, useContext, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

interface CartItem extends Product {
  productQuantity: number;
  cartQuantity: number;
  total: number;
}

type CartProviderProps = {
  children: React.ReactNode;
};

interface CartContextData {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  getTotalItemCount: () => number;
  updateProductQuantity: (productId: number, productQuantity: number) => void;
  updateTotal: (productId: number, total: number) => void;
}

export const CartContext = createContext<CartContextData>({
  cartItems: [],
  addToCart: () => {},
  getTotalItemCount: () => 0,
  updateProductQuantity: () => {},
  updateTotal: () => {},
});

const AppProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        productQuantity: existingItem.productQuantity + existingItem.quantity,
        total:
          (existingItem.productQuantity + existingItem.quantity) *
          existingItem.price,
        cartQuantity: existingItem.cartQuantity + existingItem.quantity,
      };

      const updatedCartItems = cartItems.map((item) =>
        item.id === product.id ? updatedItem : item
      );

      setCartItems(updatedCartItems);
    } else {
      const newItem: CartItem = {
        ...product,
        productQuantity: 1,
        cartQuantity: 1,
        total: product.price,
      };

      setCartItems([...cartItems, newItem]);
    }
  };

  const getTotalItemCount = () => {
    let totalCount: number = 0;

    for (const item of cartItems) {
      totalCount += item.productQuantity;
    }

    return totalCount;
  };

  const updateProductQuantity = (productId: number, newQuantity: number) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === productId) {
        return {
          ...item,
          quantity: newQuantity,
        };
      }
      return item;
    });

    setCartItems(updatedCartItems);
  };

  const updateTotal = (productId: number, total: number) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === productId ? { ...item, total } : item
    );

    setCartItems(updatedCartItems);
  };

  const contextValue: CartContextData = {
    cartItems,
    addToCart,
    getTotalItemCount,
    updateProductQuantity,
    updateTotal,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { AppProvider, useCart };
