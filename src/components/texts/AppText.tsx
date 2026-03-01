import { StyleSheet, Text, TextStyle, TextProps } from "react-native";
import React, { ReactNode, FC } from "react";
import { s } from "react-native-size-matters";

interface AppTextProps extends TextProps {
  children: ReactNode;
  style?: TextStyle | TextStyle[];
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
    color: "black",
  },
  medium: {
    fontSize: s(16),
    color: "black",
  },
});
