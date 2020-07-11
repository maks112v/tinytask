import { StyleSheet } from "react-native";

export const fonts = {
  Poppins_100Thin: "Poppins_100Thin",
  Poppins_200ExtraLight: "Poppins_200ExtraLight",
  Poppins_300Light: "Poppins_300Light",
  Poppins_400Regular: "Poppins_400Regular",
  Poppins_500Medium: "Poppins_500Medium",
  Poppins_600SemiBold: "Poppins_600SemiBold",
  Poppins_700Bold: "Poppins_700Bold",
  Poppins_800ExtraBold: "Poppins_800ExtraBold",
};

export const typography = StyleSheet.create({
  brandTitle: {
    fontFamily: fonts.Poppins_600SemiBold,
    fontSize: 28,
  },
  brandMuted: {
    fontFamily: fonts.Poppins_300Light,
    fontSize: 14,
  },
  title: {
    fontFamily: fonts.Poppins_700Bold,
    fontSize: 20,
  },
  subtitle: {
    fontFamily: fonts.Poppins_400Regular,
    fontSize: 14,
  },
  accent: {
    fontFamily: fonts.Poppins_400Regular,
    fontSize: 14,
  },
});
