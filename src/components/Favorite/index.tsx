import React from "react";
import { Image, Pressable } from "react-native";
import { cardHome, cardDetail } from "./style";
import { FavoriteProps } from "../../config/interface";
import { icons } from "../../../assets/icons";



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
