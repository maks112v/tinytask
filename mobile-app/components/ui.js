import { StyleSheet } from "react-native";

export const fonts = {
  dm: {
    serif: "DMSerifText_400Regular",
    sansRegular: "DMSans_400Regular",
    sansMedium: "DMSans_500Medium",
    sansBold: "DMSans_700Bold",
  },
};

export const typography = StyleSheet.create({
  brandTitle: {
    fontFamily: fonts.dm.serif,
    color: "white",
    fontSize: 28,
  },
  brandMuted: {
    fontFamily: fonts.dm.sansRegular,
    color: "#575A7B",
    fontSize: 14,
  },
  title: {
    fontFamily: fonts.dm.sansBold,
    color: "#212121",
    fontSize: 20,
  },
  subtitle: {
    fontFamily: fonts.dm.sansRegular,
    color: "#212121",
    fontSize: 14,
  },
  accent: {
    fontFamily: fonts.dm.sansRegular,
    color: "#f25767",
    fontSize: 14,
  },
});
