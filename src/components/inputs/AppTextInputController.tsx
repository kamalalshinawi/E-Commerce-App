import { StyleSheet } from "react-native";
import React from "react";
import { Controller } from "react-hook-form";
import AppTextInput from "./AppTextInput";
import { AppColors } from "../../styles/colors";
import AppText from "../texts/AppText";
import { vs } from "react-native-size-matters";
const AppTextInputController = ({
  control,
  name,
  rules,
  placeholder,
  secureTextEntry,
  KeyboardType,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <AppTextInput
            value={value}
            onChangeText={onChange}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            keyboardType={KeyboardType}
            style={error && styles.errorInput}
          />
          {error && (
            <AppText style={styles.errorMessage}>{error?.message}</AppText>
          )}
        </>
      )}
    />
  );
};

export default AppTextInputController;

const styles = StyleSheet.create({
  errorInput: {
    borderColor: AppColors.Red,
  },
  errorMessage: {
    textAlign: "center",
    color: AppColors.Red,
    marginBottom: vs(10),
    marginTop: vs(-7),
  },
});
