import {
  CompositeScreenProps,
  NavigatorScreenParams,
  RouteProp,
  useRoute,
} from "@react-navigation/native";
import { Box } from "native-base";
import React from "react";
import {
  Dimensions,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";
import Card from "../components/Card";
import cardImage from "../images/SapphirePreferred.png";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: "100%",
    height: (Dimensions.get("window").width * 10) / 16 - 20,
    resizeMode: "contain",
    marginBottom: 20,
  },
});

export interface TransactionsPageProps {
  cardName: string;
}

const TransactionsPage = () => {
  const route = useRoute();
  const params = route.params as TransactionsPageProps;

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.image} source={cardImage}></Image>
        <Card>
          <Box width={200}>
            {Array.from(Array(20).keys()).map((a, idx) => {
              return (
                <Box width="100%" height={10}>
                  <Text>{idx}</Text>
                </Box>
              );
            })}
          </Box>
        </Card>
      </View>
    </ScrollView>
  );
};

export default TransactionsPage;
