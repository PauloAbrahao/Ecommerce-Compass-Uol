import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/config/routes/index";
import ProductScreen from "./src/screens/Item_Screen/item_screen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ItemScreen" component={ProductScreen} options={{ headerTintColor: '#D78F3C', headerStyle: { backgroundColor: '#2D2D2D' } }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

