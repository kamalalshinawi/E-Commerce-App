import { StyleSheet } from "react-native";
import React from "react";
import AppSafeView from "../../components/views/AppSafeView";
import HomeHeader from "../../components/headers/HomeHeader";
import ProfileSectionButton from "../../components/buttons/ProfileSectionButton";
import { useNavigation } from "@react-navigation/native";
import { SheetManager } from "react-native-actions-sheet";
import LanguageBottomSheet from "../../components/language/LanguageBottomSheet";
import { useTranslation } from "react-i18next";

const ProfileScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<any>();
  return (
    <AppSafeView>
      <HomeHeader />
      <ProfileSectionButton
        title={t("profile.myOrders")}
        onPress={() => navigation.navigate("OrderItem")}
      />
      <ProfileSectionButton
        title={t("common.language")}
        onPress={() => SheetManager.show("LANG_SHEET")}
      />
      <LanguageBottomSheet />
      <ProfileSectionButton title={t("common.logout")} />
    </AppSafeView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
