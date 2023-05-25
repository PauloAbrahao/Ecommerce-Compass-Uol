import React from "react";
import { Image } from "react-native";


import Cart from "../../../screens/Cart";
import Home from "../../../screens/Home/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CustomTabBar from "../customTabBar/index";

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#282729",
          height: 70,
          borderTopWidth: 0,
          justifyContent: "space-between",
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
                  ? require("../../../../assets/icons/home_focused.png")
                  : require("../../../../assets/icons/home.png")
              }
            />
          ),
        }}
      />

      <Tab.Screen
        name="CART"
        component={Cart}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../../../../assets/icons/cart_focused.png")
                  : require("../../../../assets/icons/cart.png")
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;
