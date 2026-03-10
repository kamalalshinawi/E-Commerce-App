import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import OrderItem from "../../components/cart/OrderItem";
import { FlatList } from "react-native-gesture-handler";
import { fetchUserOrders } from "../../config/dataServices";
import { getDateFromFireStoreTimeStampObject } from "../../helper/dateTimerHelper";

const OrderItemScreen = () => {

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
