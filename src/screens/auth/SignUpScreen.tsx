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
import { useForm } from "react-hook-form";
import AppTextInputController from "../../components/inputs/AppTextInputController";
import { showMessage } from "react-native-flash-message";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useDispatch } from "react-redux";
import { getUserData } from "../../store/reducers/UserSlice";
import { useTranslation } from "react-i18next";
const SignUpScreen = () => {
  const { t } = useTranslation();
  const schema = yup
    .object({
      UserName: yup
        .string()
        .required(t("validation.userNameRequired"))
        .min(5, t("validation.userNameMin")),
      Email: yup
        .string()
        .required(t("validation.emailRequired"))
        .min(11, t("validation.emailInvalid")),
      Password: yup
        .string()
        .required(t("validation.passwordRequired"))
        .min(8, t("validation.passwordMin")),
      conPassword: yup
        .string()
        .required(t("validation.confirmPasswordRequired"))
        .min(8, t("validation.confirmPasswordMin"))
        .oneOf([yup.ref("Password")], t("validation.passwordsMustMatch")),
    })
    .required();
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  const navigation = useNavigation<any>();

  type formdata = yup.InferType<typeof schema>;
  const dispatch = useDispatch();
  const createNewAccount = async (data: formdata) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.Email,
        data.Password,
      );
      navigation.navigate("MainAppBottomTab");
      const userDataObj = {
        uid: userCredential.user.uid,
      };

      dispatch(getUserData(userDataObj));
    } catch (error: any) {
      let errorMessage = "";
      if (error.code === "auth/email-already-in-use") {
        errorMessage = t("errors.emailAlreadyRegistered");
      } else if (error.code === "auth/invalid-email") {
        errorMessage = t("errors.invalidEmailFormat");
      } else if (error.code === "auth/weak-password") {
        errorMessage = t("errors.weakPassword");
      } else if (error.code === "auth/operation-not-allowed") {
        errorMessage = t("errors.operationNotAllowed");
      } else {
        errorMessage = t("errors.somethingWrong");
      }
      console.log(errorMessage);

      // Alert.alert(errorMessage)
      showMessage({
        type: "danger",
        message: errorMessage,
      });
    }
  };
  return (
    <AppSafeView style={styles.container}>
      <Image source={IMAGES.appLogo} style={styles.logo} />
      <AppTextInputController
        placeholder={t("auth.username")}
        name={"UserName"}
        control={control}
        KeyboardType={"default"}
      />
      <AppTextInputController
        placeholder={t("auth.email")}
        name={"Email"}
        control={control}
        KeyboardType={"email-address"}
      />

      <AppTextInputController
        placeholder={t("auth.password")}
        name={"Password"}
        control={control}
        KeyboardType={"default"}
        secureTextEntry={true}
      />

      <AppTextInputController
        placeholder={t("auth.confirmPassword")}
        name={"conPassword"}
        control={control}
        KeyboardType={"default"}
        secureTextEntry={true}
      />

      <AppText style={styles.appName}>{t("common.appName")}</AppText>
      <AppButton
        title={t("auth.createNewAccount")}
        onPress={handleSubmit(createNewAccount)}
      />
      <AppButton
        title={t("auth.goToSignIn")}
        style={styles.SignInButton}
        TextColor={AppColors.primary}
        onPress={() => navigation.navigate("SignIn")}
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
