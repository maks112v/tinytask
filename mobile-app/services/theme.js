import React, { createContext, useContext, useState } from "react";

const themeContext = createContext({});

export const useTheme = () => useContext(themeContext);

const light = {
  colors: {
    primary: "#3F51B5",
    secondary: "",
    dark: "#212121",
    muted: "#2e2e2e",
    light: "white",
  },
};

const dark = {
  colors: {
    primary: "#3F51B5",
    secondary: "",
    bg: "#222831",
    dark: "#212121",
    muted: "#eeeeee",
    light: "white",
  },
};

const themes = {
  light: {
    slug: "light",
    name: "Light",
    theme: light,
  },
  dark: {
    slug: "dark",
    name: "Dark",
    theme: dark,
  },
};

const fonts = {
  Poppins_100Thin: "Poppins_100Thin",
  Poppins_200ExtraLight: "Poppins_200ExtraLight",
  Poppins_300Light: "Poppins_300Light",
  Poppins_400Regular: "Poppins_400Regular",
  Poppins_500Medium: "Poppins_500Medium",
  Poppins_600SemiBold: "Poppins_600SemiBold",
  Poppins_700Bold: "Poppins_700Bold",
  Poppins_800ExtraBold: "Poppins_800ExtraBold",
};

const spacers = {
  xs: 2,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 24,
  xxl: 48,
  xxxl: 64,
};

export const ThemeWrapper = ({ children }) => {
  const [theme, setTheme] = useState(themes.light.slug);

  const colors = themes[theme].theme;

  const typography = {
    brandTitle: {
      fontFamily: fonts.Poppins_600SemiBold,
      color: colors.dark,
      fontSize: 28,
    },
    brandMuted: {
      fontFamily: fonts.Poppins_300Light,
      color: colors.muted,
      fontSize: 14,
    },
    title: {
      fontFamily: fonts.Poppins_700Bold,
      color: colors.dark,
      fontSize: 20,
    },
    subtitle: {
      fontFamily: fonts.Poppins_500Medium,
      color: colors.dark,
      fontSize: 20,
    },
    input: {
      fontFamily: fonts.Poppins_500Medium,
      color: colors.dark,
      fontSize: 18,
    },
    body: {
      fontFamily: fonts.Poppins_400Regular,
      color: colors.muted,
      fontSize: 16,
    },
    accent: {
      fontFamily: fonts.Poppins_400Regular,
      color: colors.dark,
      fontSize: 14,
    },
  };

  return (
    <themeContext.Provider value={{ colors, typography, spacers }}>
      {children}
    </themeContext.Provider>
  );
};
