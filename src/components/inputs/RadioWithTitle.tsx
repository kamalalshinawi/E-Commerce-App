import { StyleSheet,TouchableOpacity, View } from "react-native";
import React, { FC } from "react";
import { s, vs } from "react-native-size-matters";
import { AppColors } from "../../styles/colors";
import AppText from "../texts/AppText";

interface RadioWithTitleProps {
  title: string;
  Selected: boolean;
  onPress?: () => void;
}

const RadioWithTitle: FC<RadioWithTitleProps> = ({
  title,
  Selected,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.circle}>
        {Selected && <View style={styles.innerCircle} />}
      </View>
      <AppText style={styles.text}>{title}</AppText>
    </TouchableOpacity>
  );
};

export default RadioWithTitle;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: vs(7),
  },
  circle: {
    height: vs(20),
    width: s(20),
    borderRadius: s(10),
    borderColor: AppColors.black,
    borderWidth: s(2),
    alignItems: "center",
    justifyContent: "center",
  },
  innerCircle: {
    height: vs(10),
    width: s(10),
    borderRadius: s(10),
    backgroundColor: AppColors.primary,
  },
  text: {
    fontSize: s(15),
    marginStart: s(10),
  },
});
