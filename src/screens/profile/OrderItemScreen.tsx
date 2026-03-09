import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import OrderItem from "../../components/cart/OrderItem";
import { FlatList } from "react-native-gesture-handler";
import { fetchUserOrders } from "../../config/dataServices";
import { getDateFromFireStoreTimeStampObject } from "../../helper/dateTimerHelper";

const OrderItemScreen = () => {
  const orderData = [
    {
      id: 1,
      date: "2025-01-01",
      totalAmount: 120.5,
      totalPrice: "$150",
    },
    {
      id: 2,
      date: "2025-01-02",
      totalAmount: 75.0,
      totalPrice: "$90",
    },
    {
      id: 3,
      date: "2025-01-03",
      totalAmount: 200.25,
      totalPrice: "$250",
    },
  ];
  const [orderList, setOrderList] = useState([]);

  const getOrders = async () => {
    const response = await fetchUserOrders();
    setOrderList(response);
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <View>
      <FlatList
        data={orderList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <OrderItem
            totalAmount={item.totalProductPriceSum}
            totalPrice={item.orderTotal}
            date={getDateFromFireStoreTimeStampObject(item.createdAt)}
          />
        )}
      />
    </View>
  );
};

export default OrderItemScreen;

const styles = StyleSheet.create({});
