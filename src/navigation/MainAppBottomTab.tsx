import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartScreen from "../screens/cart/CartScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import HomeScreen from "../screens/home/HomeScreen";
import { AppColors } from "../styles/colors";
import { s, vs } from "react-native-size-matters";
import AntDesign from "@expo/vector-icons/AntDesign";
import Octicons from "@expo/vector-icons/Octicons";
import { useTranslation } from "react-i18next";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
const Tab = createBottomTabNavigator();

const MainAppBottomTab = () => {
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const safeBottomInset = Math.min(insets.bottom, vs(14));
  const bottomPadding = safeBottomInset > 0 ? safeBottomInset : vs(4);

  return (
    <Tab.Navigator
      safeAreaInsets={{ bottom: 0 }}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: AppColors.primary,
        tabBarInactiveTintColor: AppColors.medGray,
        tabBarHideOnKeyboard: true,
        sceneStyle: {
          backgroundColor: AppColors.white,
        },
        tabBarStyle: {
          backgroundColor: AppColors.white,
          borderTopColor: AppColors.borderColor,
          borderTopWidth: StyleSheet.hairlineWidth,
          height: vs(54) + bottomPadding,
          paddingTop: vs(5),
          paddingBottom: bottomPadding,
        },
        tabBarItemStyle: {
          paddingVertical: vs(2),
        },
        tabBarLabelStyle: {
          fontSize: s(12),
          marginTop: vs(2),
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />,
          title: t("common.home"),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="shopping-cart" size={size} color={color} />
          ),
          title: t("common.cart"),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons name="person" size={size} color={color} />
          ),
          title: t("common.profile"),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainAppBottomTab;
