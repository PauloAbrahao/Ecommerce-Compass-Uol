import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "./src/config/routes/StackNavigator/index";
import { AppProvider } from "./src/context/index";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <AppProvider>
          <AppRoutes />
        </AppProvider>
      </NavigationContainer>
    </>
  );
}

