import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/config/routes/StackNavigator/index";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
}
