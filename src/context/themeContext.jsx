import React from "react";
import { createContext, useState } from "react";

const ThemeContext = createContext();

function ThemeWrapper({ children }) {
  const [isDarkMode, setIsDarkMode] = useState();

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeWrapper };
