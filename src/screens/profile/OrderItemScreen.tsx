import { StyleSheet, Text, View } from "react-native";
import React from "react";
import OrderItem from "../../components/cart/OrderItem";
import { FlatList } from "react-native-gesture-handler";

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
  return (
    <View>
      <FlatList
        data={orderData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <OrderItem
            totalAmount={item.totalAmount}
            totalPrice={item.totalPrice}
            date={item.date}
          />
        )}
      />
    </View>
  );
};

export default OrderItemScreen;

const styles = StyleSheet.create({});
