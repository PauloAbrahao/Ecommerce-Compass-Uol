import { NavigationContainer } from "@react-navigation/native";
import { AppProvider } from "./src/context/index";
import { FavoritesProvider } from "./src/context/favContext";
import AppRoutes from "./src/config/routes/StackNavigator";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <FavoritesProvider>
          <AppProvider>
            <AppRoutes />
          </AppProvider>
        </FavoritesProvider>
      </NavigationContainer>
    </>
  );
}
