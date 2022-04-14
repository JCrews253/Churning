import { VStack, Text, HStack, Progress } from "native-base";
import React from "react";
import { View, StyleSheet } from "react-native";

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
}

const ActiveSUB = ({
  cardName,
  date,
  subOffer,
  currentSpend,
  neededSpend,
}: ActiveSUBProps) => {
  return (
    <View>
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
    </View>
  );
};

export default ActiveSUB;
