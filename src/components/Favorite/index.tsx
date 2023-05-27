import { Image, Pressable } from "react-native";
import React from "react";
import { cardHome } from "./style";

import { icons } from "../../../assets/icons";

export interface FavoriteProps {
  heartIconPress?: () => void;
  favorite?: boolean;
}

const index = ({ heartIconPress, favorite }: FavoriteProps) => {

  return (
    <>
      <Pressable onPress={heartIconPress}>
        <Image
          source={favorite ? icons.heartFavImage : icons.heartImage}
          style={cardHome.iconHeart}
        />
      </Pressable>
    </>
  );
};

export default index;
