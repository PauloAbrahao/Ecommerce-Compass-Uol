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
  price: string;
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

export { CardProps, store, Images, Product, RenderStarsProps };
