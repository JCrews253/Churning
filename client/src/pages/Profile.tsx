import React from "react";
import { View, StyleSheet, Button } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    width: 300,
    height: 300,
  },
});

const Profile = () => {
  return (
    <View style={styles.container}>
      <Button title="Test">Button</Button>
    </View>
  );
};

export default Profile;
