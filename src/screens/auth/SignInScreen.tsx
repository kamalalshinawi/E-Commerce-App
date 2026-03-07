import { StyleSheet, Image } from "react-native";
import React from "react";
import AppSafeView from "../../components/views/AppSafeView";
import { SharedPaddingHorizontal } from "../../styles/sharedStyles";
import { IMAGES } from "../../constants/images-paths";
import { s, vs } from "react-native-size-matters";
import AppText from "../../components/texts/AppText";
import AppButton from "../../components/buttons/AppButton";
import { AppColors } from "../../styles/colors";
import { useNavigation } from "@react-navigation/native";
import AppTextInputController from "../../components/inputs/AppTextInputController";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const SignInScreen = () => {
  const schema = yup
    .object({
      Email: yup
        .string()
        .required("Must type email")
        .min(11, "must Enter Email"),
      Password: yup
        .string()
        .required("Must enter Password")
        .min(8, "Password Must be up 8 number "),
    })
    .required();

  const navigation = useNavigation();
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  type formdata = yup.InferType<typeof schema>;
  const loginUser = (formdata: formdata) => {
    navigation.navigate("MainAppBottomTab");
  };

  return (
    <AppSafeView style={styles.container}>
      <Image source={IMAGES.appLogo} style={styles.logo} />
      <AppTextInputController
        control={control}
        placeholder="Email"
        name={"Email"}
        KeyboardType={"email-address"}
      />
      <AppTextInputController
        control={control}
        placeholder="Password"
        name={"Password"}
        secureTextEntry={true}
      />

      <AppText style={styles.appName}> Smart E-Commerce</AppText>
      <AppButton title="Login" onPress={handleSubmit(loginUser)} />
      <AppButton
        title="Sign Up"
        style={styles.SignUpbutton}
        TextColor={AppColors.primary}
        onPress={() => navigation.navigate("SignUp")}
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
