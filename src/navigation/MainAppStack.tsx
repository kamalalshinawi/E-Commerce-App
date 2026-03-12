import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./AuthStack";
import MainAppBottomTab from "./MainAppBottomTab";
import CheckOutScreen from "../screens/cart/CheckOutScreen";
import OrderItemScreen from "../screens/profile/OrderItemScreen";
import { useTranslation } from "react-i18next";

const Stack = createStackNavigator();

const MainAppStack = () => {
  const { t } = useTranslation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="MainAppBottomTab" component={MainAppBottomTab} />
      <Stack.Screen
        options={{ headerShown: true, title: t("screens.checkout") }}
        name="CheckOutScreen"
        component={CheckOutScreen}
      ></Stack.Screen>
      <Stack.Screen
        options={{ headerShown: true, title: t("screens.orders") }}
        name="OrderItem"
        component={OrderItemScreen}
      />
    </Stack.Navigator>
  );
};

export default MainAppStack;
