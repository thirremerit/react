import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Laptop from "../screens/Laptop";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#2C3E50",
  },
  headerTintColor: "#00BCD4",
};

const LaptopStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Laptop" component={Laptop} />
    </Stack.Navigator>
  );
};

export default LaptopStackNavigator;
