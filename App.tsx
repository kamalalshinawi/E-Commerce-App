import { StyleSheet, Text, View } from "react-native";
import AppText from "./src/components/texts/AppText";
import AppSafeView from "./src/components/views/AppSafeView";
import { SafeAreaProvider } from "react-native-safe-area-context";
import FlashMessage, { showMessage } from "react-native-flash-message";
import AppButton from "./src/components/buttons/AppButton";
export default function App() {
  return (
    <SafeAreaProvider>
      <FlashMessage position="top" />
      <AppSafeView>
        <AppButton
          onPress={() =>
            showMessage({
              message: "Hello $$",
              color: "yellow",
              type: "success",
            })
          }
          disabled={false}
          title={"Hello World"}
        
        />

        <AppText variant="bold">Hello World</AppText>
      </AppSafeView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
