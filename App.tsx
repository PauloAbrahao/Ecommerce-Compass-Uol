import { StatusBar, StyleSheet, Image, TouchableOpacity } from "react-native";
import Welcome_Screen from "./src/screens/Login/Welcome_Screen";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp_Screen from "./src/screens/SignUp/SignUp_Screen";

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
              // headerShown: false,
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
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
