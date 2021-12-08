import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Colors } from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

import StarshipFeedScreen from "../screens/StarshipFeedScreen";
import StarshipFeedExampleScreen from "../screens/exercice/FeedScreen";
import StarshipDetailsScreen from "../screens/StarshipDetailsScreen";

import { AppRoutes } from "./AppRoutes";

import { PilotScreen } from "~/screens/PilotScreen";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const StarshipNavigator = () => {
  return (
    <Stack.Navigator
      mode="modal"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={AppRoutes.STARSHIP_FEED_SCREEN}
        component={StarshipFeedScreen}
        // component={StarshipFeedExampleScreen}
      />
      <Stack.Screen
        name={AppRoutes.STARSHIP_DETAIL_SCREEN}
        component={StarshipDetailsScreen}
      />
    </Stack.Navigator>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      activeColor={Colors.purple500}
      inactiveColor={Colors.grey300}
      barStyle={{ backgroundColor: Colors.white }}
    >
      <Tab.Screen
        name={AppRoutes.STARSHIP_FEED_SCREEN}
        component={StarshipNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="space-shuttle" size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={AppRoutes.PILOT_SCREEN}
        component={PilotScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-astronaut" size={22} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
