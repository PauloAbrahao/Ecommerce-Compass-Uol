import { NavigationContainer } from "@react-navigation/native";
import AddRoutes from "./src/config/routes/StackNavigator";
import { AppProvider } from "./src/context/index";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <AppProvider>
          <AddRoutes />
        </AppProvider>
      </NavigationContainer>
    </>
  );
}

