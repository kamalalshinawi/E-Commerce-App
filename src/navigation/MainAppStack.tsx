import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./AuthStack";
import MainAppBottomTab from "./MainAppBottomTab";
import CheckOutScreen from "../screens/cart/CheckOutScreen";
import OrderItemScreen from "../screens/profile/OrderItemScreen";

const Stack = createStackNavigator();

const MainAppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="MainAppBottomTab" component={MainAppBottomTab} />
      <Stack.Screen options={{headerShown:true}} name="CheckOutScreen" component={CheckOutScreen} ></Stack.Screen>
      <Stack.Screen options={{headerShown:true}} name="OrderItem" component={OrderItemScreen} />
    </Stack.Navigator>
  );
};

export default MainAppStack;
