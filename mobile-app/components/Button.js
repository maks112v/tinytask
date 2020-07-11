import React from "react";
import { StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useTheme } from "../services/theme";
import { typography } from "./ui";

export default function Button({
  title,
  type = "default",
  style,
  disabled,
  ...rest
}) {
  const { text } = useTheme;
  return (
    <TouchableOpacity
      key={`${title}-${disabled}`}
      disabled={disabled}
      style={[{ opacity: disabled ? 0.5 : 1 }, styles[type], style]}
      {...rest}
    >
      <Text style={[typography.brandMuted, { color: text }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  default: {
    width: "100%",
    alignItems: "center",
    color: "white",
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  text: {
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
});
