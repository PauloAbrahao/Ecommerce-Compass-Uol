import React from "react";
import {
  StatusBar,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  View,
  Text,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome_Screen from "../../screens/Login/Welcome_Screen";
import SignUp_Screen from "../../screens/SignUp/SignUp_Screen";
import Home from "../../screens/Home/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CustomTabBar from "./customTabBar/index";

import fetchFonts from "../../../assets/fonts/fonts";

const index = () => {
  const [loaded, setLoaded] = React.useState<boolean>(false);

  React.useEffect(() => {
    fetchFonts().then(() => setLoaded(true));
  }, []);

  if (!loaded) {
    return <ActivityIndicator color="#fff" />;
  }

  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const BottomTabsNavigator = () => {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        // tabBar={() => <CustomTabBar />}
        screenOptions={{
          tabBarItemStyle: {
            position: "absolute",
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            backgroundColor: "red",
            // alignItems: "",
            // margin: 0,
            // padding: 0,
          },
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: "Inter-SemiBold",
          },
          tabBarActiveTintColor: "#D78F3C",
          tabBarInactiveTintColor: "#fff",
        }}
      >
        <Tab.Screen
          name="HOME"
          component={Home}
          options={{
            tabBarStyle: {
              backgroundColor: "#282729",

              height: 72,
              paddingTop: 5,
              paddingBottom: 10,
              borderTopWidth: 0,
            },

            tabBarActiveTintColor: "#D78F3C",
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={
                    focused
                      ? require("../../../assets/icons/home_focused.png")
                      : require("../../../assets/icons/home.png")
                  }
                />
              );
            },
          }}
        />

        <Tab.Screen
          name="CART"
          component={Home}
          options={{
            // tabBarStyle: {
            //   backgroundColor: "#282729",
            //   width: "100%",
            //   height: 72,
            //   paddingTop: 5,
            //   paddingBottom: 10,
            //   borderTopWidth: 0,
            // },
            tabBarActiveTintColor: "#D78F3C",
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={
                    focused
                      ? require("../../../assets/icons/cart_focused.png")
                      : require("../../../assets/icons/cart.png")
                  }
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator>
          {/* WELCOME SCREEN */}
          <Stack.Screen
            options={{ headerShown: false }}
            name="Welcome_Screen"
            component={Welcome_Screen}
          />

          {/* SIGN UP SCREEN */}
          <Stack.Screen
            options={({ navigation }) => ({
              headerTitle: "",
              headerStyle: {
                backgroundColor: "#282729",
                shadowColor: "transparent",
              },
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.goBack();
                  }}
                >
                  <Image
                    source={require("../../../assets/icons/arrow.png")}
                    style={{
                      width: 30,
                      height: 30,
                      marginLeft: 30,
                      marginTop: 40,
                    }}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              ),
              headerBackTitleVisible: false,
            })}
            name="SignUp_Screen"
            component={SignUp_Screen}
          />

          {/* HOME SCREEN */}
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={BottomTabsNavigator}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default index;
