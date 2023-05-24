import { View, Text, Image, TouchableOpacity } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs/src/types";
import { useRoute } from "@react-navigation/native";

import styles from "./style";

interface CustomTabBarProps extends BottomTabBarProps {
  focused: boolean;
  color: string;
  size: number;
}

const index: React.FC<CustomTabBarProps> = ({
  state,
  descriptors,
  navigation,
  focused,
  color,
  size,
}) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.content}>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];

            const ActualPage = useRoute();

            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            return (
              <TouchableOpacity
                key={route.key}
                onPress={onPress}
                style={styles.tab_container}
              >
                <View style={styles.tab_content}>
                  <Image
                    source={require("../../../../assets/icons/home.png")}
                  />
                  <Text style={isFocused ? styles.focused : styles.text}>
                    {isFocused && ActualPage.name === "Home" ? "HOME" : "CART"}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </>
  );
};

export default index;
