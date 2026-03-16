import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./AuthStack";
import MainAppBottomTab from "./MainAppBottomTab";
import CheckOutScreen from "../screens/cart/CheckOutScreen";
import OrderItemScreen from "../screens/profile/OrderItemScreen";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { AppColors } from "../styles/colors";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

const Stack = createStackNavigator();

const MainAppStack = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userData, setUserData] = useState<object | null>(null);
  useEffect(() => {
    onAuthStateChanged(auth, (userDataFromFireBase) => {
      if (userDataFromFireBase) {
        console.log("User is Sign In");
        setIsLoading(false);
        setUserData(userDataFromFireBase);
      } else {
        console.log("User is Signed Out");
        setIsLoading(false);
      }
    });
  }, []);

  if (isLoading) {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <ActivityIndicator size={"large"} color={AppColors.primary} />
      </View>
    );
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={userData ? "MainAppBottomTab" : "AuthStack"}
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
