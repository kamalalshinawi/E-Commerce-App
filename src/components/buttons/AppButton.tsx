import {
  StyleSheet,
  StyleProp,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  TextStyleAndroid,
} from "react-native";
import React, { FC } from "react";
import { s, vs } from "react-native-size-matters";
import AppText from "../texts/AppText";
import { AppColors } from "../../styles/colors";

interface AppButtonProps {
  onPress: () => void;
  backgroundColor?: string;
  backgroundOpacity?: string;
  disabled?: boolean;
  title: string;
  style?: ViewStyle | ViewStyle[];

  styleTitle?: StyleProp<TextStyle> ;
}

const AppButton: FC<AppButtonProps> = ({
  onPress,
  title,
  backgroundColor = AppColors.white,
  backgroundOpacity = AppColors.black,
  disabled = false,
  style,
  styleTitle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[styles.button, { backgroundColor: disabled ?AppColors.disabledGray :backgroundOpacity }, style]}
      disabled={disabled}
    >
      <AppText
        variant="bold"
        style={[styles.textTitle, { color: backgroundColor }, styleTitle]}
      >
        {title}
      </AppText>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: vs(40),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: s(8),
    alignSelf: "center",
  },
  textTitle: {
    fontSize: s(16),
  },
});
