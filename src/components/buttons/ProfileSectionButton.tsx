import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { FC } from "react";
import { AppColors } from "../../styles/colors";
import AppText from "../texts/AppText";
import { s, vs } from "react-native-size-matters";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { AppFonts } from "../../styles/fonts";

interface ProfileSectionButtonProps {
  onPress?: () => void;
  title: string;
}

const ProfileSectionButton: FC<ProfileSectionButtonProps> = ({
  onPress,
  title,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.textContainer}>
        <AppText style={styles.text}>{title}</AppText>
      </View>
      <View>
        <MaterialIcons name="arrow-forward-ios" size={s(24)} color={AppColors.primary} />
      </View>
    </TouchableOpacity>
  );
};

export default ProfileSectionButton;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderBottomWidth: 1,
    borderColor: AppColors.lightGray,
    paddingBottom: vs(10),
    marginTop: vs(12),
    flexDirection: "row",
  },
  textContainer: {
    marginHorizontal: s(12),
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flex: 5,
  },
  text:{
    color:AppColors.primary,
    fontSize:s(16),
    fontFamily:AppFonts.Medium,
  }
});
