import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "./src/config/routes/StackNavigator/index";
import { AppProvider } from "./src/context/index";
import ProductScreen from "./src/screens/Item_Screen/item_screen";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <AppProvider>
          <ProductScreen />
        </AppProvider>
      </NavigationContainer>
    </>
  );
}

