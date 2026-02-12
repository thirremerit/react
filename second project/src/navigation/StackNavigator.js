import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import BottomTabNavigator from "./BottomTabNavigator";
import Single1 from "../screens/Single1";

const Stack = createStackNavigator();



const MainStackNavigator = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen
       name="Home"
      component={BottomTabNavigator}
      options={{headerShown:false}}
      />
      <Stack.Screen
       name="Single1"
      component={Single1}
      options={{title:"Details"}}
      />
    </Stack.Navigator>
  );
};


export default MainStackNavigator;