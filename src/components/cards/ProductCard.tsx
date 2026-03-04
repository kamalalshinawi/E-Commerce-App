import { StyleSheet, Image, View, Text } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import { AppColors } from "../../styles/colors";
import App from "../../../App";
import { AppFonts } from "../../styles/fonts";

const ProductCard = () => {
  return (
    <View style={styles.container}>
      {/* Image Product */}
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ABYbwEJlt2zHvi_qsMwYgicq-2oTNuvobg&s",
          }}
        />
      </View>

      {/* Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Iphone-17</Text>
        <Text style={styles.price}>1000 $</Text>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    width: s(160),
    height: vs(190),
    backgroundColor: AppColors.white,
    borderRadius: s(10),
    borderWidth: 1,
  },
  imageContainer: {
    height: vs(130),
    width: "100%",
    borderTopLeftRadius: s(10),
    borderTopRightRadius: s(10),
  },
  imageStyle: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  detailsContainer: {
    flex: 1,
    paddingTop: vs(8),
    paddingHorizontal: s(10),
    paddingBottom: vs(15),
  },
  title: {
    fontSize: s(14),
    fontFamily: AppFonts.Medium,
    color: AppColors.primary,
  },
  price: {
    fontSize: s(14),
    fontFamily: AppFonts.Bold,
    color: AppColors.primary,
  },
});
