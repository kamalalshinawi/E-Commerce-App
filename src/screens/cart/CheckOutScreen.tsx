import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSafeView from "../../components/views/AppSafeView";
import {
  commonStyles,
  SharedPaddingHorizontal,
} from "../../styles/sharedStyles";
import { vs, s } from "react-native-size-matters";
import { AppColors } from "../../styles/colors";
import AppButton from "../../components/buttons/AppButton";
import { isAndroid, isIos } from "../../constants/constants";
import AppTextInputController from "../../components/inputs/AppTextInputController";
import { useForm } from "react-hook-form";

const CheckOutScreen = () => {
  const { control, handleSubmit } = useForm();
  const saveInfo = (formData) => {
    console.log(formData);
  }
  return (
    <AppSafeView>
      <View style={{ paddingHorizontal: SharedPaddingHorizontal, flex: 1 }}>
        <View style={styles.inputsContainer}>
          <AppTextInputController
            control={control}
            name={"Full Name"}
            placeholder="Full Name"
          />
          <AppTextInputController
            control={control}
            name={"Phone Number"}
            placeholder="Phone number"
            KeyboardType={"numeric"}
          />
          <AppTextInputController
            control={control}
            name={"Address"}
            placeholder="Address "
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Confirm" onPress={handleSubmit(saveInfo)} />
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
