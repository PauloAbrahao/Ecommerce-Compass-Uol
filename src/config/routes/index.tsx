import React from "react";
import {
  StatusBar,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome_Screen from "../../screens/Login/Welcome_Screen";
import SignUp_Screen from "../../screens/SignUp/SignUp_Screen";
import Home from "../../screens/Home/Home";

import fetchFonts from "../../../assets/fonts/fonts";

const index = () => {
  const [loaded, setLoaded] = React.useState(false);

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
            component={Home}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default index;
