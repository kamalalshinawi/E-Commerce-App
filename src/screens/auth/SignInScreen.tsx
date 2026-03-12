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
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { showMessage } from "react-native-flash-message";
import { useDispatch } from "react-redux";
import { getUserData } from "../../store/reducers/UserSlice";
import { useTranslation } from "react-i18next";

const SignInScreen = () => {
  const { t } = useTranslation();
  const schema = yup
    .object({
      Email: yup
        .string()
        .required(t("validation.emailRequired"))
        .min(11, t("validation.emailInvalid")),
      Password: yup
        .string()
        .required(t("validation.passwordRequired"))
        .min(8, t("validation.passwordMin")),
    })
    .required();

  const navigation = useNavigation<any>();
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  type formdata = yup.InferType<typeof schema>;

  const loginUser = async (data: formdata) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.Email,
        data.Password,
      );
      navigation.navigate("MainAppBottomTab");
      // console.log(JSON.stringify(userCredential,null,3) )
      const userDataObj = {
        uid: userCredential.user.uid,
      };

      dispatch(getUserData(userDataObj));
    } catch (error: any) {
      let errorMessage = "";
      if (error.code === "auth/user-not-found") {
        errorMessage = t("errors.userNotFound");
      } else if (error.code === "auth/invalid-credential") {
        errorMessage = t("errors.wrongEmailOrPassword");
      } else {
        errorMessage = t("errors.somethingWrong");
      }

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
        control={control}
        placeholder={t("auth.email")}
        name={"Email"}
        KeyboardType={"email-address"}
      />
      <AppTextInputController
        control={control}
        placeholder={t("auth.password")}
        name={"Password"}
        secureTextEntry={true}
      />

      <AppText style={styles.appName}>{t("common.appName")}</AppText>
      <AppButton title={t("auth.login")} onPress={handleSubmit(loginUser)} />
      <AppButton
        title={t("auth.signUp")}
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
