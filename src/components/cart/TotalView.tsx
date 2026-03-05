import { StyleSheet, View } from "react-native";
import React, { FC } from "react";
import { s, vs } from "react-native-size-matters";
import AppText from "../texts/AppText";
import { Taxes, ShippingFees } from "../../constants/constants";

import { AppColors } from "../../styles/colors";

interface TotalViewProps {
  itemPrice: number;
  orderTotal: number;
}

const TotalView: FC<TotalViewProps> = ({ itemPrice, orderTotal }) => {
  return (
    <View>
      <View style={styles.row}>
        <AppText style={styles.itemTitle}>Item Price</AppText>
        <AppText style={styles.itemPrice}>${itemPrice}</AppText>
      </View>
      <View style={styles.row}>
        <AppText style={styles.itemTitle}>Taxes</AppText>
        <AppText style={styles.itemPrice}>${Taxes}</AppText>
      </View>
      <View style={styles.row}>
        <AppText style={styles.itemTitle}>Shipping Fees</AppText>
        <AppText style={styles.itemPrice}>${ShippingFees}</AppText>
      </View>

      <View style={styles.separator} />

      <View style={styles.row}>
        <AppText style={styles.itemTitle}>Order Total </AppText>
        <AppText style={styles.itemPrice}>${orderTotal}</AppText>
      </View>
    </View>
  );
};

export default TotalView;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: vs(10),
    paddingHorizontal: s(7),
  },
  itemTitle: {
    fontSize: s(16),
    flex: 1,
  },
  itemPrice: {
    fontSize: s(16),
    color: AppColors.primary,
  },
  separator: {
    height: vs(1),
    width: "100%",
    backgroundColor: AppColors.blueGray,
    marginVertical: vs(4),
  },
});
