import { StyleSheet, View, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { ReactNode, FC } from "react";
import { AppColors } from "../../styles/colors";


interface AppSafeViewProps {
  children: ReactNode;
  style?: ViewStyle;
}

const AppSafeView: FC<AppSafeViewProps> = ({ children, style }) => {
  return (
    <SafeAreaView style={styles.safeView}>
      <View style={[styles.container, style]}>{children}</View>
    </SafeAreaView>
  );
};

export default AppSafeView;

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: AppColors.white,
    
  },
  container: {
    flex: 1,
  },
});
