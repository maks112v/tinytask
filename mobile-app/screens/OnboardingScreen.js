import React from "react";
import { Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../services/theme";

export default function OnboardingScreen() {
  const { colors, typography, spacers } = useTheme();
  return (
    <SafeAreaView style={{ marginTop: 25, paddingHorizontal: 12 }}>
      <View>
        <Text style={[typography.title]}>Welcome, let's get started</Text>
        <Text style={[typography.body]}>
          Tell us more about you so we can personalize your experience.
        </Text>
      </View>
      <View style={{ marginTop: spacers.xl }}>
        <Text style={[typography.subtitle]}>About You</Text>
        <TextInput
          placeholder="First Name"
          style={[typography.input, { marginBottom: spacers.lg }]}
        />
        <TextInput placeholder="Email" style={[typography.input]} />
      </View>
    </SafeAreaView>
  );
}
