import React from "react";
import { StyleSheet } from "react-native";
import { NativeBaseProvider, Box } from "native-base";
import AppBar from "./src/components/AppBar";
import Home from "./src/pages/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "./src/pages/Profile";
import TransactionsPage, {
  TransactionsPageProps,
} from "./src/pages/TransactionsPage";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7FAFC",
    marginBottom: 94,
    overflow: "hidden",
  },
});

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Home: undefined;
  Wallet: undefined;
  Notifications: undefined;
  Profile: undefined;
  Transactions: TransactionsPageProps;
};

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Box style={styles.container} safeAreaTop>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Wallet"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notifications"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Transactions" component={TransactionsPage} />
          </Stack.Navigator>
        </Box>
        <AppBar />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
