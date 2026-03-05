import { StyleSheet, Image, View, Pressable } from "react-native";
import React, { FC } from "react";
import { s, vs } from "react-native-size-matters";
import AppText from "../texts/AppText";
import { AppFonts } from "../../styles/fonts";
import { AppColors } from "../../styles/colors";
import { AntDesign, Entypo } from "@expo/vector-icons";

interface CartItemProps {
  title: string;
  price: string | number;
  imageUrl: string;
  qty: number;
  onPressPlus: () => void;
  onPressMinus: () => void;
  onPressDelete: () => void;
}

const CartItem: FC<CartItemProps> = ({
  title,
  price,
  imageUrl,
  qty,
  onPressPlus,
  onPressMinus,
  onPressDelete,
}) => {
  return (
    <View style={styles.container}>
      {/* Image container */}
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: imageUrl,
          }}
          style={styles.image}
        />
      </View>

      {/* Details Containers */}
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.price}>${price}</AppText>
        <View style={styles.qtyContainer}>
          <Pressable style={styles.iconButton} onPress={onPressPlus}>
            <Entypo name="plus" size={s(12)} color={AppColors.primary} />
          </Pressable>
          <AppText style={styles.qtText}>{qty}</AppText>
          <Pressable style={styles.iconButton} onPress={onPressMinus}>
            <Entypo name="minus" size={s(12)} color={AppColors.primary} />
          </Pressable>
        </View>
      </View>

      {/* Delete Button Container */}
      <View style={styles.deleteContainer}>
        <Pressable style={styles.delButton} onPress={onPressDelete}>
          <AntDesign name="delete" size={s(17)} color={AppColors.Red} />
          <AppText style={styles.delText}>Delete</AppText>
        </Pressable>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    borderWidth: 1,
    paddingBottom: vs(4),
    borderColor: AppColors.blueGray,
  },
  imageContainer: {
    flex: 1.5,
    // backgroundColor:"red",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: vs(80),
    width: s(80),
    borderRadius: s(5),
  },

  detailsContainer: {
    flex: 3.5,
    // backgroundColor:"blue",
  },

  deleteContainer: {
    flex: 1.2,
    // backgroundColor: "green",
    justifyContent: "flex-end",
    paddingEnd: vs(10),
    paddingBottom: vs(5),
  },
  title: {
    fontSize: s(15),
    fontFamily: AppFonts.Medium,
    color: AppColors.primary,
    marginTop: vs(5),
  },
  price: {
    fontSize: s(15),
    fontFamily: AppFonts.Bold,
    color: AppColors.primary,
    marginTop: vs(5),
  },
  delText: {
    fontSize: s(12),
    fontFamily: AppFonts.Medium,
    marginLeft: s(7),
    marginTop: vs(3),
    color: AppColors.medGray,
  },
  delButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  qtyContainer: {
    width: s(80),
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: AppColors.blueGray,
    borderRadius: s(30),
    flexDirection: "row",
    paddingVertical: vs(5),
    paddingHorizontal: s(5),
    marginTop: vs(10),
  },
  iconButton: {
    height: vs(20),
    width: s(20),
    borderRadius: s(10),
    backgroundColor: AppColors.lightGray,
    alignItems: "center",
    justifyContent: "center",
  },
  qtText: {
    flex: 1,
    fontSize: s(12),
    fontFamily: AppFonts.Bold,
    color: AppColors.primary,
    textAlign: "center",
  },
});
