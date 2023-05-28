import { Image, Pressable } from "react-native";
import React from "react";
import { cardHome, cardDetail } from "./style";

import { icons } from "../../../assets/icons";

export interface FavoriteProps {
  heartIconPress?: () => void;
  favorite?: boolean;
  isDetail?: boolean;
}

const Favorite: React.FC<FavoriteProps> = ({ heartIconPress, favorite, isDetail }) => {
  const style = isDetail ? cardDetail : cardHome;

  return (
    <>
      <Pressable onPress={heartIconPress}>
        <Image
          source={favorite ? icons.heartFavImage : icons.heartImage}
          style={favorite ? style.iconHeartPressed : style.iconHeart}
        />
      </Pressable>
    </>
  );
};

export default Favorite;
