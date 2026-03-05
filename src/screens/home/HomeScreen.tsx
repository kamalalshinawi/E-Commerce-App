import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HomeHeader from "../../components/headers/HomeHeader";
import AppSafeView from "../../components/views/AppSafeView";
import ProductCard from "../../components/cards/ProductCard";
import { FlatList } from "react-native-gesture-handler";
import { products } from "../../data/products";
import { s, vs } from "react-native-size-matters";
const HomeScreen = () => {
  return (
    <AppSafeView>
      <HomeHeader />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <ProductCard
            ImageUrl={item.imageURL}
            title={item.title}
            price={item.price}
            onAddToCartPress={() => {}}
          />
        )}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: vs(14),
          // paddingHorizontal:s(10),
        }}
        contentContainerStyle={{
          paddingHorizontal: s(10),
          paddingTop: vs(15),
        }}
      />
    </AppSafeView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
