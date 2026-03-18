import { StyleSheet, Image, View } from "react-native";
import React from "react";
import { AppColors } from "../../styles/colors";
import { IMAGES } from "../../constants/images-paths";
import { s, vs } from "react-native-size-matters";
import { StatusBar } from "expo-status-bar";

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        style="light"
        backgroundColor={AppColors.primary}
        translucent={false}
      />
      <Image source={IMAGES.appLogo} style={styles.headerLogo} />
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: AppColors.primary,
    paddingBottom: vs(10),
  },
  headerLogo: {
    width: s(40),
    height: vs(40),
    tintColor: AppColors.white,
  },
});
