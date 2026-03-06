import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSafeView from "../../components/views/AppSafeView";
import HomeHeader from "../../components/headers/HomeHeader";
import ProfileSectionButton from "../../components/buttons/ProfileSectionButton";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <AppSafeView>
      <HomeHeader />
      <ProfileSectionButton
        title="My Orders"
        onPress={() => navigation.navigate("OrderItem")}
      />
      <ProfileSectionButton title="Language" />
      <ProfileSectionButton title="Logout" />
    </AppSafeView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
