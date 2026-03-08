import { StyleSheet} from "react-native";
import React, { useEffect, useState } from "react";
import HomeHeader from "../../components/headers/HomeHeader";
import AppSafeView from "../../components/views/AppSafeView";
import ProductCard from "../../components/cards/ProductCard";
import { FlatList } from "react-native-gesture-handler";
import { s, vs } from "react-native-size-matters";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/reducers/CartSlice";
import { getProductsData } from "../../config/dataServices";
const HomeScreen = () => {
  const dispatch = useDispatch();
  const [Products, setData] = useState([]);

  const fetchData = async () => {
    const data = await getProductsData();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppSafeView>
      <HomeHeader />
      <FlatList
        data={Products}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <ProductCard
            ImageUrl={item.imageURL}
            title={item.title}
            price={item.price}
            onAddToCartPress={() => {
              dispatch(addItemToCart(item));
            }}
          />
        )}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: vs(14),
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
