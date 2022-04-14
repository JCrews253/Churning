import { useNavigation } from "@react-navigation/native";
import { Box, Button } from "native-base";
import React, { Props } from "react";
import { StyleSheet } from "react-native";
import ActiveSUBs from "../components/ActiveSUBs";
import IssuerStatuses from "../components/IssuerStatuses";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7FAFC",
    marginBottom: 94,
  },
});

const Home = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <Box style={styles.container}>
      <IssuerStatuses />
      <ActiveSUBs />
      <Button onPress={() => navigation.navigate("Profile")}></Button>
    </Box>
  );
};

export default Home;
