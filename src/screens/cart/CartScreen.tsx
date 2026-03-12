import { StyleSheet, View } from "react-native";
import React from "react";
import AppSafeView from "../../components/views/AppSafeView";
import HomeHeader from "../../components/headers/HomeHeader";
import EmptyCart from "./EmptyCart";
import CartItem from "../../components/cart/CartItem";
import TotalView from "../../components/cart/TotalView";
import { FlatList } from "react-native-gesture-handler";

import { s, vs } from "react-native-size-matters";
import AppButton from "../../components/buttons/AppButton";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  addItemToCart,
  deleteItemFromCart,
  deleteProductFromCart,
} from "../../store/reducers/CartSlice";
import { ShippingFees, Taxes } from "../../constants/constants";
import { useTranslation } from "react-i18next";

const CartScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<any>();
  const { items } = useSelector((state: RootState) => state.cartSlice);
  const dispatch = useDispatch();
  const sumTotalItemsPrice = items.reduce((acc, item) => (acc += item.sum), 0);
  const orderTotal = sumTotalItemsPrice + Taxes + ShippingFees;

  return (
    <AppSafeView>
      <HomeHeader />

      {items.length > 0 ? (
        <View style={{ paddingHorizontal: s(5), flex: 1 }}>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
              return (
                <CartItem
                  {...item}
                  price={item.sum}
                  onPressMinus={() => dispatch(deleteItemFromCart(item))}
                  onPressDelete={() => dispatch(deleteProductFromCart(item))}
                  onPressPlus={() => dispatch(addItemToCart(item))}
                />
              );
            }}
            showsVerticalScrollIndicator={false}
          />

          <TotalView itemPrice={sumTotalItemsPrice} orderTotal={orderTotal} />
          <AppButton
            title={t("common.continue")}
            style={styles.button}
            onPress={() => navigation.navigate("CheckOutScreen")}
          />
        </View>
      ) : (
        <EmptyCart />
      )}
    </AppSafeView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  button: {
    width: "95%",
    marginBottom:vs(-20),
  },
});
