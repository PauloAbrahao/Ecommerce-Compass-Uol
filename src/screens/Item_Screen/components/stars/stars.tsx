import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { RenderStarsProps } from '../../../../config/interface'; 

const RenderStars: React.FC<RenderStarsProps> = ({ rate }) => {
  const stars = [];
  const fullStarCount = Math.floor(rate);
  const halfStar = rate % 1 !== 0;

  for (let i = 0; i < fullStarCount; i++) {
    stars.push(
      <FontAwesome
        key={`full-star-${i}`}
        name="star"
        size={28}
        color="#D78F3C"
        style={{ marginRight: 7 }}
      />
    );
  }

  if (halfStar) {
    stars.push(
      <FontAwesome
        key="half-star"
        name="star-half-empty"
        size={28}
        color="#D78F3C"
        style={{ marginRight: 7 }}
      />
    );
  }

  const remainingStars = 5 - Math.ceil(rate);
  for (let i = 0; i < remainingStars; i++) {
    stars.push(
      <Feather
        key={`empty-star-${i}`}
        name="star"
        size={28}
        color="#D78F3C"
        style={{ marginRight: 7 }}
      />
    );
  }

  return <>{stars}</>;
};

export default RenderStars;