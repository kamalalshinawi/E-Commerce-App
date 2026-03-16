import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./AuthStack";
import MainAppBottomTab from "./MainAppBottomTab";
import CheckOutScreen from "../screens/cart/CheckOutScreen";
import OrderItemScreen from "../screens/profile/OrderItemScreen";
import { useTranslation } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { getUserData, setLoading } from "../store/reducers/UserSlice";
import { useEffect } from "react";
import { RootState } from "../store/store";
import { ActivityIndicator, View } from "react-native";
import { AppColors } from "../styles/colors";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

const Stack = createStackNavigator();

const MainAppStack = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { userData, isLoading } = useSelector(
    (state: RootState) => state.UserSlice,
  );
  const isUserLogIn = async () => {
    try {
      const storedUserData = await AsyncStorage.getItem("USER_DATA");
      if (storedUserData) {
        dispatch(getUserData(JSON.parse(storedUserData)));
      } else {
        dispatch(setLoading(false));
      }
    } catch (error) {
      // handel error
      dispatch(setLoading(false));
    }
  };
  useEffect(() => {
    isUserLogIn();
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (userData) => {
      if (userData) {
        console.log("User is Sign In");
      } else {
        console.log("User is Signed Out");
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
