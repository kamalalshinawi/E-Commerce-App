import { StyleSheet, View } from "react-native";
import React from "react";
import AppSafeView from "../../components/views/AppSafeView";
import HomeHeader from "../../components/headers/HomeHeader";
import EmptyCart from "./EmptyCart";
import CartItem from "../../components/cart/CartItem";
import TotalView from "../../components/cart/TotalView";
import { FlatList } from "react-native-gesture-handler";
import { products } from "../../data/products";

import { s } from "react-native-size-matters";
import AppButton from "../../components/buttons/AppButton";

const CartScreen = () => {
  return (
    <AppSafeView>
      <HomeHeader />
      {/* <EmptyCart /> */}
      <View style={{ paddingHorizontal: s(5), flex: 1 }}>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return <CartItem {...item} />;
          }}
          showsVerticalScrollIndicator={false}
        />

        <TotalView itemPrice={500} orderTotal={9000} />
              <AppButton title="Continue" style={styles.button} />

      </View>
    </AppSafeView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  button: {
    width: "95%",
  },
});
