import { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import {
  useRoute,
  useNavigation,
  NavigationProp,
} from "@react-navigation/native";

import styles from "./style";
import { link_images } from "../../../components/Input/LinkImages";

interface CustomTabBarProps {
  text: string;
  icon: string;
}

const index: React.FC<CustomTabBarProps> = ({ text, icon }) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const ActualPage = useRoute();
  const navigation = useNavigation();

  // CALL THE FUNCTION TO SET THE PATH TO THE CORRECT IMAGE
  const path = link_images(icon);

  console.log("ActualPage: ", ActualPage.name);

  const onPress = () => {
    if (!isFocused) {
      navigation.navigate("Home");
    }
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.tab_container} onPress={onPress}>
          <View style={styles.tab_content}>
            <Image source={path} />
            <Text style={isFocused ? styles.focused : styles.text}>{text}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default index;
