import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "./src/config/routes/StackNavigator/index";
import { AppProvider } from "./src/context/index";
import { FavoritesProvider } from "./src/context/favContext";

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
