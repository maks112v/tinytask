import { View, Text } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import CheckIcon from "../assets/svgs/CheckIcon";
import { SafeAreaView } from "react-native-safe-area-context";
import { typography } from "../components/ui";

export default function LoginScreen() {
  return (
    <View style={{ backgroundColor: "#222831", flex: 1 }}>
      <StatusBar style="light" />
      <SafeAreaView>
        <View style={{ alignItems: "center" }}>
          {/* <CheckIcon /> */}
          <Text style={typography.brandTitle}>Welcome to Tiny Task</Text>
        </View>
      </SafeAreaView>
    </View>
  );
}
