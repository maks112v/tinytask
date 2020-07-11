import greet from "greeting-time";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { typography } from "../components/ui";
import { useTheme } from "../services/theme";

export default function HomeScreen() {
  const { text } = useTheme();
  return (
    <SafeAreaView>
      <Text style={[typography.title, { color: text }]}>
        {greet(new Date())},
      </Text>
    </SafeAreaView>
  );
}
