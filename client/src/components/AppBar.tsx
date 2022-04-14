import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
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

const AppBar = () => {
  const [selected, setSelected] = useState(1);
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
          opacity={selected === 0 ? 1 : 0.5}
          py="3"
          flex={1}
          onPress={() => setSelected(0)}
        >
          <Center>
            <Icon
              mb="1"
              as={
                <MaterialCommunityIcons
                  name={selected === 0 ? "home" : "home-outline"}
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
          opacity={selected === 1 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => setSelected(1)}
        >
          <Center>
            <Icon
              mb="1"
              as={
                <>
                  <Ionicons
                    name={selected === 1 ? "wallet" : "wallet-outline"}
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
          opacity={selected === 2 ? 1 : 0.6}
          py="2"
          flex={1}
          onPress={() => setSelected(2)}
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
                      selected === 2 ? "notifications" : "notifications-outline"
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
          opacity={selected === 3 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => setSelected(3)}
        >
          <Center>
            <Icon
              mb="1"
              as={
                <MaterialCommunityIcons
                  name={selected === 3 ? "account" : "account-outline"}
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
