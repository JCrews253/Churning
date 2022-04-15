import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  Box,
  Center,
  HStack,
  Icon,
  Text,
  Pressable,
  VStack,
  Badge,
} from "native-base";
import React, { useState } from "react";
import { RootStackParamList } from "../../App";

const AppBar = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [route, setRoute] = useState<string | undefined>("Home");
  navigation.addListener("state", (state) => {
    setRoute(state?.data?.state?.routes[0]?.name);
  });

  return (
    <Box
      flex={1}
      bg="white"
      width="100%"
      alignSelf="center"
      position="absolute"
      bottom={0}
    >
      <HStack bg="#149078" alignItems="center" safeAreaBottom={5} shadow={6}>
        <Pressable
          opacity={route === "Home" ? 1 : 0.5}
          py="3"
          flex={1}
          onPress={() => {
            navigation.reset({ routes: [{ name: "Home" }] });
          }}
        >
          <Center>
            <Icon
              mb="1"
              as={
                <MaterialCommunityIcons
                  name={route === "Home" ? "home" : "home-outline"}
                />
              }
              color="white"
              size="xl"
            />
            <Text color="white" fontSize="12">
              Home
            </Text>
          </Center>
        </Pressable>
        <Pressable
          opacity={route === "Wallet" ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => {
            navigation.reset({ routes: [{ name: "Wallet" }] });
          }}
        >
          <Center>
            <Icon
              mb="1"
              as={
                <>
                  <Ionicons
                    name={route === "Wallet" ? "wallet" : "wallet-outline"}
                    size={28}
                    color="white"
                  />
                </>
              }
              color="white"
              size="xl"
            />
            <Text color="white" fontSize="12">
              Wallet
            </Text>
          </Center>
        </Pressable>
        <Pressable
          opacity={route === "Notifications" ? 1 : 0.6}
          py="2"
          flex={1}
          onPress={() => {
            navigation.reset({ routes: [{ name: "Notifications" }] });
          }}
        >
          <Center>
            <VStack>
              {false && (
                <Badge
                  colorScheme="danger"
                  rounded="full"
                  mb={-4}
                  mr={-4}
                  zIndex={1}
                  variant="solid"
                  alignSelf="flex-end"
                  _text={{
                    fontSize: 12,
                  }}
                >
                  2
                </Badge>
              )}
              <Icon
                mb="1"
                as={
                  <Ionicons
                    name={
                      route === "Notifications"
                        ? "notifications"
                        : "notifications-outline"
                    }
                  />
                }
                color="white"
                size="xl"
              />
            </VStack>
            <Text color="white" fontSize="12">
              Notifications
            </Text>
          </Center>
        </Pressable>
        <Pressable
          opacity={route === "Profile" ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => {
            navigation.reset({ routes: [{ name: "Profile" }] });
          }}
        >
          <Center>
            <Icon
              mb="1"
              as={
                <MaterialCommunityIcons
                  name={route === "Profile" ? "account" : "account-outline"}
                />
              }
              color="white"
              size="xl"
            />
            <Text color="white" fontSize="12">
              Account
            </Text>
          </Center>
        </Pressable>
      </HStack>
    </Box>
  );
};

export default AppBar;
