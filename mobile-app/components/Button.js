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
  const { text, colors } = useTheme();

  return (
    <TouchableOpacity
      key={`${title}-${disabled}`}
      disabled={disabled}
      style={[
        style,
        { opacity: disabled ? 0.5 : 1 },
        {
          width: "100%",
          alignItems: "center",
          color: "white",
          paddingVertical: 2,
          paddingHorizontal: 10,
          borderRadius: 5,
          backgroundColor: colors?.dark,
        },
      ]}
      {...rest}
    >
      <Text
        style={[
          typography.brandMuted,
          {
            alignItems: "center",
            padding: 10,
            borderRadius: 5,
            color: colors.light,
          },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
});
