import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import OrderItem from "../../components/cart/OrderItem";
import { FlatList } from "react-native-gesture-handler";
import { fetchUserOrders } from "../../config/dataServices";
import { getDateFromFireStoreTimeStampObject } from "../../helper/dateTimerHelper";
import { vs } from "react-native-size-matters";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface UserData {
  uid?: string;
}

interface OrderData {
  id: string;
  totalProductPriceSum: number;
  orderTotal: number;
  createdAt?: { seconds: number };
}

const OrderItemScreen = () => {
  const [orderList, setOrderList] = useState<OrderData[]>([]);
  const { userData } = useSelector((state: RootState) => state.UserSlice);
  const userId = (userData as UserData | null)?.uid;

  const getOrders = async () => {
    const response = await fetchUserOrders(userId);
    setOrderList(response);
  };

  useEffect(() => {
    if (!userId) {
      setOrderList([]);
      return;
    }

    getOrders();
  }, [userId]);

  return (
    <View>
      <FlatList
        data={orderList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <OrderItem
            totalAmount={item.totalProductPriceSum}
            totalPrice={item.orderTotal}
            date={
              item.createdAt
                ? getDateFromFireStoreTimeStampObject(item.createdAt)
                : "-"
            }
          />
        )}
        contentContainerStyle={{
          paddingBottom: vs(50),
        }}
      />
    </View>
  );
};

export default OrderItemScreen;

const styles = StyleSheet.create({});
