import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartScreen from "../screens/cart/CartScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import HomeScreen from "../screens/home/HomeScreen";
import { AppColors } from "../styles/colors";
import {s,vs} from "react-native-size-matters";
import AntDesign from '@expo/vector-icons/AntDesign';
import Octicons from '@expo/vector-icons/Octicons';
const Tab = createBottomTabNavigator();

const MainAppBottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: AppColors.primary,
        tabBarInactiveTintColor: AppColors.disabledGray,
        tabBarLabelStyle:{
          fontSize:s(12),
          marginTop: vs(4)
        }
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} 
      options={{
        tabBarIcon: ({color,size})=>(
          <AntDesign name="home" size={24} color={color} />
        ),
        title: "Home"
      }}
      
      />
      <Tab.Screen name="Cart" component={CartScreen} 
      options={{
        tabBarIcon: ({color,size}) => (
          <AntDesign name="shopping-cart" size={size} color={color} />
        ),
        title: "Cart"
      }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} 
      options={{
        tabBarIcon: ({color,size}) => (
          <Octicons name="person" size={size} color={color} />
        ),
        title: "Profile"
      }}
      />
    </Tab.Navigator>
  );
};

export default MainAppBottomTab;
