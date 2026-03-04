import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { s, vs } from "react-native-size-matters";
import { AppColors } from "../../styles/colors";
import { Ionicons } from "@expo/vector-icons";
import { AppFonts } from "../../styles/fonts";
import { commonStyles } from "../../styles/sharedStyles";

interface IProductCardProps {
  onPress: () => void;
  ImageUrl: string;
  title: string;
  price: number;
}

const ProductCard: FC<IProductCardProps> = ({
  onPress,
  ImageUrl,
  title,
  price,
}) => {
  return (
    <View style={styles.container}>
      {/* Add Cart Button */}
      <TouchableOpacity style={styles.addCartButton} onPress={onPress}>
        <Ionicons name="cart" size={s(15)} color={AppColors.white} />
      </TouchableOpacity>
      {/* Image Product */}
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: ImageUrl,
          }}
        />
      </View>

      {/* Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price} $</Text>
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
    ...commonStyles.shadow,
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
  addCartButton: {
    height: s(28),
    width: s(28),
    borderRadius: s(14),
    backgroundColor: AppColors.primary,
    position: "absolute",
    top: vs(5),
    left: s(5),
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
});
