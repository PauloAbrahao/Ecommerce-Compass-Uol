import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CustomTabBar from "../customTabBar/index";
import Cart_Screen from "../../../screens/Cart/index";
import Home from "../../../screens/Home";
import { icons } from "../../../../assets/icons";


const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="HOME"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? icons.homeFocused
                  : icons.home
              }
            />
          ),
        }}
      />

      <Tab.Screen
        name="CART"
        component={Cart_Screen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? icons.cartFocused
                  : icons.cart
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;
