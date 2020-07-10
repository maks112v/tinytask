import React, { createContext, useContext } from "react";

const themeContext = createContext({});

export const useTheme = () => useContext(themeContext);

export const ThemeWrapper = ({ children }) => {
  return <themeContext.Provider value={{}}>{children}</themeContext.Provider>;
};
