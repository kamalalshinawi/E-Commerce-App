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
import { useNavigation } from "@react-navigation/native";



const SignUpScreen = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigation = useNavigation();
  
  return (
    <AppSafeView style={styles.container}>
      <Image source={IMAGES.appLogo} style={styles.logo} />
      <AppTextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <AppTextInput placeholder="Email" value={Email} onChangeText={setEmail} />

      <AppTextInput
        placeholder="Password"
        value={Password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      <AppTextInput
        placeholder="confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={true}
      />

      <AppText style={styles.appName}> Smart E-Commerce</AppText>
      <AppButton title="Create New Account" />
      <AppButton
        title="Go To Sign In"
        style={styles.SignInButton}
        TextColor={AppColors.primary}
        onPress={()=> navigation.navigate("SignIn")}
      />
    </AppSafeView>
  );
};

export default SignUpScreen;

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
  SignInButton: {
    backgroundColor: AppColors.white,
    borderColor: AppColors.primary,
    marginTop: vs(15),
    borderWidth: 1,
  },
});
