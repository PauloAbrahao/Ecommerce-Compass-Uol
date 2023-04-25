import { StatusBar, StyleSheet } from "react-native";
import Welcome_Screen from "./src/screens/Login/Welcome_Screen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp_Screen from "./src/screens/SignUp/SignUp_Screen";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <>
      <StatusBar barStyle="light-content"/>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Welcome_Screen"
            component={Welcome_Screen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="SignUp_Screen"
            component={SignUp_Screen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
