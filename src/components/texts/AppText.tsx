import { StyleSheet, Text, TextStyle, TextProps,StyleProp } from "react-native";
import React, { ReactNode, FC } from "react";
import { s } from "react-native-size-matters";
import { AppColors } from "../../styles/colors";
import { AppFonts } from "../../styles/fonts";


interface AppTextProps extends TextProps {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
  variant?: "medium" | "bold";
}

const AppText: FC<AppTextProps> = ({
  children,
  style,
  variant = "medium",
  ...rest
}) => {
  return (
    <Text {...rest} style={[styles[variant], style]}>
      {children}
    </Text>
  );
};

export default AppText;

const styles = StyleSheet.create({
  bold: {
    fontSize: s(18),
    color: AppColors.black,
    fontFamily: AppFonts.Bold,
  },
  medium: {
    fontSize: s(16),
    color: AppColors.black,
    fontFamily: AppFonts.Medium,
  },
});
