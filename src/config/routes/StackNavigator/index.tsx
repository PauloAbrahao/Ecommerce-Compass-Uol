import React from "react";
import {
  StatusBar,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  View,
} from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import Welcome_Screen from "../../../screens/Login/Welcome_Screen";
import SignUp_Screen from "../../../screens/SignUp/SignUp_Screen";
import Details_Screen from "../../../screens/Item_Screen/item_screen";
import Cart from "../../../components/CartComponent";

import fetchFonts from "../../../../assets/fonts/fonts";
import BottomTabsNavigator from "../BottomTabNavigator";

const index = () => {
  const [loaded, setLoaded] = React.useState<boolean>(false);

  React.useEffect(() => {
    fetchFonts().then(() => setLoaded(true));
  }, []);

  if (!loaded) {
    return <ActivityIndicator color="#fff" />;
  }

  const Stack = createStackNavigator();

  return (
    <>
      <StatusBar barStyle="light-content" />

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
                  source={require("../../../../assets/icons/arrow.png")}
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

        {/* DETAILS SCREEN */}
        <Stack.Screen
          name="Details_Screen"
          component={Details_Screen as never}
          options={({ navigation }) => ({
            headerTitle: "",
            headerStyle: {
              backgroundColor: "#282729",
              shadowColor: "transparent",
            },
            headerRight: () => (
              <View style={{ marginTop: 55, marginRight: 30 }}>
                <Cart />
              </View>
            ),

            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <Image
                  source={require("../../../../assets/icons/arrow.png")}
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
        />

        {/* BOTTOM TAB NAVIGATOR */}
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={BottomTabsNavigator}
        />
      </Stack.Navigator>
    </>
  );
};

export default index;
