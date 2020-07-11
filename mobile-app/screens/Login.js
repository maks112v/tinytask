import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import { typography } from "../components/ui";
import { appleAuthHandler, useSession } from "../services/auth";
import { useTheme } from "../services/theme";

export default function LoginScreen() {
  const { appleAuthAvailable } = useSession();
  const { bg, text, muted } = useTheme();

  return (
    <View style={{ backgroundColor: bg, flex: 1 }}>
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }} />
        <View style={{ alignItems: "center", marginBottom: 100 }}>
          {/* <CheckIcon /> */}
          <Text style={[typography.brandTitle, { color: text }]}>
            Tiny Task
          </Text>
          <Text style={[typography.brandMuted, { color: muted }]}>
            Regain clarity and calmness
          </Text>
          {appleAuthAvailable && (
            <Button
              onPress={appleAuthHandler}
              title="Login with Apple"
            ></Button>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
}
