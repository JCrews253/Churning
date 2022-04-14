import { Divider } from "native-base";
import React from "react";
import { View, StyleSheet } from "react-native";
import ActiveSUB from "./ActiveSUB";
import Card from "./Card";

const styles = StyleSheet.create({
  divider: {
    marginTop: 10,
    marginBottom: 10,
  },
});

const ActiveSUBs = () => {
  return (
    <Card>
      <View>
        <ActiveSUB
          cardName="Chase Sapphire Preferred"
          subOffer="80k UR"
          date={"4/15/2022"}
          currentSpend={2351}
          neededSpend={4000}
        />
        <Divider style={styles.divider} />
        <ActiveSUB
          cardName="American Express Platinum"
          subOffer="120k MR"
          date={"6/8/2022"}
          currentSpend={4351}
          neededSpend={5000}
        />
        <Divider style={styles.divider} />
        <ActiveSUB
          cardName="AAdvantage Business"
          subOffer="70k AA Miles"
          date={"5/24/2022"}
          currentSpend={950}
          neededSpend={1000}
        />
      </View>
    </Card>
  );
};

export default ActiveSUBs;
