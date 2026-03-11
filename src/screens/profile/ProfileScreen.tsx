import { StyleSheet } from "react-native";
import React from "react";
import AppSafeView from "../../components/views/AppSafeView";
import HomeHeader from "../../components/headers/HomeHeader";
import ProfileSectionButton from "../../components/buttons/ProfileSectionButton";
import { useNavigation } from "@react-navigation/native";
import { SheetManager } from "react-native-actions-sheet"
import LanguageBottomSheet from "../../components/language/LanguageBottomSheet";

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <AppSafeView>
      <HomeHeader />
      <ProfileSectionButton
        title="My Orders"
        onPress={() => navigation.navigate("OrderItem")}
      />
      <ProfileSectionButton title="Language" onPress={() => SheetManager.show("LANG_SHEET")}  />
        <LanguageBottomSheet />
      <ProfileSectionButton title="Logout" />
    </AppSafeView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
