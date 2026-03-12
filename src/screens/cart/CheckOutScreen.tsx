import { StyleSheet,View } from "react-native";
import React from "react";
import AppSafeView from "../../components/views/AppSafeView";
import {
  commonStyles,
  SharedPaddingHorizontal,
} from "../../styles/sharedStyles";
import { vs, s } from "react-native-size-matters";
import { AppColors } from "../../styles/colors";
import AppButton from "../../components/buttons/AppButton";
import {
  isAndroid,
  isIos,
  ShippingFees,
  Taxes,
} from "../../constants/constants";
import AppTextInputController from "../../components/inputs/AppTextInputController";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { addDoc, collection, doc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { showMessage } from "react-native-flash-message";
import { useNavigation } from "@react-navigation/native";
import { emptyCart } from "../../store/reducers/CartSlice";
import { useTranslation } from "react-i18next";

const CheckOutScreen = () => {
  const { t } = useTranslation();
  const schema = yup
    .object({
      FullName: yup
        .string()
        .required(t("validation.fullNameRequired"))
        .min(3, t("validation.fullNameMin")),
      PhoneNumber: yup
        .string()
        .required(t("validation.phoneRequired"))
        .matches(/^[0-9]+$/, t("validation.phoneDigitsOnly"))
        .min(10, t("validation.phoneMin")),
      Address: yup
        .string()
        .required(t("validation.addressRequired"))
        .min(9, t("validation.addressMin")),
    })
    .required();

  type formdata = yup.InferType<typeof schema>;
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const { userData } = useSelector((state: RootState) => state.UserSlice);
  const { items } = useSelector((state: RootState) => state.cartSlice);
  const totalProductPriceSum = items.reduce(
    (acc, item) => (acc += item.sum),
    0,
  );
  const orderTotal = totalProductPriceSum + Taxes + ShippingFees;
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  const saveInfo = async (formData: formdata) => {
    try {
      const orderBody = {
        ...formData,
        items,
        totalProductPriceSum,
        orderTotal,
        createdAt: new Date(),
      };
      const userOrderRef = collection(doc(db, "users", userData.uid), "orders");
      await addDoc(userOrderRef, orderBody);

      const ordersRef = collection(db, "orders");
      await addDoc(ordersRef, orderBody);

      showMessage({
        type: "success",
        message: t("messages.orderPlaced"),
      });
      navigation.goBack();
      dispatch(emptyCart());
    } catch (error) {
      console.log(error);
      showMessage({ type: "danger", message: t("errors.somethingWrong") });
    }
  };
  return (
    <AppSafeView>
      <View style={{ paddingHorizontal: SharedPaddingHorizontal, flex: 1 }}>
        <View style={styles.inputsContainer}>
          <AppTextInputController
            control={control}
            name={"FullName"}
            placeholder={t("cart.fullName")}
          />
          <AppTextInputController
            control={control}
            name={"PhoneNumber"}
            placeholder={t("cart.phoneNumber")}
            KeyboardType={"numeric"}
          />
          <AppTextInputController
            control={control}
            name={"Address"}
            placeholder={t("cart.address")}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title={t("common.confirm")} onPress={handleSubmit(saveInfo)} />
      </View>
    </AppSafeView>
  );
};

export default CheckOutScreen;

const styles = StyleSheet.create({
  inputsContainer: {
    ...commonStyles.shadow,
    padding: s(12),
    backgroundColor: AppColors.white,
    borderRadius: s(8),
    marginTop: isIos ? vs(10) : vs(-15),
  },
  buttonContainer: {
    paddingHorizontal: SharedPaddingHorizontal,
    position: "absolute",
    bottom: 0,
    borderTopWidth: 1,
    borderColor: AppColors.lightGray,
    width: "100%",
    paddingTop: isAndroid ? vs(14) : 0,
  },
});
