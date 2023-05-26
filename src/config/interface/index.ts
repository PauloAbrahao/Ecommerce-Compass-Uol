interface CardProps {
  image: string;
  title: string;
  price: string;
  onPress?: () => void;
  isCart: boolean;
  heartIconPress?: () => void;
  favorite?: boolean;
  removeButtonPress?: () => void;
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
