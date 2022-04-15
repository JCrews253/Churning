import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Divider } from "native-base";
import React from "react";
import { View, StyleSheet } from "react-native";
import { RootStackParamList } from "../../App";
import ActiveSUB from "./ActiveSUB";
import Card from "./Card";

const styles = StyleSheet.create({
  divider: {
    marginTop: 10,
    marginBottom: 10,
  },
});

const ActiveSUBs = () => {
  type NewType = StackNavigationProp<RootStackParamList>;

  const navigation = useNavigation<NewType>();

  return (
    <Card>
      <View>
        <ActiveSUB
          cardName="Chase Sapphire Preferred"
          subOffer="80k UR"
          date={"4/15/2022"}
          currentSpend={2351}
          neededSpend={4000}
          onPress={() =>
            navigation.navigate("Transactions", {
              cardName: "Chase Sapphire Preferred",
            })
          }
        />
        <Divider style={styles.divider} />
        <ActiveSUB
          cardName="American Express Platinum"
          subOffer="120k MR"
          date={"6/8/2022"}
          currentSpend={4351}
          neededSpend={5000}
          onPress={() =>
            navigation.navigate("Transactions", {
              cardName: "American Express Platinum",
            })
          }
        />
        <Divider style={styles.divider} />
        <ActiveSUB
          cardName="AAdvantage Business"
          subOffer="70k AA Miles"
          date={"5/24/2022"}
          currentSpend={950}
          neededSpend={1000}
          onPress={() =>
            navigation.navigate("Transactions", {
              cardName: "AAdvantage Business",
            })
          }
        />
      </View>
    </Card>
  );
};

export default ActiveSUBs;
