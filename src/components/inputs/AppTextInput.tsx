import {
  StyleSheet,
  Text,
  View,
  TextInput,
  StyleProp,
  TextStyle,
} from "react-native";
import { s, vs } from "react-native-size-matters";
import React, { FC } from "react";
import { AppColors } from "../../styles/colors";

interface AppTextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  style?: StyleProp<TextStyle>;
}

const AppTextInput: FC<AppTextInputProps> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
  style,
}) => {
  return (
    <TextInput
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      style={[styles.input, style]}
    ></TextInput>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: vs(40),
    borderRadius: s(25),
    borderWidth: 1,
    borderColor: AppColors.borderColor,
    paddingHorizontal: s(15),
    fontSize: s(14),
    backgroundColor: AppColors.white,
    marginBottom: vs(10),
  },
});
