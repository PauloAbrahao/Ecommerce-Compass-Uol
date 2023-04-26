import { StatusBar, StyleSheet, Image, TouchableOpacity } from "react-native";
import Welcome_Screen from "./src/screens/Login/Welcome_Screen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp_Screen from "./src/screens/SignUp/SignUp_Screen";
import Home from "./src/screens/Home/Home";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Welcome_Screen"
            component={Welcome_Screen}
          />
          <Stack.Screen
            options={({ navigation }) => ({
              headerTitle: "",
              headerStyle: {
                backgroundColor: "#2D2D2D",
                shadowColor: "transparent",
              },
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.goBack();
                  }}
                >
                  <Image
                    source={require("./assets/icons/arrow.png")}
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
          <Stack.Screen
            options={{
              // headerShown: false,
              headerTitle: "HOME",
              headerTitleStyle: {
                marginLeft: 5,
                marginTop: 10,
                fontSize: 20,
                fontWeight: "500",
              },
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: "#2D2D2D",
                shadowColor: "transparent",
              },
              headerTintColor: "#D78F3C",
              headerLeft: () => null,
            }}
            name="Home"
            component={Home}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
