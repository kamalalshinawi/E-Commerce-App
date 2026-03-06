import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSafeView from "../../components/views/AppSafeView";
import {
  commonStyles,
  SharedPaddingHorizontal,
} from "../../styles/sharedStyles";
import { vs, s } from "react-native-size-matters";
import { AppColors } from "../../styles/colors";
import AppTextInput from "../../components/inputs/AppTextInput";
import AppButton from "../../components/buttons/AppButton";
import { isAndroid, isIos } from "../../constants/constants";

const CheckOutScreen = () => {
  return (
    <AppSafeView>
      <View style={{ paddingHorizontal: SharedPaddingHorizontal, flex: 1 }}>
        <View style={styles.inputsContainer}>
          <AppTextInput placeholder="Full Name" />
          <AppTextInput placeholder="Phone number" keyboardType={"numeric"} />
          <AppTextInput placeholder="Address " />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Confirm" />
      </View>
    </AppSafeView>
  );
};

export default CheckOutScreen;

const styles = StyleSheet.create({
  inputsContainer: {
    ...commonStyles.shadow,
    padding: s(12),
    backgroundColor: AppColors.white,
    borderRadius: s(8),
    marginTop: isIos ? vs(10) : vs(-15),
  },
  buttonContainer: {
    paddingHorizontal: SharedPaddingHorizontal,
    position: "absolute",
    bottom: 0,
    borderTopWidth: 1,
    borderColor: AppColors.lightGray,
    width: "100%",
    paddingTop: isAndroid ? vs(14) : 0,
  },
});
