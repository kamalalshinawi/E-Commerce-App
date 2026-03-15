import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

const App = () => {
  const [totalNumber, setTotalNumber] = useState(0);
  useEffect(() => {
    getData();
  });
  // store data
  const storeData = async (value: string) => {
    try {
      await AsyncStorage.setItem("totalNumber", value);
    } catch (e) {
      // saving error
    }
  };

  // Reading data
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("totalNumber");
      if (value !== null) {
        // value previously stored
        setTotalNumber(Number(value));
      }
    } catch (e) {
      // error reading value
    }
  };

  // handel submit data in local storage
  const handelIncreaseTotalNumbers = () => {
    const totalNumbers = totalNumber + 10;
    setTotalNumber(totalNumbers);
    storeData(totalNumbers?.toString());
  };

  // Reset the data
  const clearStorageDataAndVisible = async () => {
    try {
      await AsyncStorage.removeItem("totalNumber");
      setTotalNumber(0);
    } catch (error) {
      //handel Error
    }
  };

  const clearStorage = async () => {
    try {
      await AsyncStorage.removeItem("totalNumber");
    } catch (error) {
      // Error handel
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20 }}>Total number is {totalNumber}</Text>
      <Button title="Increase by 10 " onPress={handelIncreaseTotalNumbers} />

      <Button
        title="Reset The Total Numbers in both "
        onPress={clearStorageDataAndVisible}
      />
      <Button title="Reset The Local Storage only " onPress={clearStorage} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});

// import { ActivityIndicator, StyleSheet, View } from "react-native";
// import { useFonts } from "expo-font";
// import { NavigationContainer } from "@react-navigation/native";
// import MainAppStack from "./src/navigation/MainAppStack";
// import { Provider } from "react-redux";
// import { store } from "./src/store/store";
// import FlashMessage from "react-native-flash-message";
// import i18n from "./src/localization/i18n";
// import { I18nextProvider } from "react-i18next";
// export default function App() {
//   const [fontLoad] = useFonts({
//     "nunito-Bold": require("./src/assets/fonts/Nunito-Bold.ttf"),
//     "nunito-Medium": require("./src/assets/fonts/Nunito-Medium.ttf"),
//   });

//   if (!fontLoad) {
//     return (
//       <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//         <ActivityIndicator size={"large"} />
//       </View>
//     );
//   }

//   return (
//     <Provider store={store}>
//       <I18nextProvider i18n={i18n}>
//         <NavigationContainer>
//           <MainAppStack />
//           <FlashMessage position="top" />
//         </NavigationContainer>
//       </I18nextProvider>
//     </Provider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
