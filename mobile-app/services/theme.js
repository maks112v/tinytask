import React, { createContext, useContext, useState } from "react";

const themeContext = createContext({});

export const useTheme = () => useContext(themeContext);

const light = {
  bg: "white",
  text: "#212121",
  muted: "#2e2e2e",
};

const dark = {
  bg: "#222831",
  text: "white",
  muted: "#eeeeee",
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

export const ThemeWrapper = ({ children }) => {
  const [theme, setTheme] = useState(themes.light.slug);

  return (
    <themeContext.Provider value={{ ...themes[theme].theme }}>
      {children}
    </themeContext.Provider>
  );
};
