import { StyleSheet, Text, View } from "react-native";
import AppText from "./src/components/texts/AppText";
import AppSafeView from "./src/components/views/AppSafeView";
import { SafeAreaProvider } from "react-native-safe-area-context";
import FlashMessage, { showMessage } from "react-native-flash-message";
import AppButton from "./src/components/buttons/AppButton";
import AppTextInput from "./src/components/inputs/AppTextInput";
export default function App() {
  return (
    <SafeAreaProvider>
      
      <AppSafeView>
        <AppTextInput 
        placeholder='username'

        
        />
      </AppSafeView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
