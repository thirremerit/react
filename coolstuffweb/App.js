import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import HomeScreen from "./screens/HomeScreen";
import PlacesScreen from "./screens/PlacesScreen";
import DetailsScreen from "./screens/DetailsScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import { FavoritesProvider } from "./FavoritesContext";
import { ReviewsProvider } from "./ReviewsContext";
import { AuthProvider, useAuth } from "./AuthContext";

const AuthStack = createNativeStackNavigator();
const AppStack = createNativeStackNavigator();

function AppStackNavigator() {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="Home" component={HomeScreen} />
      <AppStack.Screen name="Places" component={PlacesScreen} />
      <AppStack.Screen name="Details" component={DetailsScreen} />
      <AppStack.Screen name="Favorites" component={FavoritesScreen} />
    </AppStack.Navigator>
  );
}

function RootNavigator() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user ? (
        <AppStackNavigator />
      ) : (
        <AuthStack.Navigator screenOptions={{ headerShown: false }}>
          <AuthStack.Screen name="SignIn" component={SignInScreen} />
          <AuthStack.Screen name="SignUp" component={SignUpScreen} />
        </AuthStack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <FavoritesProvider>
        <ReviewsProvider>
          <StatusBar style="light" />
          <RootNavigator />
        </ReviewsProvider>
      </FavoritesProvider>
    </AuthProvider>
  );
}
