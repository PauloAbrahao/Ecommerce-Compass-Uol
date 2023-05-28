interface CardProps {
  id: number;
  image?: string;
  title: string;
  price: number;
  description?: string;
  rating?: {
    rate: number;
  };
  onPress?: () => void;
  isCart: boolean;
  heartIconPress?: () => void;
  favorite?: boolean;
  removeButtonPress?: () => void;
}
interface Product {
  title: string;
  price: number;
  description: string;
  image: string;
  rating: {
    rate: number;
  };
  heart: number;
}
interface store {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
interface Images {
  email: NodeRequire;
  password: NodeRequire;
  username: NodeRequire;
}
interface RenderStarsProps {
  rate: number;
}
interface FavoriteProps {
  heartIconPress?: () => void;
  favorite?: boolean;
  isDetail?: boolean;
}
interface ProductContex {
  id: number;
  title: string;
  price: number;
  image: string;
}
interface CartItem extends ProductContex {
  productQuantity: number;
  cartQuantity: number;
  total: number;
}

interface CartContextData {
  cartItems: CartItem[];
  addToCart: (product: ProductContex, quantity: number) => void;
  removeFromCart: (productId: number) => void;
  resetCart: () => void;
  getTotalItemCount: () => number;
  getTotalPrice: () => number;
}


export {
  CardProps,
  store,
  Images,
  Product,
  RenderStarsProps,
  FavoriteProps,
  CartItem,
  ProductContex,
  CartContextData
};
