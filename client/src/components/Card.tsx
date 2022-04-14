import React from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 10,
    padding: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

interface CardProps {
  children: JSX.Element | JSX.Element[];
}

const Card = ({ children }: CardProps) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;
