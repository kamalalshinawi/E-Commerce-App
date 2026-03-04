import { ActivityIndicator, StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";

import { NavigationContainer } from "@react-navigation/native";
import MainAppStack from "./src/navigation/MainAppStack";

export default function App() {
  const [fontLoad] = useFonts({
    "nunito-Bold": require("./src/assets/fonts/Nunito-Bold.ttf"),
    "nunito-Medium": require("./src/assets/fonts/Nunito-Medium.ttf"),
  });

  if (!fontLoad) {
    return (
      <View style={{flex:1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <MainAppStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
