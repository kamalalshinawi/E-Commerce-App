import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { s, vs } from "react-native-size-matters";
import AppText from "../texts/AppText";
import AppButton from "../buttons/AppButton";
import ActionSheet from "react-native-actions-sheet";
import RadioWithTitle from "../inputs/RadioWithTitle";

const LanguageBottomSheet = () => {
  return (
    <ActionSheet id="LANG_SHEET">
      <View style={styles.container}>
        <AppText style={styles.headText}>Select Language</AppText>
        <RadioWithTitle
          title="English"
          Selected={false}
          onPress={() => {}}
        />
        <RadioWithTitle title="العربية" Selected={false} />

        <AppButton title="Confirm" />
      </View>
    </ActionSheet>
  );
};

export default LanguageBottomSheet;

const styles = StyleSheet.create({
  container: {
    padding: s(15),
  },
  headText: {
    marginBottom: vs(10),
    textAlign: "center",
  },
});
