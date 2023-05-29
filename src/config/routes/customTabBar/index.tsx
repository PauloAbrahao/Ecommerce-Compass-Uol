import React, { ReactElement, ReactNode } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs/src/types";
import { icons } from "../../../../assets/icons";
import styles from "./style";


const index: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.content}>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            let tabBarIconImage: ImageSourcePropType = icons.home;

            const tabBarIconComponent: ReactNode =
              options.tabBarIcon &&
              options.tabBarIcon({ focused: true, color: "", size: 0 });

            if (React.Children.count(tabBarIconComponent) === 1) {
              const iconElement = React.Children.only(
                tabBarIconComponent
              ) as ReactElement;
              tabBarIconImage = iconElement.props.source;
            }

            const isFocused: boolean = state.index === index;

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
                    source={tabBarIconImage}
                    resizeMode="contain"
                    style={{
                      width: 30,
                      height: 30,
                      tintColor: isFocused ? "#D78F3C" : "#fff",
                    }}
                  />

                  <Text style={isFocused ? styles.focused : styles.text}>
                    {route.name}
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
