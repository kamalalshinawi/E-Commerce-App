import { StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import AppSafeView from "../../components/views/AppSafeView";
import { SharedPaddingHorizontal } from "../../styles/sharedStyles";
import { IMAGES } from "../../constants/images-paths";
import { s, vs } from "react-native-size-matters";
import AppTextInput from "../../components/inputs/AppTextInput";
import AppText from "../../components/texts/AppText";
import AppButton from "../../components/buttons/AppButton";
import { AppColors } from "../../styles/colors";

const SignInScreen = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  return (
    <AppSafeView style={styles.container}>
      <Image source={IMAGES.appLogo} style={styles.logo} />
      <AppTextInput placeholder="Email" value={Email} onChangeText={setEmail} />
      <AppTextInput
        placeholder="Password"
        value={Password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      <AppText style={styles.appName}> Smart E-Commerce</AppText>
      <AppButton title="Login" />
      <AppButton
        title="Sign Up"
        style={styles.SignUpbutton}
        TextColor={AppColors.primary}
      />
    </AppSafeView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: SharedPaddingHorizontal,
  },
  logo: {
    height: vs(150),
    width: s(150),
    marginBottom: vs(30),
  },
  appName: {
    fontSize: s(16),
    marginBottom: vs(15),
  },
  SignUpbutton: {
    backgroundColor: AppColors.white,
    borderColor: AppColors.primary,
    marginTop: vs(15),
    borderWidth: 1,
  },
});
