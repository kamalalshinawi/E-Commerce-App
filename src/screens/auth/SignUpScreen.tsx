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
const SignUpScreen = () => {
  const schema = yup
    .object({
      UserName: yup
        .string()
        .required("Must Enter The UserName")
        .min(5, "User Name Must up to 5 "),
      Email: yup
        .string()
        .required("Must enter Email")
        .min(11, "Must Enter a valid Email"),
      Password: yup
        .string()
        .required("Enter Your Password")
        .min(8, "password Must up to 8 "),
      conPassword: yup
        .string()
        .required("Enter Your Password")
        .min(8, "password Must up to 8 ")
        .oneOf([yup.ref("Password")], "Password Must Match "),
    })
    .required();
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  const navigation = useNavigation();

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
        errorMessage = "This email is already registered";
      } else if (error.code === "auth/invalid-email") {
        errorMessage = "Invalid email address format";
      } else if (error.code === "auth/weak-password") {
        errorMessage = "Password must be at least 6 characters";
      } else if (error.code === "auth/operation-not-allowed") {
        errorMessage = "Email/password accounts are not enabled";
      } else {
        errorMessage = "SomeThing Wrong";
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
        placeholder="Username"
        name={"UserName"}
        control={control}
        KeyboardType={"default"}
      />
      <AppTextInputController
        placeholder="Email"
        name={"Email"}
        control={control}
        KeyboardType={"email-address"}
      />

      <AppTextInputController
        placeholder="Password"
        name={"Password"}
        control={control}
        KeyboardType={"default"}
        secureTextEntry={true}
      />

      <AppTextInputController
        placeholder="Confirm Password"
        name={"conPassword"}
        control={control}
        KeyboardType={"default"}
        secureTextEntry={true}
      />

      <AppText style={styles.appName}> Smart E-Commerce</AppText>
      <AppButton
        title="Create New Account"
        onPress={handleSubmit(createNewAccount)}
      />
      <AppButton
        title="Go To Sign In"
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
