import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { s, vs } from "react-native-size-matters";
import AppText from "../texts/AppText";
import AppButton from "../buttons/AppButton";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import RadioWithTitle from "../inputs/RadioWithTitle";
import { useTranslation } from "react-i18next";
import { languagesArr } from "../../localization/LanguagesList";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const LanguageBottomSheet = () => {
  const { t, i18n } = useTranslation();
  const insets = useSafeAreaInsets();
  const safeBottomInset = Math.min(insets.bottom, vs(10));
  const [selectedLanguage, setSelectedLanguage] = useState(
    i18n.language?.startsWith("ar") ? "ar" : "en",
  );

  const onConfirmLanguage = async () => {
    await i18n.changeLanguage(selectedLanguage);
    await SheetManager.hide("LANG_SHEET");
  };

  return (
    <ActionSheet id="LANG_SHEET">
      <View style={[styles.container, { paddingBottom: safeBottomInset + vs(4) }]}>
        <AppText style={styles.headText}>{t("profile.selectLanguage")}</AppText>

        {languagesArr.map((lang) => (
          <RadioWithTitle
            title={lang.label}
            key={lang.code}
            Selected={selectedLanguage === lang.code}
            onPress={() => setSelectedLanguage(lang.code)}
          />
        ))}
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
