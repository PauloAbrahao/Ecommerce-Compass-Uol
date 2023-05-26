import { createContext, useContext, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
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
  addToCart: (product: Product, quantity: number) => void;
  getTotalItemCount: () => number;
  getTotalPrice: () => number;
  updateTotal: (productId: number, total: number) => void;
}

export const CartContext = createContext<CartContextData>({
  cartItems: [],
  addToCart: () => {},
  getTotalItemCount: () => 0,
  getTotalPrice: () => 0,
  updateTotal: () => {},
});

const AppProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product, quantity: number) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        productQuantity: existingItem.productQuantity + quantity,
        total: (existingItem.productQuantity + quantity) * existingItem.price,
        cartQuantity: existingItem.cartQuantity + quantity,
      };

      const updatedCartItems = cartItems.map((item) =>
        item.id === product.id ? updatedItem : item
      );

      setCartItems(updatedCartItems);
    } else {
      const newItem: CartItem = {
        ...product,
        productQuantity: quantity,
        cartQuantity: quantity,
        total: product.price * quantity,
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

  const getTotalPrice = () => {
    let total = 0;

    for (const item of cartItems) {
      total += item.price * item.cartQuantity;
    }

    return total;
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
    updateTotal,
    getTotalPrice,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { AppProvider, useCart };
