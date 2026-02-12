import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { MainStackNavigator, AboutStackNavigator } from "./StackNavigator";
import IosStackNavigator from "./IosStackNavigator";
import AndroidStackNavigator from "./AndroidStackNavigaror";
import Home from "../screens/Home";
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"component={Home}></Tab.Screen>
      <Tab.Screen
        name="iOS"component={Ios}></Tab.Screen>
        <Tab.Screen
        name="Android"component={Android}></Tab.Screen>
    </Tab.Navigator>

  );
};

export default BottomTabNavigator;
