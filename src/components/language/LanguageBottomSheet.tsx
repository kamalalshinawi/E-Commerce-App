import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { s, vs } from "react-native-size-matters";
import AppText from "../texts/AppText";
import AppButton from "../buttons/AppButton";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import RadioWithTitle from "../inputs/RadioWithTitle";
import { useTranslation } from "react-i18next";

const LanguageBottomSheet = () => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState<"en" | "ar">(
    i18n.language?.startsWith("ar") ? "ar" : "en",
  );

  const onConfirmLanguage = async () => {
    await i18n.changeLanguage(selectedLanguage);
    await SheetManager.hide("LANG_SHEET");
  };

  return (
    <ActionSheet id="LANG_SHEET">
      <View style={styles.container}>
        <AppText style={styles.headText}>{t("profile.selectLanguage")}</AppText>
        <RadioWithTitle
          title={t("common.english")}
          Selected={selectedLanguage === "en"}
          onPress={() => setSelectedLanguage("en")}
        />
        <RadioWithTitle
          title={t("common.arabic")}
          Selected={selectedLanguage === "ar"}
          onPress={() => setSelectedLanguage("ar")}
        />
        <AppButton title={t("common.confirm")} onPress={onConfirmLanguage} />
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
