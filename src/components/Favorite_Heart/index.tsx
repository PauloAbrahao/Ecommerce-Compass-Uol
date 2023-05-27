import React from "react";
import { Product } from "../../config/interface";

export const handleToggleHeart = (product: Product | null, setProduct: React.Dispatch<React.SetStateAction<Product | null>>) => {
  if (product) {
    const updatedHeart = product.heart === 0 ? 1 : 0;
    setProduct({ ...product, heart: updatedHeart });
  }
};