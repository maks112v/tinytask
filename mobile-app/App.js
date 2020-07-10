import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemeWrapper } from "./services/theme";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/Login";
import OnboardingScreen from "./screens/Onboarding";
import "./services/firebase";
import { AppLoading } from "expo";
import {
  useFonts,
  DMSerifText_400Regular,
} from "@expo-google-fonts/dm-serif-text";

import {
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_500Medium_Italic,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";

const RootStack = createStackNavigator();

function RootStackRouter() {
  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name="Login" component={LoginScreen} />
      <RootStack.Screen name="Home" component={OnboardingScreen} />
    </RootStack.Navigator>
  );
}

export default function App() {
  let [fontsLoaded] = useFonts({
    DMSerifText_400Regular,
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_500Medium_Italic,
    DMSans_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <ThemeWrapper>
        <RootStackRouter />
      </ThemeWrapper>
    </NavigationContainer>
  );
}
