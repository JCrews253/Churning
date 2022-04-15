import { VStack, Text, HStack, Progress } from "native-base";
import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  textTop: {
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: 5,
  },
  textBottom: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: 5,
  },
});

interface ActiveSUBProps {
  cardName: string;
  subOffer: string;
  currentSpend: number;
  neededSpend: number;
  date: string;
  onPress: () => void;
}

const ActiveSUB = ({
  cardName,
  date,
  subOffer,
  currentSpend,
  neededSpend,
  onPress,
}: ActiveSUBProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <VStack>
        <HStack style={styles.textTop}>
          <Text>{cardName}</Text>
          <Text>{subOffer}</Text>
        </HStack>
        <Progress
          value={(currentSpend / neededSpend) * 100}
          _filledTrack={{ bg: "#149078" }}
        />
        <HStack style={styles.textBottom}>
          <Text>{date}</Text>
          <Text>{`$${currentSpend} / $${neededSpend}`}</Text>
        </HStack>
      </VStack>
    </TouchableOpacity>
  );
};

export default ActiveSUB;
