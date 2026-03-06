import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { s, vs } from "react-native-size-matters";
import {
  commonStyles,
  SharedPaddingHorizontal,
} from "../../styles/sharedStyles";
import { AppColors } from "../../styles/colors";
import AppText from "../texts/AppText";
import { AppFonts } from "../../styles/fonts";

interface orderItemProps {
  totalAmount: number | string;
  totalPrice: number | string;
  date: string;
}

const OrderItem: FC<orderItemProps> = ({ totalAmount, totalPrice, date }) => {
  return (
    <View style={styles.container}>
      <View style={{ height: vs(120) }}>
        <View style={styles.textContainer}>
          <AppText style={styles.title}>Order Details:</AppText>
          <View style={styles.sep} />
        </View>
        <View style={styles.desContainer}>
          <AppText style={styles.price}>Total Price : ${totalAmount}</AppText>
          <AppText style={styles.numbText}>{totalPrice}</AppText>
        </View>
        <View style={styles.desContainer}>
          <AppText style={styles.price}>Date: {date} </AppText>
          <AppText style={styles.numbText}>{date}</AppText>
        </View>
      </View>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  container: {
    
    ...commonStyles.shadow,
    borderRadius: s(10),
    backgroundColor: AppColors.white,
    paddingHorizontal: SharedPaddingHorizontal,
    marginHorizontal: s(7),
    marginTop: vs(10),
    
  },
  sep: {
    width: "100%",
    borderWidth: 1,
    borderColor: AppColors.primary,
    marginTop: vs(5),
  },
  title: {
    fontFamily: AppFonts.Bold,
    color: AppColors.primary,
  },
  textContainer: {
    paddingTop: vs(9),
  },
  desContainer: {
    flexDirection: "row",
    marginTop: vs(10),
    justifyContent: "space-between",
    
  },
  price: {
    fontFamily: AppFonts.Medium,
    color: AppColors.primary,
  },
  numbText: {
    color: AppColors.Red,
  },
});
