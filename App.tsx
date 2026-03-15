import { ActivityIndicator, StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import MainAppStack from "./src/navigation/MainAppStack";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import FlashMessage from "react-native-flash-message";
import i18n from "./src/localization/i18n";
import { I18nextProvider } from "react-i18next";
export default function App() {
  const [fontLoad] = useFonts({
    "nunito-Bold": require("./src/assets/fonts/Nunito-Bold.ttf"),
    "nunito-Medium": require("./src/assets/fonts/Nunito-Medium.ttf"),
  });

  if (!fontLoad) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }

  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <NavigationContainer>
          <MainAppStack />
          <FlashMessage position="top" />
        </NavigationContainer>
      </I18nextProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
