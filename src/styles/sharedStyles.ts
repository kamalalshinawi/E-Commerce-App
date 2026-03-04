import { s } from "react-native-size-matters";
import { StyleSheet } from "react-native";
import { AppColors } from "./colors";

export const SharedPaddingHorizontal = s(12);

export const  commonStyles = StyleSheet.create({
    shadow:{
        // ios
        shadowColor: AppColors.black,
        shadowOffset:{width:0, height:4},
        shadowOpacity: .2,
        shadowRadius: 4,
        // android
        elevation: 5,
    }
})