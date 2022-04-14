import React from "react";
import { StyleSheet } from "react-native";
import { NativeBaseProvider, Box } from "native-base";
import AppBar from "./src/components/AppBar";
import Home from "./src/pages/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "./src/pages/Profile";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7FAFC",
    marginBottom: 94,
  },
});

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
};

export default function App() {
  return (
    <NativeBaseProvider>
      <Box style={styles.container} safeAreaTop>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={Profile} />
          </Stack.Navigator>
        </NavigationContainer>
      </Box>
      <AppBar />
    </NativeBaseProvider>
  );
}
